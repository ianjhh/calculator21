function setResult(){
    let is_metric = true, result;
    if(document.getElementById("height_metric").value){
        height = parseFloat(document.getElementById("height_metric").value);
    }
    else{
        height_feet = parseFloat(document.getElementById("height_feet").value);
        height_inch = parseFloat(document.getElementById("height_inch").value);
        height = (height_feet * 12) + height_inch;
        is_metric = false;
    }

    if(document.getElementById("weight_metric").value){
        weight = parseFloat(document.getElementById("weight_metric").value);
    }
    else{
        weight = (parseFloat(document.getElementById("weight_us").value));
    }

    if (is_metric){
        height = height/100;
        result = weight/(height * height);
    }
    else{
        result = 703 * (weight/(height * height));
    }

    document.getElementById("result").value = String(result.toFixed(2));
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("reset_button").click();
}

function metric_func(){
  document.getElementById("span_metric").classList.add("disabled");
  document.getElementById("span_us").classList.remove("disabled");
  document.getElementById("us_input1").classList.add("display_none");
  document.getElementById("us_input2").classList.add("display_none");
  document.getElementById("metric_input1").classList.remove("display_none");
  document.getElementById("metric_input2").classList.remove("display_none");
  return false;
}

function us_func(){
  document.getElementById("span_us").classList.add("disabled");
  document.getElementById("span_metric").classList.remove("disabled");
  document.getElementById("metric_input1").classList.add("display_none");
  document.getElementById("metric_input2").classList.add("display_none");
  document.getElementById("us_input1").classList.remove("display_none");
  document.getElementById("us_input2").classList.remove("display_none");
  return false;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }