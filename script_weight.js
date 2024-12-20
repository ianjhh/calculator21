function setResult(){
    const unit1_value = document.getElementById("weight1_val").value;
    const unit1_label = document.getElementById("weight1").value;
    const unit2_label = document.getElementById("weight2").value;
    let result;
    if (unit1_label == "g" && unit2_label == "kg"){
        result = unit1_value/1000;
    }

    else if (unit1_label == "kg" && unit2_label == "g"){
        result = unit1_value * 1000;
    }

    else if (unit1_label == "g" && unit2_label == "mg"){
        result = unit1_value * 1000;
    }

    else if (unit1_label == "mg" && unit2_label == "g"){
        result = unit1_value/1000;
    }

    else if (unit1_label == "kg" && unit2_label == "mg"){
        result = unit1_value * 1000000;
    }

    else if (unit1_label == "mg" && unit2_label == "kg"){
        result = unit1_value /1000000;
    }

    else if (unit1_label == "g" && unit2_label == "p"){
        result = unit1_value * 0.0022;
    }

    else if (unit1_label == "g" && unit2_label == "oz"){
        result = unit1_value * 0.035274;
    }

    else if (unit1_label == "g" && unit2_label == "ton"){
        result = unit1_value /1000000;
    }

    else if (unit1_label == "mg" && unit2_label == "lbs"){
        result = unit1_value * 0.0000022;
    }

    else if (unit1_label == "mg" && unit2_label == "oz"){
        result = unit1_value * 0.000035274;
    }

    else if (unit1_label == "mg" && unit2_label == "ton"){
        result = unit1_value /1000000000;
    }

    else if (unit1_label == "kg" && unit2_label == "lbs"){
        result = unit1_value * 2,20462;
    }

    else if (unit1_label == "kg" && unit2_label == "oz"){
        result = unit1_value * 35,274;
    }

    else if (unit1_label == "kg" && unit2_label == "ton"){
        result = unit1_value /1000;
    }

    else if (unit1_label == "lbs" && unit2_label == "oz"){
        result = unit1_value * 16;
    }

    else if (unit1_label == "lbs" && unit2_label == "ton"){
        result = unit1_value * 0.0005;
    }

    else if (unit1_label == "oz" && unit2_label == "lbs"){
        result = unit1_value * 0.0625;
    }

    else if (unit1_label == "oz" && unit2_label == "ton"){
        result = unit1_value /35274;
    }

    else if (unit1_label == "ton" && unit2_label == "oz"){
        result = unit1_value * 35274;
    }

    else if (unit1_label == "ton" && unit2_label == "lbs"){
        result = unit1_value * 2000;
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