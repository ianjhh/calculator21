function setResult(){
    const loan_amount = parseFloat(document.getElementById("loan_amount").value);
    let loan_term_year = parseInt(document.getElementById("loan_term_year").value);
    let loan_term_month = parseInt(document.getElementById("loan_term_month").value);
    const compound = parseFloat(document.getElementById("compound").value);
    const interest_rate = parseFloat(document.getElementById("interest_rate").value)/100;
    const payment = parseFloat(document.getElementById("payment").value);
    let total_no_payment, payment_period;

    if (isNaN(loan_term_year)){
      loan_term_year = 0;
    }

    if (isNaN(loan_term_month)){
      loan_term_month = 0;
    }

    if (payment == 365.25){
      payment_period = 'day';
      total_no_payment = (loan_term_year * 365.25) + (loan_term_month * 30.4167);
    }
    else if (payment == 48){
      payment_period = 'week';
      total_no_payment = (loan_term_year * 48) + (loan_term_month * 4);
    }
    else if (payment == 24){
      payment_period = '2 weeks';
      total_no_payment = (loan_term_year * 24) + (loan_term_month * 2);
    }
    else if (payment == 12){
      payment_period = 'month';
      total_no_payment = (loan_term_year * 12) + loan_term_month;
    }
    else if (payment == 4){
      payment_period = '3 months';
      total_no_payment = (loan_term_year * 4) + (loan_term_month/3);
    }
    else if (payment == 2){
      payment_period = '6 months';
      total_no_payment = (loan_term_year * 2) + (loan_term_month/6);
    }
    else if (payment == 1){
      payment_period = 'year';
      total_no_payment = loan_term_year + (loan_term_month/12);
    }

    let rate_per_period = Math.pow(1+(interest_rate/compound), compound/payment) - 1;
    let payment_every_period = loan_amount * ((rate_per_period * Math.pow(1+rate_per_period, total_no_payment))/(Math.pow(1+rate_per_period, total_no_payment) - 1));

    let total_amount = total_no_payment * payment_every_period;
    let balance = loan_amount;

    /* build amortization schedule */
    let result = "<table border='1'><tr><th>Period #</th><th>Starting Balance</th>" + "<th>Interest</th><th>Principal</th><th>Ending Balance</th></tr>";
    let interest, periodPrincipal;

    for (let i=0; i<total_no_payment; ++i){
      if (total_no_payment - i < 1){
          result+= "<tr align=left>" + "<td align='center'>" + (i+1) + "(Partial)" + "</td>" + "<td> $" + parseFloat(balance.toFixed(2)).toLocaleString("en-US") + "</td>";

          interest = (balance * Math.pow((1 + interest_rate/compound), compound * 1/payment)) - balance;
          result+= "<td> $" + parseFloat(interest.toFixed(2)).toLocaleString("en-US") + "</td>";

          result += "<td> $" + parseFloat(balance.toFixed(2)).toLocaleString("en-US") + "</td>";

          endingBalance = '0.00';
          result += "<td> $" + endingBalance + "</td>";
      }
      else{
          result+= "<tr align=left>" + "<td align='center'>" + (i+1) + "</td>" + "<td> $" + parseFloat(balance.toFixed(2)).toLocaleString("en-US") + "</td>";

          interest = (balance * Math.pow((1 + interest_rate/compound), compound * 1/payment)) - balance;
          result+= "<td> $" + parseFloat(interest.toFixed(2)).toLocaleString("en-US") + "</td>";

          periodPrincipal = payment_every_period - interest;
          result += "<td> $" + parseFloat(periodPrincipal.toFixed(2)).toLocaleString("en-US") + "</td>";

          endingBalance = balance - periodPrincipal;
          result += "<td> $" + parseFloat(endingBalance.toFixed(2)).toLocaleString("en-US") + "</td>";
      }
      result+= "</tr>";
      balance = endingBalance;
    }

    document.getElementById("result_text_1").innerHTML = `&nbsp;${payment_period}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(payment_every_period.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_2").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(total_amount.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_3").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat((total_amount - loan_amount).toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_4").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${parseFloat(total_no_payment.toFixed(2)).toLocaleString("en-US")}`;

    result+= "</table>";

    let result_table = document.getElementById("result_table");
    result_table.innerHTML = "";
    result_table.innerHTML += result;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }