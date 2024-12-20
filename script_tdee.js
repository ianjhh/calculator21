function setResult(){
    const age = parseInt(document.getElementById("age").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const activity = parseFloat(document.getElementById("activity").value);;
    let height, height_feet, height_inch, weight, bmr, result_unit, result_unit_label;

    if(document.getElementById("height_metric").value){
        height = parseFloat(document.getElementById("height_metric").value);
        result_unit = 0.453592;
        result_unit_label = 'kg';
    }
    else{
        height_feet = parseFloat(document.getElementById("height_feet").value);
        height_inch = parseFloat(document.getElementById("height_inch").value);
        height = (height_feet * 0.3048) + (height_inch * 0.0254);
        result_unit = 1;
        result_unit_label = 'lb';
    }

    if(document.getElementById("weight_metric").value){
        weight = parseFloat(document.getElementById("weight_metric").value);
    }
    else{
        weight = (parseFloat(document.getElementById("weight_us").value)) * 0.453592;
    }

    if (gender == 'male'){
        bmr = ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity;
    }
    else{
        bmr = ((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity;
    }

    document.getElementById("reset_button").click();
    document.getElementById("result_calories").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${parseFloat(bmr.toFixed(2)).toLocaleString("en-US")} Calories/day`;
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