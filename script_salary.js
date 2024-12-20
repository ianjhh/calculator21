function setResult(){
    const payment = parseFloat(document.getElementById("payment").value);
    const period = document.getElementById("period").value;
    const hours_per_week = parseFloat(document.getElementById("hours_per_week").value);
    const days_per_week = parseInt(document.getElementById("days_per_week").value);

    let select = document.getElementById("period"), hourly, daily, weekly, biweekly, semimonthly, monthly, quarterly, annual;

    if (period == 'Hourly'){
        hourly = payment;
        daily = payment * (hours_per_week/7);
        weekly = payment * hours_per_week;
        biweekly = payment * 2 * hours_per_week;
        semimonthly = payment * (hours_per_week/7) * 15.21875;
        monthly = semimonthly * 2;
        quarterly = monthly * 3;
        annual = monthly * 12;
    }
    else if (period == 'Daily'){
      hourly = payment/(hours_per_week/7);
      daily = payment;
      weekly = payment * 7;
      biweekly = payment * 14;
      semimonthly = payment * 15.2083;
      monthly = payment * 30.4167
      quarterly = payment * 91.25;
      annual = payment * 365.25;
    }
    else if (period == 'Weekly'){
      hourly = payment/hours_per_week;
      daily = payment/days_per_week;
      weekly = payment;
      biweekly = payment * 2;
      semimonthly = payment * 2.1726;
      monthly = daily * 30.4167;
      quarterly = monthly * 3;
      annual = monthly * 12;
    }
    else if (period == 'Biweekly'){
      hourly = payment/2/hours_per_week;
      daily = hourly * hours_per_week/days_per_week;
      weekly = daily * 7;
      biweekly = weekly * 2;
      semimonthly = weekly * 2.1726;
      monthly = daily * 30.4167;
      quarterly = monthly * 3;
      annual = monthly * 12;
    }
    else if (period == 'Semi-monthly'){
      hourly = (payment/15.2083) * 7/hours_per_week;
      daily = hourly * hours_per_week/days_per_week;
      weekly = daily * 7;
      biweekly = weekly * 2;
      semimonthly = weekly * 2.1726;
      monthly = daily * 30.4167;
      quarterly = monthly * 3;
      annual = monthly * 12;
    }
    else if (period == 'Monthly'){
      hourly = (payment/30.4167) * 7/hours_per_week;
      daily = hourly * hours_per_week/days_per_week;
      weekly = daily * 7;
      biweekly = weekly * 2;
      semimonthly = weekly * 2.1726;
      monthly = daily * 30.4167;
      quarterly = monthly * 3;
      annual = monthly * 12;
    }
    else if (period == 'Quarterly'){
      hourly = (payment/91.25) * 7/hours_per_week;
      daily = hourly * hours_per_week/days_per_week;
      weekly = daily * 7;
      biweekly = weekly * 2;
      semimonthly = weekly * 2.1726;
      monthly = daily * 30.4167;
      quarterly = monthly * 3;
      annual = monthly * 12;
    }
    else if (period == 'Annually'){
      hourly = (payment/365.25) * 7/hours_per_week;
      daily = hourly * hours_per_week/days_per_week;
      weekly = daily * 7;
      biweekly = weekly * 2;
      semimonthly = weekly * 2.1726;
      monthly = daily * 30.4167;
      quarterly = monthly * 3;
      annual = monthly * 12;
    }

    const result_list = [hourly, daily, weekly, biweekly, semimonthly, monthly, quarterly, annual];
    let result = "<table border='1'><tr><th>Period</th><th>Amount</th></tr>";

    for (let i=0; i<8; i++){
      result+= "<tr align=left>" + "<td align='center'>" + select.options[i].value + "</td>";
      result+= "<td>" + `$${parseFloat((result_list[i]).toFixed(2)).toLocaleString("en-US")}` + "</td>";
      result+= "</tr>";
    }
    document.getElementById("result_table").innerHTML = `${result}`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }