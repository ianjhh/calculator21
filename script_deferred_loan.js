function setResult(){
    const loan_amount = parseFloat(document.getElementById("loan_amount").value);
    let loan_term_year = parseInt(document.getElementById("loan_term_year").value);
    let loan_term_month = parseInt(document.getElementById("loan_term_month").value);
    const compound = parseInt(document.getElementById("compound").value);
    const interest_rate = parseFloat(document.getElementById("interest_rate").value)/100;
    let total_no_payment, monthlyPayment, payment = 12;

    if (isNaN(loan_term_year)){
      loan_term_year = 0;
    }

    if (isNaN(loan_term_month)){
      loan_term_month = 0;
    }

    const loan_term = (loan_term_year * 12) + loan_term_month;
    total_no_payment = loan_term;

    let rate_per_period = Math.pow(1+(interest_rate/compound), compound/payment) - 1;
    let payment_every_period = loan_amount * ((rate_per_period * Math.pow(1+rate_per_period, total_no_payment))/(Math.pow(1+rate_per_period, total_no_payment) - 1));
    monthlyPayment = payment_every_period;

    let total_amount = total_no_payment * payment_every_period;
    let balance = loan_amount, balance2 = loan_amount;

    /* build amortization schedule */
    let result = "<table border='1'><tr><th>Month #</th><th>Starting Balance</th>" + "<th>Interest</th><th>Ending Balance</th></tr>";
    let result2 = "<table border='1'><tr><th>Year #</th><th>Starting Balance</th>" + "<th>Interest</th><th>Ending Balance</th></tr>";
    let interest, endingBalance, endingBalance2, total_interest = 0, partial_total_interest= 0, diff;

    /* yearly schedule */
    for (let i=0; i<loan_term/12; ++i){
      if (loan_term/12 - i < 1){
          diff = loan_term - (i*12);

          result2+= "<tr align=left>" + "<td align='center'>" + (i+1) + "(Partial)" + "</td>" + "<td> $" + parseFloat(balance2.toFixed(2)).toLocaleString("en-US") + "</td>";

          for (let j=0; j<diff; j++){
            interest = (balance2 * Math.pow((1 + interest_rate/compound), compound * 1/12)) - balance2;
            partial_total_interest += interest;

            endingBalance2 = balance2 + interest;
            balance2 = endingBalance2;
          }
          result2+= "<td> $" + parseFloat(partial_total_interest.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2 += "<td> $" + parseFloat(endingBalance2.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2+= "</tr>";
      }
      else{
          result2+= "<tr align=left>" + "<td align='center'>" + (i+1) + "</td>" + "<td> $" + parseFloat(balance2.toFixed(2)).toLocaleString("en-US") + "</td>";

          interest = (balance2 * Math.pow((1 + interest_rate/compound), compound)) - balance2;
          result2+= "<td> $" + parseFloat(interest.toFixed(2)).toLocaleString("en-US") + "</td>";
          total_interest += interest;

          endingBalance2 = balance2 + interest;
          result2 += "<td> $" + parseFloat(endingBalance2.toFixed(2)).toLocaleString("en-US") + "</td>";
      }

      result2+= "</tr>";
      balance2 = endingBalance2;
    }

    total_interest = 0;

    /* monthly schedule */
    for (let i=0; i<loan_term; ++i){
      if (i % 12 == 0){
        result+= "<tr align=center>";
        result+= "<td colspan='4'>" + `Year ${(i/12) + 1}` + "</td></tr>";
      }

      result+= "<tr align=left>" + "<td align='center'>" + (i+1) + "</td>" + "<td> $" + parseFloat(balance.toFixed(2)).toLocaleString("en-US") + "</td>";

      interest = (balance * Math.pow((1 + interest_rate/compound), compound * 1/12)) - balance;
      result+= "<td> $" + parseFloat(interest.toFixed(2)).toLocaleString("en-US") + "</td>";
      total_interest += interest;

      endingBalance = balance + interest;
      result += "<td> $" + parseFloat(endingBalance.toFixed(2)).toLocaleString("en-US") + "</td>";

      result+= "</tr>";
      balance = balance = endingBalance;
    }

    document.getElementById("span_year").innerHTML = 'Yearly Schedule';
    document.getElementById("span_month").innerHTML = 'Monthly Schedule';
    document.getElementById("result_text_1").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(total_interest.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_2").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(total_amount.toFixed(2)).toLocaleString("en-US")}`;

    result+= "</table>";
    result2+= "</table>";

    let result_table_year = document.getElementById("result_table_year");
    result_table_year.innerHTML = result2;

    let result_table = document.getElementById("result_table");
    result_table.innerHTML = result;
    result_table.style.display="none";

    document.getElementById("span_year").classList.add("disabled");
}

function year_func(){
    document.getElementById("span_year").classList.add("disabled");
    document.getElementById("span_month").classList.remove("disabled");
    document.getElementById("result_table").style.display="none";
    document.getElementById("result_table_year").style.display="block";
    return false;
}

function month_func(){
    document.getElementById("span_month").classList.add("disabled");
    document.getElementById("span_year").classList.remove("disabled");
    document.getElementById("result_table_year").style.display="none";
    document.getElementById("result_table").style.display="block";
    return false;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }