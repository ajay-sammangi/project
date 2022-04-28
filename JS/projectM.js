
function verify_details(){
    var email=document.getElementById("email_text");
    var email_value=email.value;
    var password=document.getElementById("password_text");
    var password_value=password.value;
    var error_email=document.getElementById("email_error");
    var error_password=document.getElementById("password_error");
    var error_details=document.getElementById("error_details");
    error_details.textContent="";

    // console.log(email_value);
    // console.log(password_value);
    if(email_value==""){
        error_email.textContent="*Enter Email";
        email.style.border = "2px solid Red";
    }else if(email_value!="" && password_value==""){
        email.style.border = "2px solid #d3d3d3";
        error_password.textContent="*Enter Password";
        password.style.border = "2px solid Red";
        error_email.textContent="";
    }else {
        error_password.textContent="";
        error_email.textContent="";
        email.style.border = "2px solid #d3d3d3";
        password.style.border = "2px solid #d3d3d3";
        var result_email=validate_email(email_value);
        var result_password=validate_password(password_value);
        if(result_email && result_password){
            const data={username: email_value, password: password_value};
            let url="http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/login";
            // console.log("true");
            try{
                fetch(url, {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(jsonData => {
                    // console.log('Success:', data);
                    if(jsonData.msg){
                        console.log(jsonData.msg);
                        error_details.textContent="*Invalid Credentials";
                        email.style.border = "2px solid Red";
                        password.style.border = "2px solid Red";
                    }
                    else{
                        console.log(jsonData);
                        // console.log("access_token:",jsonData.access_token);
                        localStorage.setItem("access-token",JSON.stringify(jsonData.access_token));
                        // console.log("refresh_token:",jsonData.refresh_token);
                        localStorage.setItem("refresh-token",JSON.stringify(jsonData.refresh_token));
                        window.location.href="/HTML/Profilepage.html";
                    }
                })
            }
            catch(error){
                console.error('Error:', error);
            };
        }else{
            // alert("Invalid details");
            error_details.textContent="*Invalid Credentials";
            email.style.border = "2px solid Red";
            password.style.border = "2px solid Red";
        }
    }
}

function view_password(){
    var password=document.getElementById("password_text");
    var change_image=document.getElementById("image_change");
    var x = document.getElementById("password_text");
    if (x.type === "password") {
        change_image.classList.remove("fa-eye-slash");
        change_image.classList.add("fa-eye");
        x.type = "text";
    } else {
        x.type = "password";
        change_image.classList.remove("fa-eye");
        change_image.classList.add("fa-eye-slash");
        
  }
}
function hide_password(){
    var change_image=document.getElementById("image_change");
    var x = document.getElementById("password_text");
    if (x.type === "password"){
        change_image.classList.remove("fa-eye-slash");
        change_image.classList.add("fa-eye");
        x.type = "text";
    } else {
        change_image.classList.remove("fa-eye");
        change_image.classList.add("fa-eye-slash");
        x.type = "password";
  }
} 


