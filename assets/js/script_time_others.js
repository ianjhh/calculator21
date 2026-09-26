function setResult(){
    let start_hour = parseInt(document.getElementById("start_hour").value);
    let start_minute = parseInt(document.getElementById("start_minute").value);
    let end_hour = parseInt(document.getElementById("end_hour").value);
    let end_minute = parseInt(document.getElementById("end_minute").value);
    const am_pm1 = document.getElementById("am_pm1").value;
    const am_pm2 = document.getElementById("am_pm2").value;
    let min_diff=0, hour_diff=0;

    if (isNaN(start_hour)){
        start_hour=0;
    }
    if (isNaN(start_minute)){
        start_minute=0;
    }
    if (isNaN(end_hour)){
        end_hour=0;
    }
    if (isNaN(end_minute)){
        end_minute=0;
    }

    /* done */
    if (am_pm1 == 'am' && am_pm2 == 'pm'){
        end_hour+=12;
        min_diff+= (end_minute - start_minute);
        if (min_diff < 0){
            min_diff+=60;
            hour_diff-=1;
        }
        hour_diff+= (end_hour -  start_hour);
    }

    else if (am_pm1 == 'am' && am_pm2 == 'am'){
        if (end_hour - start_hour<0){
            hour_diff+=((12-start_hour) + (24 - end_hour));
        }

        if (end_minute - start_minute < 0){
            if (hour_diff == 0){
                hour_diff+=24;
            }
            hour_diff-=1;
            min_diff+=(60 + (end_minute-start_minute));
        }
    }

    /* done */
    else if (am_pm1 == 'pm' && am_pm2 == 'pm'){
        if (end_hour - start_hour<0){
            hour_diff+=((12-start_hour) + (24 - end_hour));
        }

        if (end_minute - start_minute < 0){
            if (hour_diff == 0){
                hour_diff+=24;
            }
            hour_diff-=1;
            min_diff+=(60 + (end_minute-start_minute));
        }
    }

    /* done */
    else if (am_pm1 == 'pm' && am_pm2 == 'am'){
        end_hour+=12;
        if (end_minute - start_minute < 0){
            min_diff+=(60 + (end_minute-start_minute));
            hour_diff-=1;
        }
        hour_diff+= (end_hour -  start_hour);
    }

    document.getElementById("result_text").innerHTML = `${hour_diff} hours ${min_diff} minutes`;
}

function hamburger_function() {
    var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }