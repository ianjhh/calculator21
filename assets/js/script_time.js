function setResult(){
    const unit1_value = parseFloat(document.getElementById("time1_val").value);
    const unit1_label = document.getElementById("time1").value;
    const unit2_label = document.getElementById("time2").value;
    let result;
    if (unit1_label == "ns" && unit2_label == "us"){
        result = unit1_value * 0.001;
    }
    if (unit1_label == "ns" && unit2_label == "ms"){
        result = unit1_value * 1e-6;
    }
    if (unit1_label == "ns" && unit2_label == "s"){
        result = unit1_value * 1e-9;
    }
    if (unit1_label == "ns" && unit2_label == "h"){
        result = unit1_value * 2.77778e-13;
    }
    if (unit1_label == "ns" && unit2_label == "day"){
        result = unit1_value * 1.15741e-14;
    }
    if (unit1_label == "ns" && unit2_label == "week"){
        result = unit1_value * 1.65344e-15;
    }
    if (unit1_label == "ns" && unit2_label == "month"){
        result = unit1_value * 3.80517e-16;
    }
    if (unit1_label == "ns" && unit2_label == "year"){
        result = unit1_value * 3.17098e-17;
    }
    if (unit1_label == "us" && unit2_label == "ns"){
        result = unit1_value * 1000;
    }
    if (unit1_label == "us" && unit2_label == "ms"){
        result = unit1_value * 0.001;
    }
    if (unit1_label == "us" && unit2_label == "s"){
        result = unit1_value * 1e-6;
    }
    if (unit1_label == "us" && unit2_label == "m"){
        result = unit1_value * 1.66667e-8;
    }
    if (unit1_label == "us" && unit2_label == "h"){
        result = unit1_value * 2.77778e-10;
    }
    if (unit1_label == "us" && unit2_label == "day"){
        result = unit1_value * 1.15741e-11;
    }
    if (unit1_label == "us" && unit2_label == "week"){
        result = unit1_value * 1.65344e-12;
    }
    if (unit1_label == "us" && unit2_label == "month"){
        result = unit1_value * 3.80517e-13;
    }
    if (unit1_label == "us" && unit2_label == "year"){
        result = unit1_value * 3.17098e-14;
    }
    if (unit1_label == "ms" && unit2_label == "ns"){
        result = unit1_value * 1000000;
    }
    if (unit1_label == "ms" && unit2_label == "us"){
        result = unit1_value * 1000;
    }
    if (unit1_label == "ms" && unit2_label == "s"){
        result = unit1_value * 0.001;
    }
    if (unit1_label == "ms" && unit2_label == "m"){
        result = unit1_value * 1.66667e-5;
    }
    if (unit1_label == "ms" && unit2_label == "h"){
        result = unit1_value * 2.77778e-7;
    }
    if (unit1_label == "ms" && unit2_label == "day"){
        result = unit1_value * 1.15741e-8;
    }
    if (unit1_label == "ms" && unit2_label == "week"){
        result = unit1_value * 1.65344e-9;
    }
    if (unit1_label == "ms" && unit2_label == "month"){
        result = unit1_value * 3.80517e-10;
    }
    if (unit1_label == "ms" && unit2_label == "year"){
        result = unit1_value * 3.171e-11;
    }
    if (unit1_label == "s" && unit2_label == "ns"){
        result = unit1_value * 1e+9;
    }
    if (unit1_label == "s" && unit2_label == "us"){
        result = unit1_value * 1000000;
    }
    if (unit1_label == "s" && unit2_label == "ms"){
        result = unit1_value * 1000;
    }
    if (unit1_label == "s" && unit2_label == "m"){
        result = unit1_value * 0.0166667;
    }
    if (unit1_label == "s" && unit2_label == "h"){
        result = unit1_value * 0.000277778;
    }
    if (unit1_label == "s" && unit2_label == "day"){
        result = unit1_value * 1.15741e-5;
    }
    if (unit1_label == "s" && unit2_label == "week"){
        result = unit1_value * 1.65344e-6;
    }
    if (unit1_label == "s" && unit2_label == "month"){
        result = unit1_value * 3.80517e-7;
    }
    if (unit1_label == "s" && unit2_label == "year"){
        result = unit1_value * 3.171e-8;
    }
    if (unit1_label == "m" && unit2_label == "ns"){
        result = unit1_value * 6e+10;
    }
    if (unit1_label == "m" && unit2_label == "us"){
        result = unit1_value * 6e+7;
    }
    if (unit1_label == "m" && unit2_label == "ms"){
        result = unit1_value * 60000;
    }
    if (unit1_label == "m" && unit2_label == "s"){
        result = unit1_value * 60;
    }
    if (unit1_label == "m" && unit2_label == "h"){
        result = unit1_value * 0.0166667;
    }
    if (unit1_label == "m" && unit2_label == "day"){
        result = unit1_value * 0.0006944;
    }
    if (unit1_label == "m" && unit2_label == "week"){
        result = unit1_value * 9.92063e-5;
    }
    if (unit1_label == "m" && unit2_label == "month"){
        result = unit1_value * 2.2831e-5;
    }
    if (unit1_label == "m" && unit2_label == "year"){
        result = unit1_value * 1.9026e-6;
    }
    if (unit1_label == "h" && unit2_label == "ns"){
        result = unit1_value * 3.6e+12;
    }
    if (unit1_label == "h" && unit2_label == "us"){
        result = unit1_value * 3.6e+9;
    }
    if (unit1_label == "h" && unit2_label == "ms"){
        result = unit1_value * 3.6e+6;
    }
    if (unit1_label == "h" && unit2_label == "s"){
        result = unit1_value * 3600;
    }
    if (unit1_label == "h" && unit2_label == "m"){
        result = unit1_value * 60;
    }
    if (unit1_label == "h" && unit2_label == "day"){
        result = unit1_value * 0.0416667;
    }
    if (unit1_label == "h" && unit2_label == "week"){
        result = unit1_value * 0.0059524;
    }
    if (unit1_label == "h" && unit2_label == "month"){
        result = unit1_value * 0.00137;
    }
    if (unit1_label == "h" && unit2_label == "year"){
        result = unit1_value * 0.000114155;
    }
    if (unit1_label == "day" && unit2_label == "ns"){
        result = unit1_value * 8.64e+13;
    }
    if (unit1_label == "day" && unit2_label == "us"){
        result = unit1_value * 8.64e+10;
    }
    if (unit1_label == "day" && unit2_label == "ms"){
        result = unit1_value * 8.64e+7;
    }
    if (unit1_label == "day" && unit2_label == "s"){
        result = unit1_value * 86400;
    }
    if (unit1_label == "day" && unit2_label == "m"){
        result = unit1_value * 1440;
    }
    if (unit1_label == "day" && unit2_label == "h"){
        result = unit1_value * 24;
    }
    if (unit1_label == "day" && unit2_label == "week"){
        result = unit1_value * 0.142857;
    }
    if (unit1_label == "day" && unit2_label == "month"){
        result = unit1_value * 0.0328767;
    }
    if (unit1_label == "day" && unit2_label == "year"){
        result = unit1_value/365;
    }
    if (unit1_label == "week" && unit2_label == "ns"){
        result = unit1_value * 6.048e+14;
    }
    if (unit1_label == "week" && unit2_label == "us"){
        result = unit1_value * 6.048e+11;
    }
    if (unit1_label == "week" && unit2_label == "ms"){
        result = unit1_value * 6.048e+8;
    }
    if (unit1_label == "week" && unit2_label == "s"){
        result = unit1_value * 604800;
    }
    if (unit1_label == "week" && unit2_label == "m"){
        result = unit1_value * 10080;
    }
    if (unit1_label == "week" && unit2_label == "h"){
        result = unit1_value * 168;
    }
    if (unit1_label == "week" && unit2_label == "day"){
        result = unit1_value * 7;
    }
    if (unit1_label == "week" && unit2_label == "month"){
        result = unit1_value/4;
    }
    if (unit1_label == "week" && unit2_label == "year"){
        result = unit1_value * 0.0191781;
    }
    if (unit1_label == "month" && unit2_label == "ns"){
        result = unit1_value * 2.628e+15;
    }
    if (unit1_label == "month" && unit2_label == "us"){
        result = unit1_value * 2.628e+12;
    }
    if (unit1_label == "month" && unit2_label == "ms"){
        result = unit1_value * 2.628e+9;
    }
    if (unit1_label == "month" && unit2_label == "s"){
        result = unit1_value * 2.628e+6;
    }
    if (unit1_label == "month" && unit2_label == "m"){
        result = unit1_value * 43800;
    }
    if (unit1_label == "month" && unit2_label == "h"){
        result = unit1_value * 730;
    }
    if (unit1_label == "month" && unit2_label == "day"){
        result = unit1_value * 30.4167;
    }
    if (unit1_label == "month" && unit2_label == "week"){
        result = unit1_value * 4.34524;
    }
    if (unit1_label == "month" && unit2_label == "year"){
        result = unit1_value * 0.08333;
    }
    if (unit1_label == "year" && unit2_label == "ns"){
        result = unit1_value * 3.156e+16;
    }
    if (unit1_label == "year" && unit2_label == "us"){
        result = unit1_value * 3.156e+13;
    }
    if (unit1_label == "year" && unit2_label == "ms"){
        result = unit1_value * 3.156e+10;
    }
    if (unit1_label == "year" && unit2_label == "s"){
        result = unit1_value * 3.156e+7;
    }
    if (unit1_label == "year" && unit2_label == "m"){
        result = unit1_value * 525960;
    }
    if (unit1_label == "year" && unit2_label == "h"){
        result = unit1_value * 8766;
    }
    if (unit1_label == "year" && unit2_label == "day"){
        result = unit1_value * 365;
    }
    if (unit1_label == "year" && unit2_label == "week"){
        result = unit1_value * 52.1786;
    }
    if (unit1_label == "year" && unit2_label == "month"){
        result = unit1_value * 12;
    }

    document.getElementById("result").value = String(result);
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("time1_val").value = '';
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }