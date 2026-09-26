function setResult(){
    const unit1_value = document.getElementById("distance1_val").value;
    const unit1_label = document.getElementById("distance1").value;
    const unit2_label = document.getElementById("distance2").value;
    let result;
    if (unit1_label == "Meter" && unit2_label == "Kilometer"){
        result = unit1_value/1000;
    }
    else if (unit1_label == "Meter" && unit2_label == "Centimeter"){
        result = unit1_value*100;
    }
    else if (unit1_label == "Meter" && unit2_label == "Millimeter"){
        result = unit1_value*1000;
    }
    else if (unit1_label == "Meter" && unit2_label == "Nanometer"){
        result = unit1_value*1000000000;
    }
    else if (unit1_label == "Meter" && unit2_label == "Feet"){
        result = unit1_value*3.28084;
    }
    else if (unit1_label == "Meter" && unit2_label == "Inch"){
        result = unit1_value*39.3701;
    }
    else if (unit1_label == "Meter" && unit2_label == "Mile"){
        result = unit1_value/1609.34;
    }
    else if (unit1_label == "Meter" && unit2_label == "Yard"){
        result = unit1_value*1.09361;
    }
    else if (unit1_label == "Meter" && unit2_label == "Light year"){
        result = unit1_value*1.057e-16;
    }
    else if (unit1_label == "Kilometer" && unit2_label == "Meter"){
        result = unit1_value*1000;
    }
    else if (unit1_label == "Kilometer" && unit2_label == "Centimeter"){
        result = unit1_value*100000;
    }
    else if (unit1_label == "Kilometer" && unit2_label == "Millimeter"){
        result = unit1_value*1000000;
    }
    else if (unit1_label == "Kilometer" && unit2_label == "Nanometer"){
        result = unit1_value*1e+12;
    }
    else if (unit1_label == "Kilometer" && unit2_label == "Feet"){
        result = unit1_value*3280.84;
    }
    else if (unit1_label == "Kilometer" && unit2_label == "Inch"){
        result = unit1_value*39370.1;
    }
    else if (unit1_label == "Kilometer" && unit2_label == "Mile"){
        result = unit1_value/1.60934;
    }
    else if (unit1_label == "Kilometer" && unit2_label == "Yard"){
        result = unit1_value*1093.61;
    }
    else if (unit1_label == "Kilometer" && unit2_label == "Light year"){
        result = unit1_value*1.057e-13;
    }
    else if (unit1_label == "Centimeter" && unit2_label == "Meter"){
        result = unit1_value/100;
    }
    else if (unit1_label == "Centimeter" && unit2_label == "Kilometer"){
        result = unit1_value/100000
    }
    else if (unit1_label == "Centimeter" && unit2_label == "Millimeter"){
        result = unit1_value*10;
    }
    else if (unit1_label == "Centimeter" && unit2_label == "Nanometer"){
        result = unit1_value*1e+7;
    }
    else if (unit1_label == "Centimeter" && unit2_label == "Feet"){
        result = unit1_value/30.48;
    }
    else if (unit1_label == "Centimeter" && unit2_label == "Inch"){
        result = unit1_value/2.54;
    }
    else if (unit1_label == "Centimeter" && unit2_label == "Mile"){
        result = unit1_value/160934;
    }
    else if (unit1_label == "Centimeter" && unit2_label == "Yard"){
        result = unit1_value/91.44;
    }
    else if (unit1_label == "Centimeter" && unit2_label == "Light year"){
        result = unit1_value*1.057e-18;
    }
    else if (unit1_label == "Millimeter" && unit2_label == "Meter"){
        result = unit1_value/1000;
    }
    else if (unit1_label == "Millimeter" && unit2_label == "Centimeter"){
        result = unit1_value/10;
    }
    else if (unit1_label == "Millimeter" && unit2_label == "Nanometer"){
        result = unit1_value*1000000;
    }
    else if (unit1_label == "Millimeter" && unit2_label == "Feet"){
        result = unit1_value/304.8;
    }
    else if (unit1_label == "Millimeter" && unit2_label == "Inch"){
        result = unit1_value/25.4;
    }
    else if (unit1_label == "Millimeter" && unit2_label == "Mile"){
        result = unit1_value*6.21371e-7;
    }
    else if (unit1_label == "Millimeter" && unit2_label == "Yard"){
        result = unit1_value/914.4;
    }
    else if (unit1_label == "Millimeter" && unit2_label == "Light year"){
        result = unit1_value*1.057e-19;
    }
    else if (unit1_label == "Nanometer" && unit2_label == "Meter"){
        result = unit1_value*1e-9;
    }
    else if (unit1_label == "Nanometer" && unit2_label == "Kilometer"){
        result = unit1_value*1e-12;
    }
    else if (unit1_label == "Nanometer" && unit2_label == "Centimeter"){
        result = unit1_value*1e-7;
    }
    else if (unit1_label == "Nanometer" && unit2_label == "Millimeter"){
        result = unit1_value*1e-6;
    }
    else if (unit1_label == "Nanometer" && unit2_label == "Feet"){
        result = unit1_value/3.048e+8;
    }
    else if (unit1_label == "Nanometer" && unit2_label == "Inch"){
        result = unit1_value/2.54e+7;
    }
    else if (unit1_label == "Nanometer" && unit2_label == "Mile"){
        result = unit1_value/1.609e+12;
    }
    else if (unit1_label == "Nanometer" && unit2_label == "Yard"){
        result = unit1_value/9.144e+8;
    }
    else if (unit1_label == "Nanometer" && unit2_label == "Light year"){
        result = unit1_value/9.461e+24;
    }
    else if (unit1_label == "Feet" && unit2_label == "Meter"){
        result = unit1_value*0.3048;
    }
    else if (unit1_label == "Feet" && unit2_label == "Kilometer"){
        result = unit1_value*0.0003048;
    }
    else if (unit1_label == "Feet" && unit2_label == "Centimeter"){
        result = unit1_value*30.48;
    }
    else if (unit1_label == "Feet" && unit2_label == "Millimeter"){
        result = unit1_value*304.8;
    }
    else if (unit1_label == "Feet" && unit2_label == "Nanometer"){
        result = unit1_value*3.048e+8;
    }
    else if (unit1_label == "Feet" && unit2_label == "Inch"){
        result = unit1_value*12;
    }
    else if (unit1_label == "Feet" && unit2_label == "Mile"){
        result = unit1_value/5280;
    }
    else if (unit1_label == "Feet" && unit2_label == "Yard"){
        result = unit1_value/3;
    }
    else if (unit1_label == "Feet" && unit2_label == "Light year"){
        result = unit1_value*3.22174e-17;
    }
    else if (unit1_label == "Inch" && unit2_label == "Meter"){
        result = unit1_value*0.0254;
    }
    else if (unit1_label == "Inch" && unit2_label == "Kilometer"){
        result = unit1_value*2.54e-5;
    }
    else if (unit1_label == "Inch" && unit2_label == "Centimeter"){
        result = unit1_value*2.54;
    }
    else if (unit1_label == "Inch" && unit2_label == "Millimeter"){
        result = unit1_value*25.4;
    }
    else if (unit1_label == "Inch" && unit2_label == "Nanometer"){
        result = unit1_value*2.54e+7;
    }
    else if (unit1_label == "Inch" && unit2_label == "Feet"){
        result = unit1_value/12;
    }
    else if (unit1_label == "Inch" && unit2_label == "Mile"){
        result = unit1_value*1.57828e-5;
    }
    else if (unit1_label == "Inch" && unit2_label == "Yard"){
        result = unit1_value/36;
    }
    else if (unit1_label == "Inch" && unit2_label == "Light year"){
        result = unit1_value*2.68478e-18;
    }
    else if (unit1_label == "Mile" && unit2_label == "Meter"){
        result = unit1_value*1609.34;
    }
    else if (unit1_label == "Mile" && unit2_label == "Kilometer"){
        result = unit1_value*1.60934;
    }
    else if (unit1_label == "Mile" && unit2_label == "Centimeter"){
        result = unit1_value*160934;
    }
    else if (unit1_label == "Mile" && unit2_label == "Millimeter"){
        result = unit1_value*1.609e+6;
    }
    else if (unit1_label == "Mile" && unit2_label == "Nanometer"){
        result = unit1_value*1.609e+12;
    }
    else if (unit1_label == "Mile" && unit2_label == "Feet"){
        result = unit1_value*5280;
    }
    else if (unit1_label == "Mile" && unit2_label == "Inch"){
        result = unit1_value*63360;
    }
    else if (unit1_label == "Mile" && unit2_label == "Yard"){
        result = unit1_value*1760;
    }
    else if (unit1_label == "Mile" && unit2_label == "Light year"){
        result = unit1_value*1.70108e-13;
    }
    else if (unit1_label == "Yard" && unit2_label == "Meter"){
        result = unit1_value/0.9144;
    }
    else if (unit1_label == "Yard" && unit2_label == "Kilometer"){
        result = unit1_value/1093.61;
    }
    else if (unit1_label == "Yard" && unit2_label == "Centimeter"){
        result = unit1_value*91.44;
    }
    else if (unit1_label == "Yard" && unit2_label == "Millimeter"){
        result = unit1_value*914.4;
    }
    else if (unit1_label == "Yard" && unit2_label == "Nanometer"){
        result = unit1_value*9.144e+8;
    }
    else if (unit1_label == "Yard" && unit2_label == "Feet"){
        result = unit1_value*3;
    }
    else if (unit1_label == "Yard" && unit2_label == "Inch"){
        result = unit1_value*36;
    }
    else if (unit1_label == "Yard" && unit2_label == "Mile"){
        result = unit1_value/1760;
    }
    else if (unit1_label == "Yard" && unit2_label == "Light year"){
        result = unit1_value/1.035e+16;
    }
    else if (unit1_label == "Light year" && unit2_label == "Meter"){
        result = unit1_value*9.461e+15;
    }
    else if (unit1_label == "Light year" && unit2_label == "Kilometer"){
        result = unit1_value*9.461e+12;
    }
    else if (unit1_label == "Light year" && unit2_label == "Centimeter"){
        result = unit1_value*9.461e+17;
    }
    else if (unit1_label == "Light year" && unit2_label == "Millimeter"){
        result = unit1_value*9.461e+18;
    }
    else if (unit1_label == "Light year" && unit2_label == "Nanometer"){
        result = unit1_value*9.461e+24;
    }
    else if (unit1_label == "Light year" && unit2_label == "Feet"){
        result = unit1_value*3.104e+16;
    }
    else if (unit1_label == "Light year" && unit2_label == "Inch"){
        result = unit1_value*3.725e+17;
    }
    else if (unit1_label == "Light year" && unit2_label == "Mile"){
        result = unit1_value*5.879e+12;
    }
    else if (unit1_label == "Light year" && unit2_label == "Yard"){
        result = unit1_value*1.035e+16;
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