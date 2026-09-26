function setResult(){
    const time_spent = parseFloat(document.getElementById("distance1_val").value);
    const select_unit = document.getElementById("select_unit").value;
    let result_week_min, result_week_hour, result_month_min, result_month_hour, result_year_min, result_year_hour;
    if (select_unit == 'minute'){
        result_week_min = time_spent * 7;
        result_week_hour = result_week_min/60;
        result_month_min = time_spent * 30.4375;
        result_month_hour = result_month_min/60;
        result_year_min = time_spent * 365.25;
        result_year_hour = result_year_min/60;
    }
    else if (select_unit == 'hour'){
        result_week_hour = time_spent * 7;
        result_week_min = result_week_hour * 60;
        result_month_hour = time_spent * 30.4375;
        result_month_min = result_month_hour * 60;
        result_year_hour = time_spent * 365.25;
        result_year_min = result_year_hour * 60;
    }
    document.getElementById("span_week_min").innerHTML = `${parseFloat(result_week_min.toFixed(1)).toLocaleString("en-US")} minutes OR`;
    document.getElementById("span_week_hour").innerHTML = `${parseFloat(result_week_hour.toFixed(1)).toLocaleString("en-US")} hours`;
    document.getElementById("span_month_min").innerHTML = `${parseFloat(result_month_min.toFixed(1)).toLocaleString("en-US")} minutes OR`;
    document.getElementById("span_month_hour").innerHTML = `${parseFloat(result_month_hour.toFixed(1)).toLocaleString("en-US")} hours`;
    document.getElementById("span_year_min").innerHTML = `${parseFloat(result_year_min.toFixed(1)).toLocaleString("en-US")} minutes OR`;
    document.getElementById("span_year_hour").innerHTML = `${parseFloat(result_year_hour.toFixed(1)).toLocaleString("en-US")} hours`;
    document.getElementById("distance1_val").value = '';
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }