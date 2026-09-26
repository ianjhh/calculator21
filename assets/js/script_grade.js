function setResult(){
    const table_calc = document.getElementById("table_calc");
    const input_name = document.getElementsByClassName("td_name");
    const input_grade = document.getElementsByClassName("td_grade");
    const input_weight = document.getElementsByClassName("td_weight");

    /* build amortization schedule */
    let result = "<table border='1'><tr><th>Name</th><th>Grade</th>" + "<th>Weight</th></tr>";
    let total_weight = 0, total_weighted_grade = 0, grade_letter, gpa;

    for (let i=0; i<table_calc.rows.length-1; i++){
        let name_value = input_name[i].value;
        let grade_value = parseFloat(input_grade[i].value);
        let weight_value = parseFloat(input_weight[i].value);
        if (isNaN(grade_value) || isNaN(weight_value)){
        }
        else if (grade_value && weight_value){
            result+= "<tr><td>" + name_value + "</td>";
            result += "<td align='right'>" + grade_value + "</td>";
            result += "<td align='right'>" + weight_value + "%</td>";
            result+= "</tr>";
            total_weighted_grade+= (grade_value * weight_value);
            total_weight+= weight_value;
        }
    }
    let average_grade = total_weighted_grade/total_weight;

    if (average_grade >= 97){
        grade_letter ='A+';
        gpa = 4.3;
    }
    else if (average_grade >=93 && average_grade <=96){
        grade_letter ='A';
        gpa = 4;
    }
    else if (average_grade >=90 && average_grade <=92){
        grade_letter ='A-';
        gpa = 3.7;
    }
    else if (average_grade >=87 && average_grade <=89){
        grade_letter ='B+';
        gpa = 3.3;
    }
    else if (average_grade >=83 && average_grade <=86){
        grade_letter ='B';
        gpa = 3;
    }
    else if (average_grade >=80 && average_grade <=82){
        grade_letter ='B-';
        gpa = 2.7;
    }
    else if (average_grade >=77 && average_grade <=79){
        grade_letter ='C+';
        gpa = 2.3;
    }
    else if (average_grade >=73 && average_grade <=76){
        grade_letter ='C';
        gpa = 2.0;
    }
    else if (average_grade >=70 && average_grade <=72){
        grade_letter ='C-';
        gpa = 1.7;
    }
    else if (average_grade >=67 && average_grade <=69){
        grade_letter ='D+';
        gpa = 1.3;
    }
    else if (average_grade >=63 && average_grade <=66){
        grade_letter ='D';
        gpa = 1.0;
    }
    else if (average_grade >=60 && average_grade <=62){
        grade_letter ='D-';
        gpa = 0.7;
    }
    else if (average_grade <=59){
        grade_letter ='F';
        gpa = 0.0;
    }
    result+= `<tr><td>Total Weight:</td><td></td><td align='right'>${parseFloat(total_weight.toFixed(2)).toLocaleString("en-US")}%</td></tr>`;
    result+= `<tr><td>Average Grade:</td><td colspan='2' align='center'>${parseFloat(average_grade.toFixed(2)).toLocaleString("en-US")}</td></tr>`;
    result+= "</table>";

    let result_table = document.getElementById("result_table");
    result_table.innerHTML = result;

    document.getElementById("result_text_1").innerHTML = `&nbsp;&nbsp;&nbsp;${parseFloat(average_grade.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("result_text_2").innerHTML = `&nbsp;&nbsp;&nbsp;${grade_letter}`;
    document.getElementById("result_text_3").innerHTML = `&nbsp;&nbsp;&nbsp;${gpa.toFixed(1)}`;
}

function add_row_func(){
    const table = document.getElementById("table_calc");

    for (let i=0; i<3; i++){
        const rows = table.rows.length;
        const new_rows = table.insertRow(rows);
        const td1 = new_rows.insertCell(0);
        const td2 = new_rows.insertCell(1);
        const td3 = new_rows.insertCell(2);
        const input1 = document.createElement("input");
        const input2 = document.createElement("input");
        const input3 = document.createElement("input");
        input1.type = 'text';
        input2.type = 'number';
        input3.type = 'number';
        input1.classList.add("td_name");
        input2.classList.add("td_grade");
        input3.classList.add("td_weight");
        td1.appendChild(input1);
        td2.appendChild(input2);
        td3.appendChild(input3);
    }
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