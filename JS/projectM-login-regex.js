const email_regex=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const password_regex=/^(?=.*[a-z])(?=.*[a-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}/;

const firstName_regex = /^[a-zA-Z][a-zA-Z .,'-]*$/;

const date_regex=/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;

const pancard_regex=/^[A-Z]{5}\d{4}[A-Z]$/;

const mobile_regex=/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

const address_regex=/^[a-zA-Z0-9\s,.'-]{3,}$/;

const pincode_regex=/^[1-9][0-9]{5}$/;

const url_regex=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

const number_regex=/^-?[0-9][0-9,\.]+$/;


//firstname
function validate_name(name_value){
    var result_firstName = firstName_regex.test(name_value);
    if(result_firstName){
        return true;

    }
    else{
        return false;
    }
}

//date
function validate_date(date_value){
    var result_date= date_value.match(date_regex);
    if(result_date){
        return true;
    }
    else{
        return false;
    }
}

//email
function validate_email(email_value){
    var result_email= email_regex.test(email_value);
    if(result_email){
        return true;
    }
    else{
        return false;
    }
}

//password
function validate_password(password_value){
    var result_password= password_regex.test(password_value);
    if(result_password){
        return true;
    }
    else{
        return false;
    }
}

//pancard
function validate_pancard(pancard_value){
    var result_pancard= pancard_regex.test(pancard_value);
    if(result_pancard){
        return true;
    }
    else{
        return false;
    }
}


//mobile
function validate_mobile(mobile_value){
    var result_mobile= mobile_regex.test(mobile_value);
    if(result_mobile){
        return true;
    }
    else{
        return false;
    }
}

//address
function validate_address(address_value){
    var result_address= address_regex.test(address_value);
    if(result_address){
        return true;
    }
    else{
        return false;
    }
}

//pincode
function validate_pincode(pincode_value){
    var result_pincode= pincode_regex.test(pincode_value);
    if(result_pincode){
        return true;
    }
    else{
        return false;
    }
}

//url
function validate_url(url_value){
    var result_url= url_regex.test(url_value);
    if(result_url){
        return true;
    }
    else{
        return false;
    }
}

//number
function validate_number(number_value){
    var result_number= number_regex.test(number_value);
    if(result_number){
        return true;
    }
    else{
        return false;
    }
}


function validate(email_value,password_value){
    // console.log(email_value);
    // console.log(password_value);
    result_email=validate_email(email_value);
    result_password=validate_password(password_value);
    if(result_email && result_password){
        return true;
    }else{
        return false;
    }    
}