var profile_details=localStorage.getItem("row_data");
var profile_details_object=(JSON.parse(profile_details));
console.log(profile_details_object);

document.getElementById("profileName").value=profile_details_object[0].name;
document.getElementById("Email").value=profile_details_object[0].email;
document.getElementById("Phone").value=profile_details_object[0].mobile;
// document.getElementById("Alternate_Phone").value=profile_details_object[0].name;
document.getElementById("Location").value=profile_details_object[0].location;
document.getElementById("Current_Company").value=profile_details_object[0].working_at;
// document.getElementById("Designation").value=profile_details_object[0].name;
// document.getElementById("Experience").value=profile_details_object[0].name;
document.getElementById("CCTC").value=profile_details_object[0].cctc;
document.getElementById("ECTC").value=profile_details_object[0].ectc;
document.getElementById("Notice_Period").value=profile_details_object[0].notice_period;
document.getElementById("content").value=profile_details_object[0].edu_experience;
  var content = CKEDITOR.instances['content'].getData();
document.getElementById("Passed_out_year").value=profile_details_object[0].passed_out_year;
document.getElementById("College").value=profile_details_object[0].college;
document.getElementById("Working_Experience").value=profile_details_object[0].years_of_exp;
//  var Working_Experience = CKEDITOR.instances['Working_Experience'].getData()=profile_details_object[0].name;
document.getElementById("Key Skills").value=profile_details_object[0].primary_skill;








 