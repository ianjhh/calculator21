function setResult(){
    let years = parseInt(document.getElementById("year").value);
    let months = parseInt(document.getElementById("month").value);
    const loan_amount = parseFloat(document.getElementById("loanamount").value);
    const interest_rate = parseFloat(document.getElementById("interest").value);
    const compound = parseInt(document.getElementById("compound").value);

    if (isNaN(years)){
      years = 0;
    }

    if (isNaN(months)){
      months = 0;
    }

    let result = loan_amount * Math.pow((1+(interest_rate/100/compound)), compound*(years + (months/12)));
    document.getElementById("result_text").innerHTML = `$${parseFloat(result.toFixed(2)).toLocaleString("en-US")}`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }