function setResult1(){
    const num1_value = document.getElementById("square_peri").value;
    const result = num1_value * 4;

    document.getElementById("result1").value = String(result.toFixed(2));
    document.getElementById("result1").style.textAlign = "center";
    document.getElementById("square_peri").value = '';
}

function setResult2(){
    const num1_value = document.getElementById("square_area").value;
    const result = num1_value * num1_value;

    document.getElementById("result2").value = String(result.toFixed(2));
    document.getElementById("result2").style.textAlign = "center";
    document.getElementById("square_area").value = '';
}

function setResult3(){
    const num1_value = document.getElementById("rect_length").value;
    const num2_value = document.getElementById("rect_breadth").value;
    const result = (num1_value+num2_value) * 2;

    document.getElementById("result3").value = String(result.toFixed(2));
    document.getElementById("result3").style.textAlign = "center";
    document.getElementById("rect_length").value = '';
    document.getElementById("rect_breadth").value = '';
}

function setResult4(){
    const num1_value = document.getElementById("rect_length_area").value;
    const num2_value = document.getElementById("rect_breadth_area").value;
    const result = num1_value * num2_value;

    document.getElementById("result4").value = String(result.toFixed(2));
    document.getElementById("result4").style.textAlign = "center";
    document.getElementById("rect_length_area").value = '';
    document.getElementById("rect_breadth_area").value = '';
}

function setResult5(){
    const num1_value = document.getElementById("triangle_base").value;
    const num2_value = document.getElementById("triangle_height").value;
    const result = 0.5 * num1_value * num2_value;

    document.getElementById("result5").value = String(result.toFixed(1));
    document.getElementById("result5").style.textAlign = "center";
    document.getElementById("triangle_base").value = '';
    document.getElementById("triangle_height").value = '';
}

function setResult6(){
    const num1_value = document.getElementById("circle_radius").value;
    const result = Math.PI * num1_value * num1_value;

    document.getElementById("result6").value = String(result.toFixed(1));
    document.getElementById("result6").style.textAlign = "center";
    document.getElementById("circle_radius").value = '';
}

function setResult7(){
    const num1_value = document.getElementById("circle_radius_circum").value;
    const result = 2 * Math.PI * num1_value;

    document.getElementById("result7").value = String(result.toFixed(1));
    document.getElementById("result7").style.textAlign = "center";
    document.getElementById("circle_radius_circum").value = '';
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
}

