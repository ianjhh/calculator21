const lookup = {
    1: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    2: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    3: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    4: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    5: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    6: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    7: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    8: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    9: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    10: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    11: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    12: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
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

function setResult(){
    const start_month = parseInt(document.getElementById("start_month").value);
    const start_day = parseInt(document.getElementById("start_day").value);
    const start_year = parseInt(document.getElementById("start_year").value);
    const date = new Date();
    let end_month = date.getMonth()+1;
    const end_day = date.getDate();
    const end_year = date.getFullYear();
    let no_years = end_year - start_year;
    let real_end_month = end_month;
    let no_days = end_day - start_day;

    if (end_month - start_month < 0){
        no_years = no_years -1;
        end_month = end_month +12;
    }
    let no_months = end_month - start_month;

    if (no_days < 0){
        no_months = no_months -1;

        if (real_end_month == '1'){
            no_days = no_days + 31;
        }
        if (real_end_month == '2'){
            no_days = no_days + 31;
        }
        if (real_end_month == '3'){
            no_days = no_days + 28;
        }
        if (real_end_month == '4'){
            no_days = no_days + 31;
        }
        if (real_end_month == '5'){
            no_days = no_days + 30;
        }
        if (real_end_month == '6'){
            no_days = no_days + 31;
        }
        if (real_end_month == '7'){
            no_days = no_days + 30;
        }
        if (real_end_month == '8'){
            no_days = no_days + 31;
        }
        if (real_end_month == '9'){
            no_days = no_days + 31;
        }
        if (real_end_month == '10'){
            no_days = no_days + 30;
        }
        if (real_end_month == '11'){
            no_days = no_days + 31;
        }
        if (real_end_month == '12'){
            no_days = no_days + 30;
        }
    }

    document.getElementById("result_text").innerHTML = `<b>${no_years}</b> years and <b>${no_months}</b> months and <b>${no_days}</b> days`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }