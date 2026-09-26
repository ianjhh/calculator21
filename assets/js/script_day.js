const lookup = {
    'jan': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    'feb': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    'mar': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    'apr': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    'may': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    'jun': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    'jul': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    'aug': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    'sep': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    'oct': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    'nov': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    'dec': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
};

function createOption(option_value, option_label) {
    var option = document.createElement("option");
    option.setAttribute("value", option_value);
    option.innerHTML = option_label;
    return option;
}

function changeStartMonth(){
    const month = document.getElementById("start_month").value;
    const select_day = document.getElementById("start_day");
    select_day.options.length = 0;

    for (var i=0; i<lookup[month].length; i++){
        select_day.options.add(createOption(lookup[month][i], lookup[month][i]));
    }
}

function changeEndMonth(){
    const month = document.getElementById("end_month").value;
    const select_day = document.getElementById("end_day");
    select_day.options.length = 0;

    for (var i=0; i<lookup[month].length; i++){
        select_day.options.add(createOption(lookup[month][i], lookup[month][i]));
    }
}

function setResult(){
    const start_month = document.getElementById("start_month").value;
    const start_day = parseInt(document.getElementById("start_day").value);
    const start_year = parseInt(document.getElementById("start_year").value);
    const end_month = document.getElementById("end_month").value;
    const end_day = parseInt(document.getElementById("end_day").value);
    const end_year = parseInt(document.getElementById("end_year").value);

    let date_start = new Date(`${start_month}/${start_day}/${start_year}`);
    let date_end = new Date(`${end_month}/${end_day}/${end_year}`);
    let difference = date_end.getTime() - date_start.getTime();
    let days = Math.ceil(difference/(1000*3600*24));

    document.getElementById("result").value = String(days);
    document.getElementById("result").style.textAlign = "center";

    result_years = Math.floor(days * 0.0027379);
    result_months = Math.floor(days % 365.2425/30);
    document.getElementById("result_text").innerHTML = `<b>Which is:</b><br>${result_years} years and ${result_months} months`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }