function setResult(){
    let bust_size = parseFloat(document.getElementById("bust_size").value);
    let waist_size = parseFloat(document.getElementById("waist_size").value);
    let high_hip_size = parseFloat(document.getElementById("high_hip_size").value);
    let hip_size = parseFloat(document.getElementById("hip_size").value);
    const select_unit_1 = document.getElementById("select_unit_1").value;
    const select_unit_2 = document.getElementById("select_unit_2").value;
    const select_unit_3 = document.getElementById("select_unit_3").value;
    const select_unit_4 = document.getElementById("select_unit_4").value;
    let body_type;

    if (select_unit_1 == "cm"){
        bust_size = bust_size * 0.393701;
    }

    if (select_unit_2 == "cm"){
       waist_size = waist_size * 0.393701;
    }

    if (select_unit_3 == "cm"){
        high_hip_size = high_hip_size * 0.393701;
    }

    if (select_unit_4 == "cm"){
        hip_size = hip_size * 0.393701;
    }

    const waist_hip_ratio = waist_size/hip_size;

    if (((bust_size-hip_size) <= 1) && ((hip_size-bust_size) <3.6) && ((bust_size-waist_size) >=9) || ((hip_size-waist_size)>=10)){
        body_type = 'Hourglass';
    }

    else if(((hip_size-bust_size) >= 3.6) && ((hip_size-bust_size) <10) && ((hip_size-waist_size) >=9) && ((high_hip_size/waist_size) <1.193)){
        body_type = 'Bottom Hourglass';
    }

    else if(((bust_size-hip_size) >1) && ((bust_size-hip_size) <10) && ((bust_size-waist_size) >=9)){
        body_type = 'Top Hourglass'
    }

    else if(((hip_size-bust_size) >2) && ((hip_size-waist_size) >=7) && ((high_hip_size/waist_size) >=1.193)){
        body_type = 'Spoon';
    }

    else if(((hip_size-bust_size) >=3.6) && ((hip_size-waist_size) <9)){
        body_type = 'Triangle';
    }

    else if(((bust_size-hip_size) >=3.6) && ((bust_size-waist_size) <9)){
        body_type = 'Inverted Triangle';
    }

    else if(((hip_size-bust_size) <3.6) && ((bust_size-hip_size) <3.6) && ((bust_size-waist_size) <9) && (hip_size-waist_size) <10){
        body_type = 'Rectangle';
    }

    document.getElementById("body_shape").innerHTML = `${body_type}`;
    document.getElementById("waist_hip_ratio").innerHTML = `${parseFloat(waist_hip_ratio.toFixed(2)).toLocaleString("en-US")}`;
    document.getElementById("bust_size").value = '';
    document.getElementById("waist_size").value = '';
    document.getElementById("high_hip_size").value = '';
    document.getElementById("hip_size").value = '';
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }