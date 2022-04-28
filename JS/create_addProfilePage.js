document.addEventListener("DOMContentLoaded", function (event) {
  //     let name=document.getElementById("Name").value;
  //     let Email=document.getElementById("Email").value;
  //     let Phone_number=document.getElementById("Phone").value;
  //     let Alternate_number=document.getElementById("Alternate_Phone").value;
  //     let location=document.getElementById("Location").value;
  //     let current_company=document.getElementById("Current_Company").value;
  //     let designation=document.getElementById("Designation").value;
  //     let experience=document.getElementById("Experience").value;
  //     let cctc=document.getElementById("CCTC").value;
  //     let ectc=document.getElementById("ECTC").value;
  //     let notice_period=document.getElementById("Notice_Period").value;
  //     let content=document.getElementById("content").value;
  //     let Passed_out_year=document.getElementById("Passed_out_year").value;
  //     let college=document.getElementById("College").value;
  //     let Working_Experience=document.getElementById("Working_Experience").value;
  //     let Notice_Period=document.getElementById("Notice_Period").value;
  

    
// you can use javascript pdf library like this one (i'm using pdf.js) from this link : https://mozilla.github.io/pdf.js/examples/index.html#interactive-examples

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];
// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

$("#myPdf").on("change", function(e){
	var file = e.target.files[0]
	if(file.type == "application/pdf"){
		var fileReader = new FileReader();  
		fileReader.onload = function() {
			var pdfData = new Uint8Array(this.result);
			// Using DocumentInitParameters object to load binary data.
			var loadingTask = pdfjsLib.getDocument({data: pdfData});
			loadingTask.promise.then(function(pdf) {
			  console.log('PDF loaded');
			  
			  // Fetch the first page
			  var pageNumber = 1;
			  pdf.getPage(pageNumber).then(function(page) {
				console.log('Page loaded');
				
				var scale = 2.5;
				var viewport = page.getViewport({scale: scale});

				// Prepare canvas using PDF page dimensions
				var canvas = $("#pdfViewer")[0];
				var context = canvas.getContext('2d');
				canvas.height = (viewport.height);
				canvas.width = viewport.width;
                // canvas.overflow= auto;

				// Render PDF page into canvas context
				var renderContext = {
				  canvasContext: context,
				  viewport: viewport
				};
				var renderTask = page.render(renderContext);
				renderTask.promise.then(function () {
				  console.log('Page rendered');
				});
			  });
			}, function (reason) {
			  // PDF loading error
			  console.error(reason);
			});
		};
		fileReader.readAsArrayBuffer(file);
	}
});


  });  

function save_profile() {
  console.log("save started");
  let name = document.getElementById("Name").value;
  let Email = document.getElementById("Email").value;
  let Phone_number = document.getElementById("Phone").value;
  let Alternate_Phone = document.getElementById("Alternate_Phone").value;
  let location = document.getElementById("Location").value;
  let current_company = document.getElementById("Current_Company").value;
  let designation = document.getElementById("Designation").value;
  let experience = document.getElementById("Experience").value;
  let cctc = document.getElementById("CCTC").value;
  let ectc = document.getElementById("ECTC").value;
  let notice_period = document.getElementById("Notice_Period").value;
//   let content = document.getElementById("content").value;
    var content = CKEDITOR.instances['content'].getData();
  let Passed_out_year = document.getElementById("Passed_out_year").value;
  let college = document.getElementById("College").value;
//   let Working_Experience = document.getElementById("Working_Experience").value;
    var Working_Experience = CKEDITOR.instances['Working_Experience'].getData();
  let Key_skills = document.getElementById("Key Skills").value;

  console.log(content);
  console.log(Working_Experience);

  let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/add_profile";
  data = {
    alternate_phone: Alternate_Phone,
    cctc: cctc,
    college: college,
    ectc: ectc,
    edu_experience: content,
    email: Email,
    image_url: "",
    job_role: designation,
    location: location,
    mobile: Phone_number,
    name: name,
    notice_period: notice_period,
    passed_out_year: Passed_out_year,
    primary_skill: Key_skills,
    profile_id: 0,
    profile_url: "",
    secondary_skill: "",
    work_experience: Working_Experience,
    working_at: current_company,
    years_of_exp: experience,
  };
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };
  console.log(data);
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
    });
  console.log("save finished");

  CKEDITOR.replace('content', {
    // fullPage: true,
    extraPlugins: 'docprops',
    // Disable content filtering because if you use full page mode, you probably
    // want to  freely enter any HTML content in source mode without any limitations.
    editorplaceholder: '234567',
    // allowedContent: true,
    // height: 320,
    // removeButtons: 'PasteFromWord'
  });



}
