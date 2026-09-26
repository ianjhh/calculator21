function setResult(){
    const exercise = parseFloat(document.getElementById("exercise").value);
    const duration = parseInt(document.getElementById("duration").value);
    const weight = parseInt(document.getElementById("weight").value);
    const weight_unit = document.getElementById("weight_unit").value;
    let result = 3.5 * exercise * weight/200 * duration;

    if (weight_unit == 'lb'){
        weight = weight * 0,453592;
    }

    document.getElementById("reset_button").click();
    document.getElementById("result_calories").innerHTML = `${parseFloat(result.toFixed(2)).toLocaleString("en-US")}`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }