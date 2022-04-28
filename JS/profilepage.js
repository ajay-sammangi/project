var access_token=localStorage.getItem("access-token");
if(access_token==null){
    window.location.href="/HTML/projectM-loginpage.html";
}
function signout(){
    localStorage.clear();
    window.location.href = "/HTML/projectM-loginpage.html";
}
