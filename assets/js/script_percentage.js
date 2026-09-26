function setResult1(){
    const num1_value = document.getElementById("num1").value;
    const num2_value = document.getElementById("num2").value;
    const result = num1_value/num2_value * 100;

    document.getElementById("result1").value = String(result.toFixed(1)) + '%';
    document.getElementById("result1").style.textAlign = "center";
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
}

function setResult2(){
    const num1_value = document.getElementById("num1_2").value;
    const num2_value = document.getElementById("num2_2").value;
    const result = num1_value/100 * num2_value;

    document.getElementById("result2").value = String(result.toFixed(1));
    document.getElementById("result2").style.textAlign = "center";
    document.getElementById("num1_2").value = '';
    document.getElementById("num2_2").value = '';
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
}


