function setResult(){
    const loan_amount = parseFloat(document.getElementById("loan_amount").value);
    let annual_contrib = parseFloat(document.getElementById("annual_contrib").value);
    let monthly_contrib = parseFloat(document.getElementById("monthly_contrib").value);
    const contrib_when = document.querySelector('input[name="contrib_when"]:checked').value;
    let loan_term_year = parseInt(document.getElementById("loan_term_year").value);
    let loan_term_month = parseInt(document.getElementById("loan_term_month").value);
    const compound = parseInt(document.getElementById("compound").value);
    let interest_rate = parseFloat(document.getElementById("interest_rate").value)/100;
    let tax_rate = parseFloat(document.getElementById("tax_rate").value)/100;
    let inflation_rate = parseFloat(document.getElementById("inflation_rate").value)/100;
    let total_no_payment, payment = 12;

    if (isNaN(loan_term_year)){
      loan_term_year = 0;
    }

    if (isNaN(loan_term_month)){
      loan_term_month = 0;
    }

    if (isNaN(annual_contrib)){
      annual_contrib = 0;
    }

    if (isNaN(monthly_contrib)){
      monthly_contrib = 0;
    }

    const loan_term = (loan_term_year * 12) + loan_term_month;
    let initial_invest_interest = (loan_amount * Math.pow((1+(interest_rate/compound)), loan_term/12 * compound)) - loan_amount;
    total_no_payment = loan_term;

    let balance, balance2;

    /* build amortization schedule */
    let result = "<table border='1'><tr><th>Month</th><th>Deposit</th>" + "<th>Interest</th><th>Ending Balance</th></tr>";
    let result2 = "<table border='1'><tr><th>Year</th><th>Deposit</th>" + "<th>Interest</th><th>Ending Balance</th></tr>";
    let interest, endingBalance, endingBalance2, total_interest = 0, partial_total_interest, diff, effectiveBalance=0, effectiveBalance2=0, balance2_printed, result_balance = 0, total_contrib = 0;

    /* yearly schedule */
    for (let i=0; i<loan_term/12; ++i){
      balance2=0;
      partial_total_interest=0;
      if (i == 0){
        balance2+= loan_amount;
      }

      if (loan_term/12 - i < 1){
          diff = loan_term - (i*12);

          /* annual contrib */
          balance2_printed = balance2 + (diff * monthly_contrib);
          if (contrib_when == 'beginning'){
            balance2_printed+= annual_contrib;
          }
          result_balance+= balance2_printed;
          result2+= "<tr align=left>" + "<td align='center'>" + (i+1) + "(Partial)" + "</td>" + "<td> $" + parseFloat(balance2_printed.toFixed(2)).toLocaleString("en-US") + "</td>";

          for (let k=0; k<diff; k++){
            /* annual contrib */
            if (k==0 && contrib_when =='beginning'){
                balance2+= annual_contrib;
                total_contrib+= annual_contrib;
            }
              /* monthly contrib */
              balance2+= monthly_contrib;
              total_contrib+= monthly_contrib;
              effectiveBalance2+= balance2;
              interest = (effectiveBalance2 * Math.pow((1 + interest_rate/compound), compound * 1/12)) - effectiveBalance2;
              partial_total_interest += interest;

              endingBalance2 = effectiveBalance2 + interest;
              effectiveBalance2 = endingBalance2;
              balance2=0;
          }
          result2+= "<td> $" + parseFloat(partial_total_interest.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2 += "<td> $" + parseFloat(endingBalance2.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2+= "</tr>";
      }
      else{
          balance2_printed = balance2 + annual_contrib + (monthly_contrib*12);
          result_balance+= balance2_printed;
          result2+= "<tr align=left>" + "<td align='center'>" + (i+1) + "</td>" + "<td> $" + parseFloat(balance2_printed.toFixed(2)).toLocaleString("en-US") + "</td>";
          for (let k=0; k<12; k++){
            /* annual contrib */
            if (k==0 && contrib_when =='beginning'){
                balance2+= annual_contrib;
                total_contrib+= annual_contrib;
            }
            else if (k==11 && contrib_when =='end'){
                balance2+= annual_contrib;
                total_contrib+= annual_contrib;
            }
              /* monthly contrib */
              balance2+= monthly_contrib;
              total_contrib+= monthly_contrib;
              effectiveBalance2+= balance2;
              interest = (effectiveBalance2 * Math.pow((1 + interest_rate/compound), compound * 1/12)) - effectiveBalance2;
              partial_total_interest += interest;

              endingBalance2 = effectiveBalance2 + interest;
              effectiveBalance2 = endingBalance2;
              balance2=0;
          }
          result2+= "<td> $" + parseFloat(partial_total_interest.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2 += "<td> $" + parseFloat(endingBalance2.toFixed(2)).toLocaleString("en-US") + "</td>";
          result2+= "</tr>";
      }

      result2+= "</tr>";
      balance2 = endingBalance2;
    }

    total_interest = 0;

    /* monthly schedule */
    for (let i=0; i<loan_term; ++i){
      balance = 0;
      /* if start of year */
      if (i % 12 == 0){
        result+= "<tr align=center>";
        result+= "<td colspan='4'>" + `Year ${(i/12) + 1}` + "</td></tr>";
        if (i == 0){
          balance+= loan_amount;
        }
        if (contrib_when == 'beginning'){
          balance+= annual_contrib;
        }
      }
      /* if end of year */
      if (i%11 == 0 && i!=0){
        if (contrib_when == 'end'){
          balance+= annual_contrib;
        }
      }
      balance+= monthly_contrib;
      result+= "<tr align=left>" + "<td align='center'>" + (i+1) + "</td>" + "<td> $" + parseFloat(balance.toFixed(2)).toLocaleString("en-US") + "</td>";

      effectiveBalance+= balance;
      interest = (effectiveBalance * Math.pow((1 + interest_rate/compound), compound * 1/12)) - effectiveBalance;
      result+= "<td> $" + parseFloat(interest.toFixed(2)).toLocaleString("en-US") + "</td>";
      total_interest += interest;

      endingBalance = effectiveBalance + interest;
      effectiveBalance = endingBalance;
      result += "<td> $" + parseFloat(endingBalance.toFixed(2)).toLocaleString("en-US") + "</td>";
      result+= "</tr>";
    }
    
    let total_interest_text = endingBalance2 -result_balance;
    let interest_contribution = total_interest_text - initial_invest_interest;
    let total_tax = total_interest_text * tax_rate;
    let buying_power = (1/Math.pow(1+inflation_rate, loan_term/12)) * endingBalance2;
    
    if (isNaN(tax_rate)){
      document.getElementById("result_text_7").innerHTML = '';
      document.getElementById("result_label_7").innerHTML = '';
      document.getElementById("result_text_8").innerHTML = '';
      document.getElementById("result_label_8").innerHTML = '';
      tax_rate = 0;
    }
    else{
        document.getElementById("result_label_7").innerHTML = 'Total tax';
        document.getElementById("result_text_7").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(total_tax.toFixed(2)).toLocaleString("en-US")}`;
        document.getElementById("result_label_8").innerHTML = 'Total interest after tax';
        document.getElementById("result_text_8").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat((total_interest_text - total_tax).toFixed(2)).toLocaleString("en-US")}`;
    }

    if (isNaN(inflation_rate)){
      document.getElementById("result_text_9").innerHTML = '';
      document.getElementById("result_label_9").innerHTML = '';
      inflation_rate = 0;
    }
    else{
        document.getElementById("result_label_9").innerHTML = 'Ending Balance after inflation';
        document.getElementById("result_text_9").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(buying_power.toFixed(2)).toLocaleString("en-US")}`;
    }

    document.getElementById("span_year").innerHTML = 'Yearly Schedule';
    document.getElementById("span_month").innerHTML = 'Monthly Schedule';
    document.getElementById("result_text_1").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(endingBalance2.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_2").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(result_balance.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_3").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(total_contrib.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_4").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(total_interest_text.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_5").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(initial_invest_interest.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_6").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(interest_contribution.toFixed(2)).toLocaleString("en-US")}`;

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