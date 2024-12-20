function setResult(){
    const unit1_value = parseFloat(document.getElementById("volume1_val").value);
    const unit1_label = document.getElementById("volume1").value;
    const unit2_label = document.getElementById("volume2").value;
    let result;
    if (unit1_label == "mm3" && unit2_label == "cm3"){
        result = unit1_value/1000;
    }
    else if (unit1_label == "mm3" && unit2_label == "m3"){
        result = unit1_value * 1e-9;
    }
    else if (unit1_label == "mm3" && unit2_label == "km3"){
        result = unit1_value * 1e-18;
    }
    else if (unit1_label == "mm3" && unit2_label == "cmile"){
        result = unit1_value * 2.39913e-19;
    }
    else if (unit1_label == "mm3" && unit2_label == "cyard"){
        result = unit1_value * 1.30795e-9;
    }
    else if (unit1_label == "mm3" && unit2_label == "cfoot"){
        result = unit1_value * 3.53147e-8;
    }
    else if (unit1_label == "mm3" && unit2_label == "cinch"){
        result = unit1_value * 6.10237e-5;
    }
    else if (unit1_label == "mm3" && unit2_label == "ml"){
        result = unit1_value/1000;
    }
    else if (unit1_label == "mm3" && unit2_label == "l"){
        result = unit1_value * 1e-6;
    }
    else if (unit1_label == "mm3" && unit2_label == "tea"){
        result = unit1_value * 0.000202884;
    }
    else if (unit1_label == "mm3" && unit2_label == "table"){
        result = unit1_value * 6.7628e-5;
    }
    else if (unit1_label == "mm3" && unit2_label == "c"){
        result = unit1_value * 4.22675e-6;
    }
    else if (unit1_label == "mm3" && unit2_label == "g"){
        result = unit1_value * 2.1997e-7;
    }
    else if (unit1_label == "mm3" && unit2_label == "q"){
        result = unit1_value * 8.7988e-7
    }
    else if (unit1_label == "mm3" && unit2_label == "p"){
        result = unit1_value * 2.11338e-6
    }
    else if (unit1_label == "cm3" && unit2_label == "mm3"){
        result = unit1_value * 1000;
    }
    else if (unit1_label == "cm3" && unit2_label == "m3"){
        result = unit1_value * 1e-6;
    }
    else if (unit1_label == "cm3" && unit2_label == "km3"){
        result = unit1_value * 1e-15;
    }
    else if (unit1_label == "cm3" && unit2_label == "cmile"){
        result = unit1_value * 2.399e-16;
    }
    else if (unit1_label == "cm3" && unit2_label == "cyard"){
        result = unit1_value * 1.30795e-6;
    }
    else if (unit1_label == "cm3" && unit2_label == "cfoot"){
        result = unit1_value * 3.53e-5
    }
    else if (unit1_label == "cm3" && unit2_label == "cinch"){
        result = unit1_value * 0.061;
    }
    else if (unit1_label == "cm3" && unit2_label == "ml"){
        result = unit1_value;
    }
    else if (unit1_label == "cm3" && unit2_label == "l"){
        result = unit1_value/1000;
    }
    else if (unit1_label == "cm3" && unit2_label == "tea"){
        result = unit1_value * 0.203;
    }
    else if (unit1_label == "cm3" && unit2_label == "table"){
        result = unit1_value * 0.067628;
    }
    else if (unit1_label == "cm3" && unit2_label == "c"){
        result = unit1_value * 0.004;
    }
    else if (unit1_label == "cm3" && unit2_label == "g"){
        result = unit1_value * 0.000264;
    }
    else if (unit1_label == "cm3" && unit2_label == "q"){
        result = unit1_value * 0.001;
    }
    else if (unit1_label == "cm3" && unit2_label == "p"){
        result = unit1_value * 0.0021;
    }
    else if (unit1_label == "m3" && unit2_label == "mm3"){
        result = unit1_value * 1e+9;
    }
    else if (unit1_label == "m3" && unit2_label == "cm3"){
        result = unit1_value * 1000000;
    }
    else if (unit1_label == "m3" && unit2_label == "km3"){
        result = unit1_value * 1e-9;
    }
    else if (unit1_label == "m3" && unit2_label == "cmile"){
        result = unit1_value * 2.4e-10
    }
    else if (unit1_label == "m3" && unit2_label == "cyard"){
        result = unit1_value * 1.308;
    }
    else if (unit1_label == "m3" && unit2_label == "cfoot"){
        result = unit1_value * 35.3147;
    }
    else if (unit1_label == "m3" && unit2_label == "cinch"){
        result = unit1_value * 61023.7;
    }
    else if (unit1_label == "m3" && unit2_label == "ml"){
        result = unit1_value * 1000000;
    }
    else if (unit1_label == "m3" && unit2_label == "l"){
        result = unit1_value * 1000;
    }
    else if (unit1_label == "m3" && unit2_label == "tea"){
        result = unit1_value * 202884;
    }
    else if (unit1_label == "m3" && unit2_label == "table"){
        result = unit1_value * 67628;
    }
    else if (unit1_label == "m3" && unit2_label == "c"){
        result = unit1_value * 4226.75;
    }
    else if (unit1_label == "m3" && unit2_label == "g"){
        result = unit1_value * 264.172;
    }
    else if (unit1_label == "m3" && unit2_label == "q"){
        result = unit1_value * 1056.69;
    }
    else if (unit1_label == "m3" && unit2_label == "p"){
        result = unit1_value * 2113.38;
    }
    else if (unit1_label == "km3" && unit2_label == "mm3"){
        result = unit1_value * 1e+18;
    }
    else if (unit1_label == "km3" && unit2_label == "cm3"){
        result = unit1_value * 1e+15;
    }
    else if (unit1_label == "km3" && unit2_label == "m3"){
        result = unit1_value * 1e+9;
    }
    else if (unit1_label == "km3" && unit2_label == "cmile"){
        result = unit1_value * 0.239913;
    }
    else if (unit1_label == "km3" && unit2_label == "cyard"){
        result = unit1_value * 1.308e+9;
    }
    else if (unit1_label == "km3" && unit2_label == "cfoot"){
        result = unit1_value * 3.531e+10;
    }
    else if (unit1_label == "km3" && unit2_label == "cinch"){
        result = unit1_value * 6.102e+13;
    }
    else if (unit1_label == "km3" && unit2_label == "ml"){
        result = unit1_value * 1e+15;
    }
    else if (unit1_label == "km3" && unit2_label == "l"){
        result = unit1_value * 1e+12;
    }
    else if (unit1_label == "km3" && unit2_label == "tea"){
        result = unit1_value * 2.029e+14;
    }
    else if (unit1_label == "km3" && unit2_label == "table"){
        result = unit1_value * 6.763e+13;
    }
    else if (unit1_label == "km3" && unit2_label == "c"){
        result = unit1_value * 4.227e+12;
    }
    else if (unit1_label == "km3" && unit2_label == "g"){
        result = unit1_value * 2.642e+11;
    }
    else if (unit1_label == "km3" && unit2_label == "q"){
        result = unit1_value * 1.057e+12;
    }
    else if (unit1_label == "km3" && unit2_label == "p"){
        result = unit1_value * 2.113e+12;
    }
    else if (unit1_label == "cmile" && unit2_label == "mm3"){
        result = unit1_value * 4.168e+18;
    }
    else if (unit1_label == "cmile" && unit2_label == "cm3"){
        result = unit1_value * 4.168e+15;
    }
    else if (unit1_label == "cmile" && unit2_label == "m3"){
        result = unit1_value * 4.168e+9;
    }
    else if (unit1_label == "cmile" && unit2_label == "km3"){
        result = unit1_value * 4.16818;
    }
    else if (unit1_label == "cmile" && unit2_label == "cyard"){
        result = unit1_value * 5.452e+9;
    }
    else if (unit1_label == "cmile" && unit2_label == "cfoot"){
        result = unit1_value * 1.472e+11;
    }
    else if (unit1_label == "cmile" && unit2_label == "cinch"){
        result = unit1_value * 2.544e+14;
    }
    else if (unit1_label == "cmile" && unit2_label == "ml"){
        result = unit1_value * 4.168e+15;
    }
    else if (unit1_label == "cmile" && unit2_label == "l"){
        result = unit1_value * 4.168e+12;
    }
    else if (unit1_label == "cmile" && unit2_label == "tea"){
        result = unit1_value * 8.457e+14;
    }
    else if (unit1_label == "cmile" && unit2_label == "table"){
        result = unit1_value * 2.819e+14;
    }
    else if (unit1_label == "cmile" && unit2_label == "c"){
        result = unit1_value * 1.762e+13;
    }
    else if (unit1_label == "cmile" && unit2_label == "g"){
        result = unit1_value * 1.101e+12;
    }
    else if (unit1_label == "cmile" && unit2_label == "q"){
        result = unit1_value * 4.404e+12;
    }
    else if (unit1_label == "cmile" && unit2_label == "p"){
        result = unit1_value * 8.809e+12;
    }
    else if (unit1_label == "cyard" && unit2_label == "mm3"){
        result = unit1_value * 7.646e+8;
    }
    else if (unit1_label == "cyard" && unit2_label == "cm3"){
        result = unit1_value * 764555;
    }
    else if (unit1_label == "cyard" && unit2_label == "m3"){
        result = unit1_value * 0.764555;
    }
    else if (unit1_label == "cyard" && unit2_label == "km3"){
        result = unit1_value * 7.64555e-10;
    }
    else if (unit1_label == "cyard" && unit2_label == "cmile"){
        result = unit1_value * 1.83426e-10;
    }
    else if (unit1_label == "cyard" && unit2_label == "cfoot"){
        result = unit1_value * 27;
    }
    else if (unit1_label == "cyard" && unit2_label == "cinch"){
        result = unit1_value * 46656;
    }
    else if (unit1_label == "cyard" && unit2_label == "ml"){
        result = unit1_value * 764555;
    }
    else if (unit1_label == "cyard" && unit2_label == "l"){
        result = unit1_value * 764.555;
    }
    else if (unit1_label == "cyard" && unit2_label == "tea"){
        result = unit1_value * 155116;
    }
    else if (unit1_label == "cyard" && unit2_label == "table"){
        result = unit1_value * 51705.4;
    }
    else if (unit1_label == "cyard" && unit2_label == "c"){
        result = unit1_value * 3231.58;
    }
    else if (unit1_label == "cyard" && unit2_label == "g"){
        result = unit1_value * 201.974;
    }
    else if (unit1_label == "cyard" && unit2_label == "q"){
        result = unit1_value * 807.896;
    }
    else if (unit1_label == "cyard" && unit2_label == "p"){
        result = unit1_value * 1615.79;
    }
    else if (unit1_label == "cfoot" && unit2_label == "mm3"){
        result = unit1_value * 2.832e+7;
    }
    else if (unit1_label == "cfoot" && unit2_label == "cm3"){
        result = unit1_value * 28316.8;
    }
    else if (unit1_label == "cfoot" && unit2_label == "m3"){
        result = unit1_value * 0.0283168;
    }
    else if (unit1_label == "cfoot" && unit2_label == "km3"){
        result = unit1_value * 2.83168e-11;
    }
    else if (unit1_label == "cfoot" && unit2_label == "cmile"){
        result = unit1_value * 6.79357e-12;
    }
    else if (unit1_label == "cfoot" && unit2_label == "cyard"){
        result = unit1_value * 0.037037;
    }
    else if (unit1_label == "cfoot" && unit2_label == "cinch"){
        result = unit1_value * 1728;
    }
    else if (unit1_label == "cfoot" && unit2_label == "ml"){
        result = unit1_value * 28316.8;
    }
    else if (unit1_label == "cfoot" && unit2_label == "l"){
        result = unit1_value * 28.3168;
    }
    else if (unit1_label == "cfoot" && unit2_label == "tea"){
        result = unit1_value * 5745.04;
    }
    else if (unit1_label == "cfoot" && unit2_label == "table"){
        result = unit1_value * 1915.01;
    }
    else if (unit1_label == "cfoot" && unit2_label == "c"){
        result = unit1_value * 119.688;
    }
    else if (unit1_label == "cfoot" && unit2_label == "g"){
        result = unit1_value * 7.48052;
    }
    else if (unit1_label == "cfoot" && unit2_label == "q"){
        result = unit1_value * 29.9221;
    }
    else if (unit1_label == "cfoot" && unit2_label == "p"){
        result = unit1_value * 59.8442;
    }
    else if (unit1_label == "cinch" && unit2_label == "mm3"){
        result = unit1_value * 2.832e+7;
    }
    else if (unit1_label == "cinch" && unit2_label == "cm3"){
        result = unit1_value * 28316.8;
    }
    else if (unit1_label == "cinch" && unit2_label == "m3"){
        result = unit1_value * 1.63871e-5;
    }
    else if (unit1_label == "cinch" && unit2_label == "km3"){
        result = unit1_value * 1.63871e-14;
    }
    else if (unit1_label == "cinch" && unit2_label == "cmile"){
        result = unit1_value * 3.9315e-15;
    }
    else if (unit1_label == "cinch" && unit2_label == "cyard"){
        result = unit1_value * 2.14335e-5;
    }
    else if (unit1_label == "cinch" && unit2_label == "cfoot"){
        result = unit1_value * 0.000578704;
    }
    else if (unit1_label == "cinch" && unit2_label == "ml"){
        result = unit1_value * 16.3871;
    }
    else if (unit1_label == "cinch" && unit2_label == "tea"){
        result = unit1_value * 3.32468;
    }
    else if (unit1_label == "cinch" && unit2_label == "table"){
        result = unit1_value * 1.10823;
    }
    else if (unit1_label == "cinch" && unit2_label == "c"){
        result = unit1_value * 0.069;
    }
    else if (unit1_label == "cinch" && unit2_label == "g"){
        result = unit1_value * 0.004329;
    }
    else if (unit1_label == "cinch" && unit2_label == "q"){
        result = unit1_value * 0.017316;
    }
    else if (unit1_label == "cinch" && unit2_label == "p"){
        result = unit1_value * 0.034632;
    }
    else if (unit1_label == "ml" && unit2_label == "mm3"){
        result = unit1_value * 16387.1;
    }
    else if (unit1_label == "ml" && unit2_label == "cm3"){
        result = unit1_value * 16.3871;
    }
    else if (unit1_label == "ml" && unit2_label == "m3"){
        result = unit1_value * 1e-6;
    }
    else if (unit1_label == "ml" && unit2_label == "km3"){
        result = unit1_value * 1e-15;
    }
    else if (unit1_label == "ml" && unit2_label == "cmile"){
        result = unit1_value * 2.4e-16
    }
    else if (unit1_label == "ml" && unit2_label == "cyard"){
        result = unit1_value * 1.308e-6
    }
    else if (unit1_label == "ml" && unit2_label == "cfoot"){
        result = unit1_value * 3.53147e-5;
    }
    else if (unit1_label == "ml" && unit2_label == "cinch"){
        result = unit1_value * 0.061;
    }
    else if (unit1_label == "ml" && unit2_label == "l"){
        result = unit1_value * 0.001;
    }
    else if (unit1_label == "ml" && unit2_label == "tea"){
        result = unit1_value * 0.202884;
    }
    else if (unit1_label == "ml" && unit2_label == "table"){
        result = unit1_value * 0.067628;
    }
    else if (unit1_label == "ml" && unit2_label == "c"){
        result = unit1_value * 0.004;
    }
    else if (unit1_label == "ml" && unit2_label == "g"){
        result = unit1_value * 0.000264;
    }
    else if (unit1_label == "ml" && unit2_label == "q"){
        result = unit1_value * 0.001;
    }
    else if (unit1_label == "ml" && unit2_label == "p"){
        result = unit1_value * 0.0021;
    }
    else if (unit1_label == "l" && unit2_label == "mm3"){
        result = unit1_value * 1000000;
    }
    else if (unit1_label == "l" && unit2_label == "cm3"){
        result = unit1_value * 1000;
    }
    else if (unit1_label == "l" && unit2_label == "m3"){
        result = unit1_value * 0.001;
    }
    else if (unit1_label == "l" && unit2_label == "km3"){
        result = unit1_value * 1e-12;
    }
    else if (unit1_label == "l" && unit2_label == "cmile"){
        result = unit1_value * 2.4e-13
    }
    else if (unit1_label == "l" && unit2_label == "cyard"){
        result = unit1_value * 0.001308;
    }
    else if (unit1_label == "l" && unit2_label == "cfoot"){
        result = unit1_value * 0.035315;
    }
    else if (unit1_label == "l" && unit2_label == "cinch"){
        result = unit1_value * 61.0237;
    }
    else if (unit1_label == "l" && unit2_label == "ml"){
        result = unit1_value * 1000;
    }
    else if (unit1_label == "l" && unit2_label == "tea"){
        result = unit1_value * 202.9;
    }
    else if (unit1_label == "l" && unit2_label == "table"){
        result = unit1_value * 67.628;
    }
    else if (unit1_label == "l" && unit2_label == "c"){
        result = unit1_value * 4.22675;
    }
    else if (unit1_label == "l" && unit2_label == "g"){
        result = unit1_value * 0.264172;
    }
    else if (unit1_label == "l" && unit2_label == "q"){
        result = unit1_value * 1.0567;
    }
    else if (unit1_label == "l" && unit2_label == "p"){
        result = unit1_value * 2.1134;
    }
    else if (unit1_label == "tea" && unit2_label == "mm3"){
        result = unit1_value * 4928.92;
    }
    else if (unit1_label == "tea" && unit2_label == "cm3"){
        result = unit1_value * 4.9289;
    }
    else if (unit1_label == "tea" && unit2_label == "m3"){
        result = unit1_value * 4.929e-6;
    }
    else if (unit1_label == "tea" && unit2_label == "km3"){
        result = unit1_value * 4.929e-15;
    }
    else if (unit1_label == "tea" && unit2_label == "cmile"){
        result = unit1_value * 1.1825e-15;
    }
    else if (unit1_label == "tea" && unit2_label == "cyard"){
        result = unit1_value * 6.44678e-6;
    }
    else if (unit1_label == "tea" && unit2_label == "cfoot"){
        result = unit1_value * 0.000174;
    }
    else if (unit1_label == "tea" && unit2_label == "cinch"){
        result = unit1_value * 0.30078;
    }
    else if (unit1_label == "tea" && unit2_label == "ml"){
        result = unit1_value * 4.929;
    }
    else if (unit1_label == "tea" && unit2_label == "l"){
        result = unit1_value * 0.004929;
    }
    else if (unit1_label == "tea" && unit2_label == "table"){
        result = unit1_value/3;
    }
    else if (unit1_label == "tea" && unit2_label == "c"){
        result = unit1_value * 0.0208333;
    }
    else if (unit1_label == "tea" && unit2_label == "g"){
        result = unit1_value * 0.0013;
    }
    else if (unit1_label == "tea" && unit2_label == "q"){
        result = unit1_value * 0.00521;
    }
    else if (unit1_label == "tea" && unit2_label == "p"){
        result = unit1_value * 0.0104;
    }
    else if (unit1_label == "table" && unit2_label == "mm3"){
        result = unit1_value * 14786.8;
    }
    else if (unit1_label == "table" && unit2_label == "cm3"){
        result = unit1_value * 14.7868;
    }
    else if (unit1_label == "table" && unit2_label == "m3"){
        result = unit1_value * 1.47868e-5;
    }
    else if (unit1_label == "table" && unit2_label == "km3"){
        result = unit1_value * 1.4787e-14;
    }
    else if (unit1_label == "table" && unit2_label == "cmile"){
        result = unit1_value * 3.54753e-15;
    }
    else if (unit1_label == "table" && unit2_label == "cyard"){
        result = unit1_value * 1.934e-5;
    }
    else if (unit1_label == "table" && unit2_label == "cfoot"){
        result = unit1_value * 0.0005222;
    }
    else if (unit1_label == "table" && unit2_label == "cinch"){
        result = unit1_value * 0.902344;
    }
    else if (unit1_label == "table" && unit2_label == "ml"){
        result = unit1_value * 14.7868;
    }
    else if (unit1_label == "table" && unit2_label == "l"){
        result = unit1_value * 0.0148;
    }
    else if (unit1_label == "table" && unit2_label == "tea"){
        result = unit1_value * 3;
    }
    else if (unit1_label == "table" && unit2_label == "c"){
        result = unit1_value * 0.0625;
    }
    else if (unit1_label == "table" && unit2_label == "g"){
        result = unit1_value * 0.0039;
    }
    else if (unit1_label == "table" && unit2_label == "q"){
        result = unit1_value * 0.015625;
    }
    else if (unit1_label == "table" && unit2_label == "p"){
        result = unit1_value * 0.03125;
    }
    else if (unit1_label == "c" && unit2_label == "mm3"){
        result = unit1_value * 236588;
    }
    else if (unit1_label == "c" && unit2_label == "cm3"){
        result = unit1_value * 236.588;
    }
    else if (unit1_label == "c" && unit2_label == "m3"){
        result = unit1_value * 0.00023659;
    }
    else if (unit1_label == "c" && unit2_label == "km3"){
        result = unit1_value * 2.36588e-13;
    }
    else if (unit1_label == "c" && unit2_label == "cmile"){
        result = unit1_value * 5.67605e-14;
    }
    else if (unit1_label == "c" && unit2_label == "cyard"){
        result = unit1_value * 0.00031;
    }
    else if (unit1_label == "c" && unit2_label == "cfoot"){
        result = unit1_value * 0.008355;
    }
    else if (unit1_label == "c" && unit2_label == "cinch"){
        result = unit1_value * 14.4375;
    }
    else if (unit1_label == "c" && unit2_label == "ml"){
        result = unit1_value * 236.588;
    }
    else if (unit1_label == "c" && unit2_label == "l"){
        result = unit1_value * 0.23659;
    }
    else if (unit1_label == "c" && unit2_label == "tea"){
        result = unit1_value * 48;
    }
    else if (unit1_label == "c" && unit2_label == "table"){
        result = unit1_value * 16;
    }
    else if (unit1_label == "c" && unit2_label == "g"){
        result = unit1_value * 0.0625;
    }
    else if (unit1_label == "c" && unit2_label == "q"){
        result = unit1_value/4;
    }
    else if (unit1_label == "c" && unit2_label == "p"){
        result = unit1_value/2;
    }
    else if (unit1_label == "g" && unit2_label == "mm3"){
        result = unit1_value * 3.785e+6;
    }
    else if (unit1_label == "g" && unit2_label == "cm3"){
        result = unit1_value * 3785.41;
    }
    else if (unit1_label == "g" && unit2_label == "m3"){
        result = unit1_value * 0.0038;
    }
    else if (unit1_label == "g" && unit2_label == "km3"){
        result = unit1_value * 3,7854e-12;
    }
    else if (unit1_label == "g" && unit2_label == "cmile"){
        result = unit1_value * 9.0817e-13;
    }
    else if (unit1_label == "g" && unit2_label == "cyard"){
        result = unit1_value * 0.00495;
    }
    else if (unit1_label == "g" && unit2_label == "cfoot"){
        result = unit1_value * 0.1337;
    }
    else if (unit1_label == "g" && unit2_label == "cinch"){
        result = unit1_value * 231;
    }
    else if (unit1_label == "g" && unit2_label == "ml"){
        result = unit1_value * 3785.41;
    }
    else if (unit1_label == "g" && unit2_label == "l"){
        result = unit1_value * 3.7854;
    }
    else if (unit1_label == "g" && unit2_label == "tea"){
        result = unit1_value * 768;
    }
    else if (unit1_label == "g" && unit2_label == "table"){
        result = unit1_value * 256;
    }
    else if (unit1_label == "g" && unit2_label == "c"){
        result = unit1_value * 16;
    }
    else if (unit1_label == "g" && unit2_label == "q"){
        result = unit1_value * 4;
    }
    else if (unit1_label == "g" && unit2_label == "p"){
        result = unit1_value * 8;
    }
    else if (unit1_label == "q" && unit2_label == "mm3"){
        result = unit1_value * 946353;
    }
    else if (unit1_label == "q" && unit2_label == "cm3"){
        result = unit1_value * 946.353;
    }
    else if (unit1_label == "q" && unit2_label == "m3"){
        result = unit1_value * 0.000946;
    }
    else if (unit1_label == "q" && unit2_label == "km3"){
        result = unit1_value * 9.4635e-13;
    }
    else if (unit1_label == "q" && unit2_label == "cmile"){
        result = unit1_value * 2,2704e-13;
    }
    else if (unit1_label == "q" && unit2_label == "cyard"){
        result = unit1_value * 0.001238;
    }
    else if (unit1_label == "q" && unit2_label == "cfoot"){
        result = unit1_value * 0.03342;
    }
    else if (unit1_label == "q" && unit2_label == "cinch"){
        result = unit1_value * 57.75;
    }
    else if (unit1_label == "q" && unit2_label == "ml"){
        result = unit1_value * 946.353;
    }
    else if (unit1_label == "q" && unit2_label == "l"){
        result = unit1_value * 0.946353;
    }
    else if (unit1_label == "q" && unit2_label == "tea"){
        result = unit1_value * 192;
    }
    else if (unit1_label == "q" && unit2_label == "table"){
        result = unit1_value * 64;
    }
    else if (unit1_label == "q" && unit2_label == "c"){
        result = unit1_value * 4;
    }
    else if (unit1_label == "q" && unit2_label == "g"){
        result = unit1_value/4;
    }
    else if (unit1_label == "q" && unit2_label == "p"){
        result = unit1_value * 2;
    }
    else if (unit1_label == "p" && unit2_label == "mm3"){
        result = unit1_value * 473176;
    }
    else if (unit1_label == "p" && unit2_label == "cm3"){
        result = unit1_value * 473.176;
    }
    else if (unit1_label == "p" && unit2_label == "m3"){
        result = unit1_value * 0.000473;
    }
    else if (unit1_label == "p" && unit2_label == "km3"){
        result = unit1_value * 4.73176e-13;
    }
    else if (unit1_label == "p" && unit2_label == "cmile"){
        result = unit1_value * 1.1352e-13;
    }
    else if (unit1_label == "p" && unit2_label == "cyard"){
        result = unit1_value * 0.00062;
    }
    else if (unit1_label == "p" && unit2_label == "cfoot"){
        result = unit1_value * 0.01671;
    }
    else if (unit1_label == "p" && unit2_label == "cinch"){
        result = unit1_value * 28.875;
    }
    else if (unit1_label == "p" && unit2_label == "ml"){
        result = unit1_value * 473.1765;
    }
    else if (unit1_label == "p" && unit2_label == "l"){
        result = unit1_value * 0,473176;
    }
    else if (unit1_label == "p" && unit2_label == "tea"){
        result = unit1_value * 96;
    }
    else if (unit1_label == "p" && unit2_label == "table"){
        result = unit1_value * 32;
    }
    else if (unit1_label == "p" && unit2_label == "c"){
        result = unit1_value * 2;
    }
    else if (unit1_label == "p" && unit2_label == "g"){
        result = unit1_value/8;
    }
    else if (unit1_label == "p" && unit2_label == "q"){
        result = unit1_value/2;
    }

    document.getElementById("result").value = String(result);
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("volume1_val").value = '';
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }