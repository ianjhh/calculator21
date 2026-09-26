function setResult(){
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const isage14 = document.querySelector('input[name="age14"]:checked').value;
    let height, height_feet, height_inch, weight, boer_lbm, james_lbm, hume_lbm, peters_lbm, ecv, lbm_unit;

    if(document.getElementById("height_metric").value){
        height = parseFloat(document.getElementById("height_metric").value);
    }
    else{
        height_feet = parseFloat(document.getElementById("height_feet").value);
        height_inch = parseFloat(document.getElementById("height_inch").value);
        height = (height_feet * 30.48) + (height_inch * 2.54);
    }

    if(document.getElementById("weight_metric").value){
        weight = parseFloat(document.getElementById("weight_metric").value);
        lbm_unit = 'kg';
    }
    else{
        weight = parseFloat(document.getElementById("weight_us").value) * 0.453592;
        lbm_unit = 'lbs';
    }

    if (gender == 'male' && isage14 == 'above14'){
        boer_lbm = (0.407 * weight) + (0.267 * height) - 19.2;
        james_lbm = (1.1 * weight) - (128 * Math.pow(weight/height, 2))
        hume_lbm = (0.32810 * weight) + (0.33929 * height) - 29.5336;
    }
    else if (gender == 'female' && isage14 == 'above14'){
        boer_lbm = (0.252 * weight) + (0.473 * height) - 48.3;
        james_lbm = (1.07 * weight) - (148 * Math.pow(weight/height, 2))
        hume_lbm = (0.29569 * weight) + (0.41813 * height) - 43.2933;
    }
    else if (isage14 == '14oryounger'){
        ecv = 0.0215 * Math.pow(weight, 0.6469) * Math.pow(height, 0.7236);
        peters_lbm = 3.8 * ecv;
    }

    if (lbm_unit == 'lbs'){
        weight = weight * 2.20462;
        if (isage14 == 'above14'){
            boer_lbm = boer_lbm * 2.20462;
            james_lbm = james_lbm * 2.20462;
            hume_lbm = hume_lbm * 2.20462;
        }
        else{
            peters_lbm = peters_lbm * 2.20462;
        }
    }

    let result = "<table border='1'><tr><th>Formula</th><th>Lean Body Mass</th>" + "<th>Body Fat</th></tr>";
    if (isage14 == 'above14'){
        result+= `<tr><td>Boer</td><td>${parseFloat(boer_lbm.toFixed(1)).toLocaleString("en-US")} ${lbm_unit} (${parseFloat((boer_lbm/weight*100).toFixed(1)).toLocaleString("en-US")}%)</td><td>${parseFloat(((weight - boer_lbm)/weight*100).toFixed(1)).toLocaleString("en-US")}%</td></tr>`;
        result+= `<tr><td>James</td><td>${parseFloat(james_lbm.toFixed(1)).toLocaleString("en-US")} ${lbm_unit} (${parseFloat((james_lbm/weight*100).toFixed(1)).toLocaleString("en-US")}%)</td><td>${parseFloat(((weight - james_lbm)/weight*100).toFixed(1)).toLocaleString("en-US")}%</td></tr>`;
        result+= `<tr><td>Hume</td><td>${parseFloat(hume_lbm.toFixed(1)).toLocaleString("en-US")} ${lbm_unit} (${parseFloat((hume_lbm/weight*100).toFixed(1)).toLocaleString("en-US")}%)</td><td>${parseFloat(((weight - hume_lbm)/weight*100).toFixed(1)).toLocaleString("en-US")}%</td></tr>`;
        result+= "</table>";
    }
    else{
        result+= `<tr><td>Peters (for Children)</td><td>${parseFloat(peters_lbm.toFixed(1)).toLocaleString("en-US")}</td><td>${peters_lbm/weight}</td></tr>`;
        result+= "</table>";
    }

    let result_table = document.getElementById("result_table");
    result_table.innerHTML = result;

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