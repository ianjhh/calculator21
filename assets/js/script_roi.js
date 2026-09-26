function factorialize(num) {
    if (num < 0)
          return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

function setResult(){
    const invest_value = parseFloat(document.getElementById("invest_amount").value);
    const return_value = parseFloat(document.getElementById("return_amount").value);
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);

    if (isNaN(year)){
        year = 0;
    }

    if (isNaN(month)){
        month = 0;
    }

    const duration_year = year + (month/12);
    const invest_gain = return_value - invest_value;
    const roi = (invest_gain/invest_value) * 100;
    const annual_roi = roi/duration_year;

    document.getElementById("invest_amount").value = '';
    document.getElementById("return_amount").value = '';

    document.getElementById("result_text_1").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(invest_gain.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_2").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${parseFloat(roi.toFixed(2)).toLocaleString("en-US")}%`;
    document.getElementById("result_text_3").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${parseFloat(annual_roi.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_4").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${parseFloat(duration_year.toFixed(2)).toLocaleString("en-US")}&nbsp;years`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
}