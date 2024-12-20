function setResult(){
    const unit1_value = parseFloat(document.getElementById("temperature1_val").value);
    const unit1_label = document.getElementById("temperature1").value;
    const unit2_label = document.getElementById("temperature2").value;
    let result;
    if (unit1_label == "c" && unit2_label == "f"){
        result = unit1_value * (9/5) + 32;
    }
    else if (unit1_label == "c" && unit2_label == "k"){
        result = unit1_value + 273.15;
    }
    else if (unit1_label == "c" && unit2_label == "r"){
        result = (unit1_value * (9/5) + 32) + 459.67;
    }
    else if (unit1_label == "f" && unit2_label == "c"){
        result = (unit1_value - 32)/1.8;
    }
    else if (unit1_label == "f" && unit2_label == "k"){
        result = ((unit1_value - 32)/1.8) + 273.15;
    }
    else if (unit1_label == "f" && unit2_label == "r"){
        result = unit1_value + 459.67;
    }
    else if (unit1_label == "k" && unit2_label == "c"){
        result = unit1_value - 273.15;
    }
    else if (unit1_label == "k" && unit2_label == "f"){
        result = 1.8 * (unit1_value - 273.15) + 32;
    }
    else if (unit1_label == "k" && unit2_label == "r"){
        result = (1.8 * (unit1_value - 273.15) + 32) + 459.67;
    }
    else if (unit1_label == "r" && unit2_label == "c"){
        result = ((unit1_value - 459.67) - 32)/1.8;
    }
    else if (unit1_label == "r" && unit2_label == "f"){
        result = unit1_value - 459.67;
    }
    else if (unit1_label == "r" && unit2_label == "k"){
        result = (((unit1_value - 459.67) - 32)/1.8) + 273.15;
    }

    document.getElementById("result").value = String(result);
    document.getElementById("result").style.textAlign = "center";
    document.getElementsByClassName("reset_button").click();
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }