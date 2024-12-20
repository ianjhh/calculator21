function setResult(){
    const calories = parseFloat(document.getElementById("calories").value);
    let result = 0.06 * calories;

    document.getElementById("calories").value = '';
    document.getElementById("result_fat").innerHTML = `${parseFloat(result.toFixed(2)).toLocaleString("en-US")} grams`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }