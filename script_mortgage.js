function setResult(){
    const house_price = parseFloat(document.getElementById("house_price").value);
    let down_payment = parseFloat(document.getElementById("down_payment").value);
    let down_payment_option = document.getElementById("down_payment_option").value;
    let loan_term = parseInt(document.getElementById("loan_term").value);
    const interest_rate = parseFloat(document.getElementById("interest_rate").value)/100;
    let property_tax = parseFloat(document.getElementById("property_tax").value);
    let property_tax_option = document.getElementById("property_tax_option").value;
    let home_insurance = parseFloat(document.getElementById("home_insurance").value);
    let home_insurance_option = document.getElementById("home_insurance_option").value;
    let pmi_insurance = parseFloat(document.getElementById("pmi_insurance").value);
    let pmi_insurance_option = document.getElementById("pmi_insurance_option").value;
    let hoa_fee = parseFloat(document.getElementById("hoa_fee").value);
    let hoa_fee_option = document.getElementById("hoa_fee_option").value;
    let other_cost = parseFloat(document.getElementById("other_cost").value);
    let other_cost_option = document.getElementById("other_cost_option").value;
    let is_pmi_insurance = false;
    
    if (down_payment_option == 'percent'){
        if (down_payment <20){
          is_pmi_insurance = true;
        }
        down_payment = house_price * (down_payment/100);
    }
    else{
        if (down_payment/house_price < 0.2){
            is_pmi_insurance = true;
        }
    }
    if (property_tax_option == 'percent'){
        property_tax = house_price * (property_tax/100);
    }
    if (home_insurance_option == 'percent'){
        home_insurance = house_price * (home_insurance/100);
    }
    if (pmi_insurance_option == 'percent'){
        pmi_insurance = house_price * (pmi_insurance/100);
    }
    if (hoa_fee_option == 'percent'){
        hoa_fee = house_price * (hoa_fee/100);
    }
    if (other_cost_option == 'percent'){
        other_cost = house_price * (other_cost/100);
    }

    let loan_amount = house_price - down_payment;
    let monthly_payment = loan_amount * ((interest_rate/12 * Math.pow(1+(interest_rate/12), loan_term * 12))/(Math.pow(1+(interest_rate/12), loan_term * 12) - 1));
    let balance = loan_amount, balance2 = loan_amount;

    /* build amortization schedule */
    let result = "<table border='1'><tr><th>Month #</th><th>Starting Balance</th>" + "<th>Interest</th><th>Principal</th><th>Ending Balance</th></tr>";
    let result2 = "<table border='1'><tr><th>Year #</th><th>Starting Balance</th>" + "<th>Interest</th><th>Principal</th><th>Ending Balance</th></tr>";
    let interest, endingBalance, endingBalance2, total_interest = 0, partial_total_interest= 0, partial_total_principal= 0, principal, is_end_of_year = false, is_start_of_year = true, year_no = 1;

    /* yearly schedule */
    for (let i=0; i<loan_term*12; ++i){
      if (is_start_of_year == true){
          result2+= "<tr align=left>" + "<td align='center'>" + year_no + "</td>" + "<td> $" + parseFloat(balance2.toFixed(2)).toLocaleString("en-US") + "</td>";
          year_no+=1;
          is_start_of_year = false;
      }

      if (((i+1) % 12 == 0) && i>0){
          is_end_of_year = true;
      }

      interest = interest_rate/12 * balance2;
      partial_total_interest+= interest;

      principal = monthly_payment - interest;
      partial_total_principal+= principal;

      endingBalance2 = balance2 - interest;
      balance2 = endingBalance2;

      if (is_end_of_year){
        is_end_of_year = false;
        is_start_of_year = true;
        result2+= "<td> $" + parseFloat(partial_total_interest.toFixed(2)).toLocaleString("en-US") + "</td>";
        result2 += "<td> $" + parseFloat(partial_total_principal.toFixed(2)).toLocaleString("en-US") + "</td>";
        result2 += "<td> $" + parseFloat(endingBalance2.toFixed(2)).toLocaleString("en-US") + "</td>";
        result2+= "</tr>";
        partial_total_interest = 0;
        partial_total_principal = 0;
      }
    }

    /* monthly schedule */
    for (let i=0; i<loan_term*12; ++i){
      if (i % 12 == 0){
        result+= "<tr align=center>";
        result+= "<td colspan='5'>" + `Year ${(i/12) + 1}` + "</td></tr>";
      }

      result+= "<tr align=left>" + "<td align='center'>" + (i+1) + "</td>" + "<td> $" + parseFloat(balance.toFixed(2)).toLocaleString("en-US") + "</td>";

      interest = interest_rate/12 * balance;
      result+= "<td> $" + parseFloat(interest.toFixed(2)).toLocaleString("en-US") + "</td>";
      total_interest += interest;

      principal = monthly_payment - interest;
      result += "<td> $" + parseFloat(principal.toFixed(2)).toLocaleString("en-US") + "</td>";

      endingBalance = balance - interest;
      result += "<td> $" + parseFloat(endingBalance.toFixed(2)).toLocaleString("en-US") + "</td>";

      result+= "</tr>";
      balance = endingBalance;
    }

    if (isNaN(property_tax)){
      document.getElementById("property_tax_label").innerHTML = '';
      document.getElementById("monthly_property_tax").innerHTML = '';
      document.getElementById("total_property_tax").innerHTML = '';
      property_tax = 0;
    }
    else{
      document.getElementById("property_tax_label").innerHTML = 'Property Tax';
      document.getElementById("monthly_property_tax").innerHTML = `$${parseFloat((property_tax/12).toFixed(2)).toLocaleString("en-US")}`;
      document.getElementById("total_property_tax").innerHTML = `$${parseFloat((property_tax * loan_term).toFixed(2)).toLocaleString("en-US")}`;
    }

    if (isNaN(home_insurance)){
      document.getElementById("home_insurance_label").innerHTML = '';
      document.getElementById("monthly_home_insurance").innerHTML = '';
      document.getElementById("total_home_insurance").innerHTML = '';
      home_insurance = 0;
    }
    else{
      document.getElementById("home_insurance_label").innerHTML = 'Home Insurance';
      document.getElementById("monthly_home_insurance").innerHTML = `$${parseFloat((home_insurance/12).toFixed(2)).toLocaleString("en-US")}`;
      document.getElementById("total_home_insurance").innerHTML = `$${parseFloat((home_insurance * loan_term).toFixed(2)).toLocaleString("en-US")}`;
    }

    if (isNaN(other_cost)){
      document.getElementById("other_cost_label").innerHTML = '';
      document.getElementById("monthly_other_costs").innerHTML = '';
      document.getElementById("total_other_costs").innerHTML = '';
      other_cost = 0;
    }
    else{
      document.getElementById("other_cost_label").innerHTML = 'Other Costs';
      document.getElementById("monthly_other_costs").innerHTML = `$${parseFloat((other_cost/12).toFixed(2)).toLocaleString("en-US")}`;
      document.getElementById("total_other_costs").innerHTML = `$${parseFloat((other_cost * loan_term).toFixed(2)).toLocaleString("en-US")}`;
    }

    if (isNaN(hoa_fee)){
      document.getElementById("hoa_fee_label").innerHTML = '';
      document.getElementById("monthly_hoa_fee").innerHTML = '';
      document.getElementById("total_hoa_fee").innerHTML = '';
      hoa_fee = 0;
    }
    else{
      document.getElementById("hoa_fee_label").innerHTML = 'HOA Fee';
      document.getElementById("monthly_hoa_fee").innerHTML = `$${parseFloat((hoa_fee/12).toFixed(2)).toLocaleString("en-US")}`;
      document.getElementById("total_hoa_fee").innerHTML = `$${parseFloat((hoa_fee * loan_term).toFixed(2)).toLocaleString("en-US")}`;
    }

    if (isNaN(pmi_insurance)){
      document.getElementById("pmi_insurance_label").innerHTML = '';
      document.getElementById("monthly_pmi_insurance").innerHTML = '';
      document.getElementById("total_pmi_insurance").innerHTML = '';
      pmi_insurance = 0;
    }
    else if (is_pmi_insurance){
      document.getElementById("pmi_insurance_label").innerHTML = 'PMI Insurance';
      document.getElementById("monthly_pmi_insurance").innerHTML = `$${parseFloat((pmi_insurance/12).toFixed(2)).toLocaleString("en-US")}`;
      document.getElementById("total_pmi_insurance").innerHTML = `$${parseFloat((pmi_insurance * loan_term).toFixed(2)).toLocaleString("en-US")}`;
    }

    document.getElementById("span_year").innerHTML = 'Yearly Schedule';
    document.getElementById("span_month").innerHTML = 'Monthly Schedule';
    document.getElementById("monthly_mortgage").innerHTML = `$${parseFloat(monthly_payment.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("total_mortgage").innerHTML = `$${parseFloat((monthly_payment * loan_term * 12).toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("monthly_oop").innerHTML = `$${parseFloat((monthly_payment+ (property_tax/12) + (home_insurance/12) + (other_cost/12)).toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("total_oop").innerHTML = `$${parseFloat(((monthly_payment * loan_term * 12) + (property_tax * loan_term) + (home_insurance * loan_term) + (other_cost * loan_term)).toFixed(2)).toLocaleString("en-US")}`;

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