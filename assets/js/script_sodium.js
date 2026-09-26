function setResult(){
    const age = document.getElementById("age").value;
    document.getElementById("result_sodium").innerHTML = `${age}`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }