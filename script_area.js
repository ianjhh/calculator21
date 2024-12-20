function setResult(){
    const unit1_value = parseFloat(document.getElementById("area1_val").value);
    const unit1_label = document.getElementById("area1").value;
    const unit2_label = document.getElementById("area2").value;
    let result;
    if (unit1_label == "mm2" && unit2_label == "cm2"){
        result = unit1_value * 0.01;
    }
    else if (unit1_label == "mm2" && unit2_label == "m2"){
        result = unit1_value * 1e-6;
    }
    else if (unit1_label == "mm2" && unit2_label == "km2"){
        result = unit1_value * 1e-12;
    }
    else if (unit1_label == "mm2" && unit2_label == "smile"){
        result = unit1_value * 3.86102e-13;
    }
    else if (unit1_label == "mm2" && unit2_label == "syard"){
        result = unit1_value * 1.196e-6;
    }
    else if (unit1_label == "mm2" && unit2_label == "sfoot"){
        result = unit1_value * 1.0764e-5;
    }
    else if (unit1_label == "mm2" && unit2_label == "sinch"){
        result = unit1_value * 0.00155;
    }
    else if (unit1_label == "mm2" && unit2_label == "hectare"){
        result = unit1_value * 1e-10;
    }
    else if (unit1_label == "mm2" && unit2_label == "acre"){
        result = unit1_value * 2.47105e-10;
    }
    else if (unit1_label == "mm2" && unit2_label == "barn"){
        result = unit1_value * 1e+22;
    }
    else if (unit1_label == "cm2" && unit2_label == "mm2"){
        result = unit1_value * 100;
    }
    else if (unit1_label == "cm2" && unit2_label == "m2"){
        result = unit1_value * 0.0001;
    }
    else if (unit1_label == "cm2" && unit2_label == "km2"){
        result = unit1_value * 1e-10;
    }
    else if (unit1_label == "cm2" && unit2_label == "smile"){
        result = unit1_value * 3.861e-11;
    }
    else if (unit1_label == "cm2" && unit2_label == "syard"){
        result = unit1_value * 0.00012;
    }
    else if (unit1_label == "cm2" && unit2_label == "sfoot"){
        result = unit1_value * 0.001;
    }
    else if (unit1_label == "cm2" && unit2_label == "sinch"){
        result = unit1_value * 0.155;
    }
    else if (unit1_label == "cm2" && unit2_label == "hectare"){
        result = unit1_value * 1e-8;
    }
    else if (unit1_label == "cm2" && unit2_label == "acre"){
        result = unit1_value * 2.47105e-8;
    }
    else if (unit1_label == "cm2" && unit2_label == "barn"){
        result = unit1_value * 1e+24;
    }
    else if (unit1_label == "m2" && unit2_label == "mm2"){
        result = unit1_value * 1000000;
    }
    else if (unit1_label == "m2" && unit2_label == "cm2"){
        result = unit1_value * 10000;
    }
    else if (unit1_label == "m2" && unit2_label == "km2"){
        result = unit1_value * 1e-6;
    }
    else if (unit1_label == "m2" && unit2_label == "smile"){
        result = unit1_value * 3.861e-7
    }
    else if (unit1_label == "m2" && unit2_label == "syard"){
        result = unit1_value * 1.196;
    }
    else if (unit1_label == "m2" && unit2_label == "sfoot"){
        result = unit1_value * 10.764;
    }
    else if (unit1_label == "m2" && unit2_label == "sinch"){
        result = unit1_value * 1550;
    }
    else if (unit1_label == "m2" && unit2_label == "hectare"){
        result = unit1_value * 0.0001;
    }
    else if (unit1_label == "m2" && unit2_label == "acre"){
        result = unit1_value * 0.000247;
    }
    else if (unit1_label == "m2" && unit2_label == "barn"){
        result = unit1_value * 1e+28;
    }
    else if (unit1_label == "km2" && unit2_label == "mm2"){
        result = unit1_value * 1e+12;
    }
    else if (unit1_label == "km2" && unit2_label == "cm2"){
        result = unit1_value * 1e+10;
    }
    else if (unit1_label == "km2" && unit2_label == "m2"){
        result = unit1_value * 1000000;
    }
    else if (unit1_label == "km2" && unit2_label == "smile"){
        result = unit1_value * 0.3861;
    }
    else if (unit1_label == "km2" && unit2_label == "syard"){
        result = unit1_value * 1.196e+6;
    }
    else if (unit1_label == "km2" && unit2_label == "sfoot"){
        result = unit1_value * 1.076e+7;
    }
    else if (unit1_label == "km2" && unit2_label == "sinch"){
        result = unit1_value * 1.55e+9;
    }
    else if (unit1_label == "km2" && unit2_label == "hectare"){
        result = unit1_value * 100;
    }
    else if (unit1_label == "km2" && unit2_label == "acre"){
        result = unit1_value * 247.105;
    }
    else if (unit1_label == "km2" && unit2_label == "barn"){
        result = unit1_value * 1e+34;
    }
    else if (unit1_label == "smile" && unit2_label == "mm2"){
        result = unit1_value * 2.59e+12;
    }
    else if (unit1_label == "smile" && unit2_label == "cm2"){
        result = unit1_value * 2.59e+10;
    }
    else if (unit1_label == "smile" && unit2_label == "m2"){
        result = unit1_value * 2.59e+6;
    }
    else if (unit1_label == "smile" && unit2_label == "km2"){
        result = unit1_value * 2.59;
    }
    else if (unit1_label == "smile" && unit2_label == "syard"){
        result = unit1_value * 3.098e+6;
    }
    else if (unit1_label == "smile" && unit2_label == "sfoot"){
        result = unit1_value * 2.788e+7;
    }
    else if (unit1_label == "smile" && unit2_label == "sinch"){
        result = unit1_value * 4.014e+9;
    }
    else if (unit1_label == "smile" && unit2_label == "hectare"){
        result = unit1_value * 259;
    }
    else if (unit1_label == "smile" && unit2_label == "acre"){
        result = unit1_value * 640;
    }
    else if (unit1_label == "smile" && unit2_label == "barn"){
        result = unit1_value * 2.59e+34;
    }
    else if (unit1_label == "syard" && unit2_label == "mm2"){
        result = unit1_value * 836127;
    }
    else if (unit1_label == "syard" && unit2_label == "cm2"){
        result = unit1_value * 8361.27;
    }
    else if (unit1_label == "syard" && unit2_label == "m2"){
        result = unit1_value * 0.836127;
    }
    else if (unit1_label == "syard" && unit2_label == "km2"){
        result = unit1_value * 8.36127e-7;
    }
    else if (unit1_label == "syard" && unit2_label == "smile"){
        result = unit1_value * 3.2283e-7;
    }
    else if (unit1_label == "syard" && unit2_label == "sfoot"){
        result = unit1_value * 9;
    }
    else if (unit1_label == "syard" && unit2_label == "sinch"){
        result = unit1_value * 1296;
    }
    else if (unit1_label == "syard" && unit2_label == "hectare"){
        result = unit1_value * 8.36127e-5;
    }
    else if (unit1_label == "syard" && unit2_label == "acre"){
        result = unit1_value * 0.0002;
    }
    else if (unit1_label == "syard" && unit2_label == "barn"){
        result = unit1_value * 8.361e+27;
    }
    else if (unit1_label == "sfoot" && unit2_label == "mm2"){
        result = unit1_value * 92903;
    }
    else if (unit1_label == "sfoot" && unit2_label == "cm2"){
        result = unit1_value * 929.03;
    }
    else if (unit1_label == "sfoot" && unit2_label == "m2"){
        result = unit1_value * 0.092903;
    }
    else if (unit1_label == "sfoot" && unit2_label == "km2"){
        result = unit1_value * 9.2903e-8;
    }
    else if (unit1_label == "sfoot" && unit2_label == "smile"){
        result = unit1_value * 3.587e-8;
    }
    else if (unit1_label == "sfoot" && unit2_label == "syard"){
        result = unit1_value * 0.111111;
    }
    else if (unit1_label == "sfoot" && unit2_label == "sinch"){
        result = unit1_value * 144;
    }
    else if (unit1_label == "sfoot" && unit2_label == "hectare"){
        result = unit1_value * 9.2903e-6;
    }
    else if (unit1_label == "sfoot" && unit2_label == "acre"){
        result = unit1_value * 2.2957e-5;
    }
    else if (unit1_label == "sfoot" && unit2_label == "barn"){
        result = unit1_value * 9.29e+26;
    }
    else if (unit1_label == "sinch" && unit2_label == "mm2"){
        result = unit1_value * 645.16;
    }
    else if (unit1_label == "sinch" && unit2_label == "cm2"){
        result = unit1_value * 6.4516;
    }
    else if (unit1_label == "sinch" && unit2_label == "m2"){
        result = unit1_value * 0.00064516;
    }
    else if (unit1_label == "sinch" && unit2_label == "km2"){
        result = unit1_value * 6.4516e-10;
    }
    else if (unit1_label == "sinch" && unit2_label == "smile"){
        result = unit1_value * 2.491e-10;
    }
    else if (unit1_label == "sinch" && unit2_label == "syard"){
        result = unit1_value * 0.000772;
    }
    else if (unit1_label == "sinch" && unit2_label == "sfoot"){
        result = unit1_value * 0.00694;
    }
    else if (unit1_label == "sinch" && unit2_label == "hectare"){
        result = unit1_value * 6.4516e-8;
    }
    else if (unit1_label == "sinch" && unit2_label == "acre"){
        result = unit1_value * 1.59423e-7;
    }
    else if (unit1_label == "sinch" && unit2_label == "barn"){
        result = unit1_value * 6.452e+24;
    }
    else if (unit1_label == "hectare" && unit2_label == "mm2"){
        result = unit1_value * 1e+10;
    }
    else if (unit1_label == "hectare" && unit2_label == "cm2"){
        result = unit1_value * 1e+8;
    }
    else if (unit1_label == "hectare" && unit2_label == "m2"){
        result = unit1_value * 10000;
    }
    else if (unit1_label == "hectare" && unit2_label == "km2"){
        result = unit1_value * 0.01;
    }
    else if (unit1_label == "hectare" && unit2_label == "smile"){
        result = unit1_value * 0.003861;
    }
    else if (unit1_label == "hectare" && unit2_label == "syard"){
        result = unit1_value * 11960;
    }
    else if (unit1_label == "hectare" && unit2_label == "sfoot"){
        result = unit1_value * 107639;
    }
    else if (unit1_label == "hectare" && unit2_label == "sinch"){
        result = unit1_value * 1.55e+7;
    }
    else if (unit1_label == "hectare" && unit2_label == "acre"){
        result = unit1_value * 2.47105;
    }
    else if (unit1_label == "hectare" && unit2_label == "barn"){
        result = unit1_value * 1e+32;
    }
    else if (unit1_label == "acre" && unit2_label == "mm2"){
        result = unit1_value * 4.047e+9;
    }
    else if (unit1_label == "acre" && unit2_label == "cm2"){
        result = unit1_value * 4.047e+7;
    }
    else if (unit1_label == "acre" && unit2_label == "m2"){
        result = unit1_value * 4046.86;
    }
    else if (unit1_label == "acre" && unit2_label == "km2"){
        result = unit1_value * 0.004047;
    }
    else if (unit1_label == "acre" && unit2_label == "smile"){
        result = unit1_value * 0.0015625;
    }
    else if (unit1_label == "acre" && unit2_label == "syard"){
        result = unit1_value * 4840;
    }
    else if (unit1_label == "acre" && unit2_label == "sfoot"){
        result = unit1_value * 43560;
    }
    else if (unit1_label == "acre" && unit2_label == "sinch"){
        result = unit1_value * 6.273e+6;
    }
    else if (unit1_label == "acre" && unit2_label == "hectare"){
        result = unit1_value * 0.404686;
    }
    else if (unit1_label == "acre" && unit2_label == "barn"){
        result = unit1_value * 4.047e+31;
    }
    else if (unit1_label == "barn" && unit2_label == "mm2"){
        result = unit1_value * 1e-22;
    }
    else if (unit1_label == "barn" && unit2_label == "cm2"){
        result = unit1_value * 1e-24;
    }
    else if (unit1_label == "barn" && unit2_label == "m2"){
        result = unit1_value * 1e-28;
    }
    else if (unit1_label == "barn" && unit2_label == "km2"){
        result = unit1_value * 1e-34;
    }
    else if (unit1_label == "barn" && unit2_label == "smile"){
        result = unit1_value * 3.861e-35;
    }
    else if (unit1_label == "barn" && unit2_label == "syard"){
        result = unit1_value * 1.196e-28;
    }
    else if (unit1_label == "barn" && unit2_label == "sfoot"){
        result = unit1_value * 1.0764e-27
    }
    else if (unit1_label == "barn" && unit2_label == "sinch"){
        result = unit1_value * 1.55e-25;
    }
    else if (unit1_label == "barn" && unit2_label == "hectare"){
        result = unit1_value * 1e-32;
    }
    else if (unit1_label == "barn" && unit2_label == "acre"){
        result = unit1_value * 2.47105e-32;
    }

    document.getElementById("result").value = String(result);
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("area1_val").value = '';
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }