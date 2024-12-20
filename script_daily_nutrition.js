let vita, vitb1, vitb2, vitb3, vitb5, vitb6, biotin, folate, vitb12, vitc, vitd, vitd_iu, carbo, fiber, protein, calcium, iron, potassium, zinc;

function setResult(){
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const is_pregnant = document.getElementById("pregnant").value;
    const is_lactating = document.getElementById("lactating").value;

    if (age == 'birthto6mo'){
        vita = 400;
        vitb1 = 0.2;
        vitb2 = 0.3;
        vitb3 = 2;
        vitb5 = 1.7;
        vitb6 = 0.1;
        vitb12 = 0.4;
        biotin = 5;
        folate = 65;
        vitc = 40;
        vitd = 10;
        vitd_iu = 400;
        carbo = 60;
        fiber = 0;
        protein = 9.1;
        calcium = 200;
        iron = 0.27;
        zinc = 2;
    }

    else if (age == '7to12mo'){
        vita = 500;
        vitb1 = 0.3;
        vitb2 = 0.4;
        vitb3 = 4;
        vitb5 = 1.8;
        vitb6 = 0.3;
        vitb12 = 0.5;
        biotin = 6;
        folate = 80;
        vitc = 50;
        vitd = 15;
        vitd_iu = 600;
        carbo = 95;
        fiber = 2;
        protein = 11;
        calcium = 260;
        iron = 11;
        zinc = 3;
    }

    else if (age == '1to3'){
        vita = 300;
        vitb1 = 0.5;
        vitb2 = 0.5;
        vitb3 = 6;
        vitb5 = 2;
        vitb6 = 0.5;
        vitb12 = 0.9;
        biotin = 8;
        folate = 150;
        vitc = 15;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 19;
        protein = 13;
        calcium = 700;
        iron = 7;
        zinc = 3;
    }

    else if (age == '4to8'){
        vita = 400;
        vitb1 = 0.6;
        vitb2 = 0.6;
        vitb3 = 8;
        vitb5 = 3;
        vitb6 = 0.6;
        vitb12 = 1.2;
        biotin = 12;
        folate = 200;
        vitc = 25;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 25;
        protein = 19;
        calcium = 1000;
        iron = 10;
        zinc = 5;
    }

    else if (age == '9to13' && gender=='male'){
        vita = 600;
        vitb1 = 0.9;
        vitb2 = 0.9;
        vitb3 = 12;
        vitb5 = 4;
        vitb6 = 1.0;
        vitb12 = 1.8;
        biotin = 20;
        folate = 300;
        vitc = 45;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 31;
        protein = 34;
        calcium = 1300;
        iron = 8;
        zinc = 8;
    }

    else if (age == '9to13' && gender=='female'){
        vita = 600;
        vitb1 = 0.9;
        vitb2 = 0.9;
        vitb3 = 12;
        vitb5 = 4;
        vitb6 = 1.0;
        vitb12 = 1.8;
        biotin = 20;
        folate = 300;
        vitc = 45;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 26;
        protein = 34;
        calcium = 1300;
        iron = 8;
        zinc = 8;
    }

    else if (age == '14to18' && gender=='male'){
        vita = 900;
        vitb1 = 1.2;
        vitb2 = 1.3;
        vitb3 = 16;
        vitb5 = 5;
        vitb6 = 1.3;
        vitb12 = 2.4;
        biotin = 25;
        folate = 400;
        vitc = 75;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 38;
        protein = 52;
        calcium = 1300;
        iron = 11;
        zinc = 11;
    }

    else if (age == '14to18' && gender=='female' && is_pregnant=='no' && is_lactating=='no'){
        vita = 700;
        vitb1 = 1.0;
        vitb2 = 1.0;
        vitb3 = 14;
        vitb5 = 5;
        vitb6 = 1.2;
        vitb12 = 2.4;
        biotin = 25;
        folate = 400;
        vitc = 65;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 29;
        protein = 46;
        calcium = 1300;
        iron = 15;
        zinc = 9;
    }

    else if (age == '14to18' && gender=='female' && is_pregnant=='yes'){
        vita = 750;
        vitb1 = 1.4;
        vitb2 = 1.4;
        vitb3 = 18;
        vitb5 = 6;
        vitb6 = 1.9;
        vitb12 = 2.6;
        biotin = 30;
        folate = 600;
        vitc = 80;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 29;
        protein = 60;
        calcium = 1300;
        iron = 27;
        zinc = 12;
    }

    else if (age == '14to18' && gender=='female' && is_lactating=='yes'){
        vita = 1200;
        vitb1 = 1.4;
        vitb2 = 1.6;
        vitb3 = 17;
        vitb5 = 7;
        vitb6 = 2.0;
        vitb12 = 2.8;
        biotin = 35;
        folate = 500;
        vitc = 115;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 29;
        protein = 63;
        calcium = 1300;
        iron = 10;
        zinc = 13;
    }

    else if (age == '19to50' && gender=='male'){
        vita = 900;
        vitb1 = 1.2;
        vitb2 = 1.3;
        vitb3 = 16;
        vitb5 = 5;
        vitb6 = 1.3;
        vitb12 = 2.4;
        biotin = 30;
        folate = 400;
        vitc = 90;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 31;
        protein = 56;
        calcium = 1000;
        iron = 8;
        zinc = 11;
    }

    else if (age == '19to50' && gender=='female' && is_pregnant=='no' && is_lactating=='no'){
        vita = 700;
        vitb1 = 1.1;
        vitb2 = 1.1;
        vitb3 = 14;
        vitb5 = 5;
        vitb6 = 1.3;
        vitb12 = 2.4;
        biotin = 30;
        folate = 400;
        vitc = 75;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 25;
        protein = 46;
        calcium = 1000;
        iron = 18;
        zinc = 8;
    }

    else if (age == '19to50' && gender=='female' && is_pregnant=='yes'){
        vita = 770;
        vitb1 = 1.4;
        vitb2 = 1.4;
        vitb3 = 18;
        vitb5 = 6;
        vitb6 = 1.9;
        vitb12 = 2.6;
        biotin = 30;
        folate = 600;
        vitc = 85;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 25;
        protein = 60;
        calcium = 1000;
        iron = 27;
        zinc = 11;
    }

    else if (age == '19to50' && gender=='female' && is_lactating=='yes'){
        vita = 1300;
        vitb1 = 1.4;
        vitb2 = 1.6;
        vitb3 = 17;
        vitb5 = 7;
        vitb6 = 2.0;
        vitb12 = 2.8;
        biotin = 35;
        folate = 500;
        vitc = 120;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 25;
        protein = 63;
        calcium = 1000;
        iron = 9;
        zinc = 12;
    }

    else if (age == '51plus' && gender=='male'){
        vita = 900;
        vitb1 = 1.2;
        vitb2 = 1.3;
        vitb3 = 16;
        vitb5 = 5;
        vitb6 = 1.7;
        vitb12 = 2.4;
        biotin = 30;
        folate = 400;
        vitc = 90;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 28;
        protein = 56;
        calcium = 1000;
        iron = 8;
        zinc = 11;
    }

    else if (age == '51plus' && gender=='female'){
        vita = 700;
        vitb1 = 1.1;
        vitb2 = 1.1;
        vitb3 = 14;
        vitb5 = 5;
        vitb6 = 1.5;
        vitb12 = 2.4;
        biotin = 30;
        folate = 400;
        vitc = 75;
        vitd = 15;
        vitd_iu = 600;
        carbo = 130;
        fiber = 22;
        protein = 46;
        calcium = 1200;
        iron = 8;
        zinc = 8;
    }

    else if (age == '70plus' && gender=='male'){
        vita = 900;
        vitb1 = 1.2;
        vitb2 = 1.3;
        vitb3 = 16;
        vitb5 = 5;
        vitb6 = 1.7;
        vitb12 = 2.4;
        biotin = 30;
        folate = 400;
        vitc = 90;
        vitd = 20;
        vitd_iu = 800;
        carbo = 130;
        fiber = 22;
        protein = 56;
        calcium = 1200;
        iron = 8;
        zinc = 11;
    }

    else if (age == '70plus' && gender=='female'){
        vita = 700;
        vitb1 = 1.1;
        vitb2 = 1.1;
        vitb3 = 14;
        vitb5 = 5;
        vitb6 = 1.5;
        vitb12 = 2.4;
        biotin = 30;
        folate = 400;
        vitc = 75;
        vitd = 20;
        vitd_iu = 800;
        carbo = 130;
        fiber = 22;
        protein = 46;
        calcium = 1200;
        iron = 8;
        zinc = 8;
    }
    let value_list = [vita, vitb1, vitb2, vitb3, vitb5, vitb6, vitb12, biotin, folate, vitc, vitd, vitd_iu, carbo, fiber, protein, calcium, iron, zinc];
    let nutrition_list = ['Vitamin A', 'Vitamin B1', 'Vitamin B2', 'Vitamin B3', 'Vitamin B5', 'Vitamin B6', 'Vitamin B12', 'Biotin', 'Folic Acid', 'Vitamin C', 'Vitamin D',
    'Carbohydrate', 'Fiber', 'Protein', 'Calcium', 'Iron', 'Zinc']
    let result = "<table border='1'>";

    result+= `<tr><th>Vitamin A</th><td>${vita} mcg RAE</td></tr>`;
    result+= `<tr><th>Vitamin B1</th><td>${vitb1} mg</td></tr>`;
    result+= `<tr><th>Vitamin B2</th><td>${vitb2} mg</td></tr>`;
    result+= `<tr><th>Vitamin B3</th><td>${vitb3} mg NE</td></tr>`;
    result+= `<tr><th>Vitamin B5</th><td>${vitb5} mg</td></tr>`;
    result+= `<tr><th>Vitamin B6</th><td>${vitb6} mg</td></tr>`;
    result+= `<tr><th>Vitamin B12</th><td>${vitb12} mcg</td></tr>`;
    result+= `<tr><th>Biotin</th><td>${biotin} mcg</td></tr>`;
    result+= `<tr><th>Folic Acid</th><td>${folate} mcg DFE</td></tr>`;
    result+= `<tr><th>Vitamin C</th><td>${vitc} mg</td></tr>`;
    result+= `<tr><th>Vitamin D</th><td>${vitd} mcg (${vitd_iu} IU)</td></tr>`;
    result+= `<tr><th>Carbohydrate</th><td>${carbo} g</td></tr>`;
    result+= `<tr><th>Fiber</th><td>${fiber} g</td></tr>`;
    result+= `<tr><th>Protein</th><td>${protein} g</td></tr>`;
    result+= `<tr><th>Calcium</th><td>${calcium} mg</td></tr>`;
    result+= `<tr><th>Iron</th><td>${iron} mg</td></tr>`;
    result+= `<tr><th>Zinc</th><td>${zinc} mg</td></tr>`;

    result+= "</table>";
    document.getElementById("result_table").innerHTML = `${result}`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }