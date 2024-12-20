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
    const set_value = document.getElementById("set").value;
    const subset_value = document.getElementById("subset").value;
    const result = factorialize(set_value)/factorialize(set_value-subset_value);

    document.getElementById("result").value = String(result);
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("reset_button").click();
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
}


