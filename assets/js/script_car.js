function setResult(){
    let auto_price = parseFloat(document.getElementById("loan_amount").value);
    const loan_term = parseInt(document.getElementById("loan_term").value);
    const interest_rate = parseFloat(document.getElementById("interest_rate").value)/100;
    let down_payment = parseFloat(document.getElementById("down_payment").value);
    let cash_incentive = parseFloat(document.getElementById("cash_incentive").value);
    let tradein_value = parseFloat(document.getElementById("tradein_value").value);
    let tradein_owe = parseFloat(document.getElementById("tradein_owe").value);
    let sales_tax = parseFloat(document.getElementById("sales_tax").value)/100;

    if (isNaN(down_payment)){
        down_payment = 0;
    }
    if (isNaN(cash_incentive)){
        cash_incentive = 0;
    }
    if (isNaN(tradein_value)){
        tradein_value = 0;
    }
    if (isNaN(tradein_owe)){
        tradein_owe = 0;
    }
    if (isNaN(sales_tax)){
        sales_tax = 0;
    }

    auto_price = auto_price - down_payment - cash_incentive - tradein_value + tradein_owe;
    let balance = auto_price, balance2 = auto_price, principal;
    let monthlypay = auto_price * (interest_rate/12*Math.pow(1+(interest_rate/12), loan_term))/(Math.pow(1+(interest_rate/12), loan_term) - 1);

    /* build amortization schedule */
    let result = "<table border='1'><tr><th>Month</th><th>Interest</th>" + "<th>Principal</th><th>Ending Balance</th></tr>";
    let result2 = "<table border='1'><tr><th>Year</th><th>Interest</th>" + "<th>Principal</th><th>Ending Balance</th></tr>";
    let interest, endingBalance, endingBalance2, total_interest=0, partial_total_interest, partial_total_principal, diff;

    /* yearly schedule */
    for (let i=0; i<loan_term/12; ++i){
      partial_total_interest=0;
      partial_total_principal=0;

      if (loan_term/12 - i < 1){
          diff = loan_term - (i*12);

          result2+= "<tr align=left>" + "<td align='center'>" + (i+1) + "(Partial)" + "</td>";
          for (let k=0; k<diff; k++){
            interest = balance2 * (interest_rate/12);
            partial_total_interest+= interest;
            partial_total_principal = partial_total_principal + (monthlypay - interest);
            endingBalance2 = balance2 - monthlypay+interest;
            balance2 = endingBalance2;
          }
          total_interest += partial_total_interest;
          result2+= "<td> $" + parseFloat(partial_total_interest.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2+= "<td> $" + parseFloat(partial_total_principal.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2 += "<td> $" + parseFloat(endingBalance2.toFixed(2)).toLocaleString("en-US") + "</td>";
      }
      else{
          result2+= "<tr align=left>" + "<td align='center'>" + (i+1) + "</td>";
          for (let k=0; k<12; k++){
            interest = balance2 * (interest_rate/12);
            partial_total_interest+= interest;
            partial_total_principal = partial_total_principal + (monthlypay - interest);
            endingBalance2 = balance2 - monthlypay +interest;
            balance2 = endingBalance2;
          }
          total_interest += partial_total_interest;
          result2+= "<td> $" + parseFloat(partial_total_interest.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2+= "<td> $" + parseFloat(partial_total_principal.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2 += "<td> $" + parseFloat(endingBalance2.toFixed(2)).toLocaleString("en-US") + "</td>";
      }

      result2+= "</tr>";
      balance2 = endingBalance2;
    }

    /* monthly schedule */
    for (let i=0; i<loan_term; ++i){
      result+= "<tr align=left>" + "<td align='center'>" + (i+1) + "</td>";

      interest = balance * (interest_rate/12);
      result+= "<td> $" + parseFloat(interest.toFixed(2)).toLocaleString("en-US") + "</td>";

      principal = monthlypay - interest;
      result+= "<td> $" + parseFloat(principal.toFixed(2)).toLocaleString("en-US") + "</td>";

      endingBalance = balance - principal;
      result+= "<td> $" + parseFloat(endingBalance.toFixed(2)).toLocaleString("en-US") + "</td>";
      result+= "</tr>";
      balance = endingBalance;
    }

    let sales_tax_cost = sales_tax * (auto_price - tradein_value);
    let upfront_payment = 0;
    let total_loan_payment = monthlypay * loan_term;
    let total_cost = total_loan_payment + sales_tax_cost;
    
    document.getElementById("span_year").innerHTML = 'Yearly Schedule';
    document.getElementById("span_month").innerHTML = 'Monthly Schedule';
    document.getElementById("result_text_1").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(monthlypay.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_2").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(auto_price.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_3").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(sales_tax_cost.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_4").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(upfront_payment.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_5").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(total_loan_payment.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_6").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(total_interest.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_7").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(total_cost.toFixed(2)).toLocaleString("en-US")}`;

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