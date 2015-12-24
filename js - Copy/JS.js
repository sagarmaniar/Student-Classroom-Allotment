$(document).on("click", ".courseDisplay", function (e) {
jQuery('#portDisp').html('');
    
	$.ajax({
		'url': 'php/comm.php?type="courseDisp"',
		success: function (h) {
			var txt = "<div  style=\"width: 100%; float:left; border:1px  ;  padding: 1em;\"> <table   class=\"table-hover table-condensed table-responsive\" style=\"width: 100%; table-layout:fixed;border-spacing: 5px;\"><thead><tr><th><center>Course Id</center></th><th><center>Course Name<center></th><th><center>Course Credits<center></th><th><center>Course StartDate<center></th><th><center>Course EndDate<center></th><th><center>Course Prerequisites<center></th><th><center>Max Registrations<center></th></tr></thead><tbody>";
			cousrses_name = jQuery.parseJSON(h);
			for (var i = 0; i < cousrses_name.length; i++) {
				txt += "<tr  align=\"left\"><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + cousrses_name[i].Course_Id + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + cousrses_name[i].Course_Name + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + cousrses_name[i].Course_Credits + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + cousrses_name[i].Course_StartDate + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + cousrses_name[i].Course_EndDate + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + cousrses_name[i].Course_Prerequisites + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + cousrses_name[i].Max_Registrations + "</button></td></tr>"

			}
			if (txt != "") {

				txt += "</tbody></table></div>";
				
				$("#portDisp").append(txt);
			}


		}
	});


});
$(document).on("click", "#login", function (e) {
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) { 
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            
           
            logUserName = $("input#email").val();
            
            var passw = $("input#password").val();
            
            $.ajax({
                url: "/php/login.php",
                type: "POST",
                data: {
                    uname: logUserName,
                    passwo:passw
                    
                },
                cache: false,
                success: function(h) {
                    // Success message
                     jsonInd= jQuery.parseJSON(h);
                    var logintype=0;
                    if (jsonInd.length!=0){
                        logintype=jsonInd[0].loginFlag;
                         $("#portfolioModal1").modal("show");
                    }
                    else{
                         $("#portfolioModal1").modal("hide");
                        showalert("choosle","alert-danger");
                    }
                    
                if(logintype==1){
                    showStudentData(jsonInd[0].loginUsername);
                }
                else if(logintype==2){
                    showFacultytData(jsonInd[0].loginUsername);
                }
                else if(logintype==3){
                    showAdminData(jsonInd[0].loginUsername);
                }
                  
                    
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
 });
$(document).on("click", "#StudSearchBut", function (e) {
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            
           
            var searchw = $("input#StuSearch").val();
            
            var typeserch = SearchCriteria;
            
            $.ajax({
                url: "/php/deptSerach.php",
                type: "POST",
                data: {
                    srch: searchw,
                    typesearch:typeserch
                    
                },
                cache: false,
                success: function(h) {
			var txt = "<h2>Student Profile</h2><hr class=\"star-primary\"><button type=\"submit\" id=\"bookdetails\" class=\"btn btn-xl\" style=\"float:left;\" >Book Classroom</button><button type=\"submit\" id=\"getview\" class=\"btn btn-xl\" style=\"float:right;\" >View Current Allocation</button><div class=\"btn-group\"><button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\">Type<span class=\"caret\"></span></button><ul class=\"dropdown-menu selected\" role=\"menu\" aria-labelledby=\"dLabel\"><li role=\"presentation\"><a href=\"#\" property=\"Gender\" >Gender</a></li><li role=\"presentation\"><a href=\"#\" property=\"Student_Name\">Name</a></li><li role=\"presentation\"><a href=\"#\" property=\"Address\">Address</a></li><li role=\"presentation\"><a href=\"#\" property=\"Student_Id\">ID</a></li></ul></div><form role=\"form\" name=\"stuSerca\" id=\"StuSearching\" ><fieldset><div class=\"form-group\"><input class=\"form-control\"  name=\"Search\" id=\"StuSearch\"  autofocus></div><div class=\"form-group\"></div><button type=\"submit\" id=\"StudSearchBut\" class=\"btn btn-xl\" >Search</button></fieldset></form><div> <table   class=\"table-hover table-condensed \" ><thead><tr><th><center>Student Id</center></th><th><center>Student Name<center></th><th><center>Date of Birth<center></th><th><center>Gender<center></th><th><center>Address<center></th><th><center>Contact<center></th><th><center>Email Address<center></th></tr></thead><tbody>";
			student_info = jQuery.parseJSON(h);
			for (var i = 0; i < student_info.length; i++) {
				txt += "   <tr  class=\"col-md-14\" align=\"left\"><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-xs-1 \"  >" + student_info[i].Student_Id + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 \"  >" + student_info[i].Student_Name + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 \"  >" + student_info[i].Date_of_Birth + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-1 \"  >" + student_info[i].Gender + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-4 \"  >" + student_info[i].Address + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 \"  >" + student_info[i].Contact + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 \"  >" + student_info[i].emailAddress + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 deledit \" property=\""+student_info[i].Student_Id+"_"+student_info[i].Student_Name+"_"+student_info[i].Date_of_Birth+"_"+student_info[i].Gender+"_"+student_info[i].Address+"_"+student_info[i].Contact+"_"+student_info[i].emailAddress+"\">Edit/Delete</button></td></tr>"

			}
			if (txt != "") {

				txt += "</tbody></table></div>";
				jQuery('#studentDetails').html('');
				$("#studentDetails").append(txt);
			}

                
    }
            })}
        });

    
 });
$(document).on("click", ".selected li a", function (e) {
//$(".selected li a").click(function () {
	SearchCriteria = $(this).attr("property");
    //console.log(place_hospDiag);
});
$(document).on("click", "#gobackLogin", function (e) {
//$(".selected li a").click(function () {
	$("#portfolioModal1").modal("show");
    //console.log(place_hospDiag);
});
$(document).on("click", "#getview", function (e) {
//$(".selected li a").click(function () {
	$("#portfolioModal3").modal("show");
     showViewData();
    //console.log(place_hospDiag);
});
$(document).on("click", ".deledit", function (e) {
    jQuery('#studentEditDelete').html('');
    var stdid = $(this).attr("property").split("_");
    var id =stdid[0];
    var name=stdid[1];
    var dob=stdid[2];
    var gender=stdid[3];
    var adress=stdid[4];
    var contact=stdid[5];
    var email=stdid[6];
    var txt="<form role=\"form\" name=\"delit\" id=\"deledit\" ><fieldset><div class=\"form-group\">Student ID<input class=\"form-control\" value="+id+" id=\"id\"  autofocus></div><div class=\"form-group\">Student Name<input class=\"form-control\" value=\""+name+"\" id=\"name\"  autofocus></div><div class=\"form-group\">Gender<input class=\"form-control\" value=\""+gender+"\" id=\"gender\"  autofocus></div><div class=\"form-group\">Address<input class=\"form-control\" value=\""+adress+"\" id=\"address\"  autofocus></div><div class=\"form-group\">Date Of Birth<input class=\"form-control\" value="+dob+" id=\"dob\"  autofocus></div><div class=\"form-group\">Contact<input class=\"form-control\" value=\""+contact+"\" id=\"contact\"  autofocus></div><!--<div class=\"form-group\">E-Mail<input class=\"form-control\" value=\""+email+"\" id=\"email\"  autofocus></div> Change this to a button or input when using this as a form --><button type=\"submit\" class=\"btn btn-default editStudent\" id=\"edit\" property=\"editit_"+id+"\"><i class=\"fa fa-times\"></i> Update</button><button type=\"submit\" class=\"btn btn-default editStudent\" id=\"delete\" property=\"deleteit_"+id+"\"><i class=\"fa fa-times\"></i> Delete</button></fieldset></form>";
    
    
    jQuery('#studentEditDelete').html('');
    $("#studentEditDelete").append(txt);
    $("#portfolioModal2").modal("show");
    
});
$(document).on("click", ".editStudent", function (e) {
//$(".selected li a").click(function () {
	var whole = $(this).attr("property").split("_");
    var action=whole[0];
    var originalID=whole[1];
   /* 
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            */
           
            var ide = $("input#id").val();
            var stuname = $("input#name").val();
            var stugend = $("input#gender").val();
            var stuadress = $("input#address").val();
            var studib = $("input#dob").val();
            var stucontact = $("input#contact").val();
          //  var stuemail = $("input#email").val();
           
            
            
            $.ajax({
                'url': 'php/editdelete.php?sid='+ide+'&sname=' + stuname + '&sgend=' + stugend + '&sadd=' + stuadress + '&sdob=' + studib + '&scontact=' + stucontact + '&sorgid=' + originalID + '&saction=' + action + '',
                /*url: "/php/editdelete.php",
                type: "POST",
                data: {
                    sid: ide,
                    sname:stuname,
                    sgend:stugend,
                    sadd:stuadress,
                    sdob:studib,
                    scontact:stucontact,
                   // semail:stuemail,
                    sorgid:originalID,
                    saction:action
                    
                },*/
                cache: false,
                success: function(h) {
                   // console.log(h);
			var suc = "<h4>Success</h4>";
			var fail = "<h4>Failed</h4>";
			var status = jQuery.parseJSON(h);
                    var txt;
			if(status){
                txt=suc;
            }
            else{txt=fail;
            }
			if (txt != "") {

				//txt += "</tbody></table></div>";
				jQuery('#studentEditDelete').html('');
                
				$("#studentEditDelete").append(txt);
			}

                
    }
            });//}
        //});

    
    
    
   
    //console.log(place_hospDiag);
});
$(document).on("click", "#bookdetails", function (e) {
//$(".selected li a").click(function () {
	$("#portfolioModal4").modal("show");
     
    //console.log(place_hospDiag);
});
$(document).on("click", ".availSlot li a", function (e) {
//$(".selected li a").click(function () {
	rommno = $(this).attr("property");
     showBookData();
    //console.log(place_hospDiag);
});
$(document).on("click", ".slotselected li a", function (e) {
//$(".selected li a").click(function () {
	slotnoo = $(this).attr("property");
    showBookData();
     
    //console.log(place_hospDiag);
});
$(document).on("click", ".selectedDept li a", function (e) {
//$(".selected li a").click(function () {
	booksDeptID = $(this).attr("property");
    showBookData();
     
    //console.log(place_hospDiag);
});
$(document).on("click", ".selectedCourse li a", function (e) {
//$(".selected li a").click(function () {
	BooksCourseID = $(this).attr("property");
    showBookData();
     
    //console.log(place_hospDiag);
});
$(document).on("click", "#insertbookrecords", function (e) {
//$(".selected li a").click(function () {
	insertSlot();
     
    //console.log(place_hospDiag);
});
$(document).on("click", ".dropdown-menu li a", function (e) {
    
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});
$(document).on("click", ".refreshloginhome", function (e) {
//$(".selected li a").click(function () {
	showAdminData(logUserName);
     
    //console.log(place_hospDiag);
});
function showBookData(){
    jQuery('#bookrooms').html('');
    
    
	$.ajax({
		'url': 'php/department.php?type="level3"&rono=\"' + rommno + '\"',
		success: function (h) {
			var txt = "<br><div class=\"btn-group\"><button style=\"float:right;\" type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\">Slot Available<span class=\"caret\"></span></button><ul class=\"dropdown-menu slotselected\" role=\"menu\" aria-labelledby=\"dLabel\">";
			slot_info = jQuery.parseJSON(h);
			for (var i = 0; i < slot_info.length; i++) {
				txt += " <li role=\"presentation\"><a href=\"#\" property=\""+slot_info[i].slot_no+"\" >"+slot_info[i].slot_no+"</a></li>"

			}
			if (txt != "") {

				txt += "</ul></div>";
				jQuery('#bookrooms').html('');
				$("#bookrooms").append(txt);
			}


		}
	});
    
  
}
function showViewData(){
    jQuery('#viewData').html('');
    
	$.ajax({
		'url': 'php/department.php?type="level2"',
		success: function (h) {
			var txt = "<h2>Current Allocation</h2><hr class=\"star-primary\"><div  style=\"width: 100%; float:left; border:1px  ;  padding: 1em;\"> <table   class=\"table-hover table-condensed table-responsive\" style=\"width: 100%; table-layout:fixed;border-spacing: 5px;\"><thead><tr><th><center>Room_No</center></th><th><center>Course_Id<center></th><th><center>Slot_No<center></th><th><center>Number of Students<center></th></tr></thead><tbody>";
			view_info = jQuery.parseJSON(h);
			for (var i = 0; i < view_info.length; i++) {
				txt += " <tr  align=\"left\"><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + view_info[i].Room_No + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + view_info[i].Course_Id + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + view_info[i].Slot_No + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + view_info[i].Number_of_Students + "</button></td></tr>"

			}
			if (txt != "") {

				txt += "</tbody></table></div>";
				jQuery('#viewData').html('');
				$("#viewData").append(txt);
			}


		}
	});
    
    /* deptdeatils 
    <h2>Department Profile</h2><hr class=\"star-primary\"><div  style=\"width: 100%; float:left; border:1px  ;  padding: 1em;\"> <table   class=\"table-hover table-condensed table-responsive\" style=\"width: 100%; table-layout:fixed;border-spacing: 5px;\"><thead><tr><th><center>Dept Id</center></th><th><center>Dept Name<center></th><th><center>Dept Phone Number<center></th><th><center>Email Address<center></th></tr></thead><tbody>
    <tr  align=\"left\"><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + dept_info[i].Dept_Id + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + dept_info[i].Dept_Name + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + dept_info[i].Dept_PhoneNum + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + dept_info[i].depEmailAddress + "</button></td></tr>
    
    
    */
}
function insertSlot(){
   // jQuery('#bookrooms').html('');
    
    
	$.ajax({
		'url': 'php/department.php?type="level4"&rono1=\"' + rommno + '\"&sono=\"' + slotnoo + '\"&depID=\"' + booksDeptID + '\"&courseid=\"' + BooksCourseID + '\"',
		success: function (h) {
			var suc = "<h4>Successfull</h4>";
			var fail = "<h4>Failed</h4>";
			status = jQuery.parseJSON(h);
                    var txt;
			if(status){
                txt=suc;
            }
            else{txt=fail
            }
			
			if (txt != "") {

				
				jQuery('#bookrooms').html('');
				$("#bookrooms").append(txt);
			}


		}
	});
    
  
}
function showalert(message,alerttype) {

    $('#logIN').append('<div id="alertdiv" class="alert ' +  alerttype + '"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')

    setTimeout(function() { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs


      $("#alertdiv").remove();

    }, 5000);
  }
function showStudentData(username){
     jQuery('#studentDetails').html('');
    
	$.ajax({
		'url': 'php/student.php?type="level1"&uid=\"' + username + '\"',
		success: function (h) {
			var txt = "<h2>Student Profile</h2><hr class=\"star-primary\"><div  style=\"width: 100%; float:left; border:1px  ;  padding: 1em;\"> <table   class=\"table-hover table-condensed table-responsive\" style=\"width: 100%; table-layout:fixed;border-spacing: 5px;\"><thead><tr><th><center>Student Id</center></th><th><center>Student Name<center></th><th><center>Date of Birth<center></th><th><center>Gender<center></th><th><center>Address<center></th><th><center>Contact<center></th><th><center>Email Address<center></th></tr></thead><tbody>";
			student_info = jQuery.parseJSON(h);
			for (var i = 0; i < student_info.length; i++) {
				txt += " <tr  align=\"left\"><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + student_info[i].Student_Id + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + student_info[i].Student_Name + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + student_info[i].Date_of_Birth + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + student_info[i].Gender + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + student_info[i].Address + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + student_info[i].Contact + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + student_info[i].emailAddress + "</button></td></tr>"

			}
			if (txt != "") {

				txt += "</tbody></table></div>";
				jQuery('#studentDetails').html('');
				$("#studentDetails").append(txt);
			}


		}
	});
 }
function showFacultytData(username){}
function showAdminData(username){
    jQuery('#studentDetails').html('');
    
	$.ajax({
		'url': 'php/department.php?type="level1"&uid=\"' + username + '\"',
		success: function (h) {
			var txt = "<h2>Student Profile</h2><hr class=\"star-primary\"><button type=\"submit\" id=\"bookdetails\" class=\"btn btn-xl\" style=\"float:left;\" >Book Classroom</button><button type=\"submit\" id=\"getview\" class=\"btn btn-xl\" style=\"float:right;\" >View Current Allocation</button><div class=\"btn-group\"><button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\">Type<span class=\"caret\"></span></button><ul class=\"dropdown-menu selected\" role=\"menu\" aria-labelledby=\"dLabel\"><li role=\"presentation\"><a href=\"#\" property=\"Gender\" >Gender</a></li><li role=\"presentation\"><a href=\"#\" property=\"Student_Name\">Name</a></li><li role=\"presentation\"><a href=\"#\" property=\"Address\">Address</a></li><li role=\"presentation\"><a href=\"#\" property=\"Student_Id\">ID</a></li></ul></div><form role=\"form\" name=\"stuSerca\" id=\"StuSearching\" ><fieldset><div class=\"form-group\"><input class=\"form-control\"  name=\"Search\" id=\"StuSearch\"  autofocus></div><div class=\"form-group\"></div><button type=\"submit\" id=\"StudSearchBut\" class=\"btn btn-xl\" >Search</button></fieldset></form><div> <table   class=\"table-hover table-condensed \" ><thead><tr><th><center>Student Id</center></th><th><center>Student Name<center></th><th><center>Date of Birth<center></th><th><center>Gender<center></th><th><center>Address<center></th><th><center>Contact<center></th><th><center>Email Address<center></th></tr></thead><tbody>";
			student_info1 = jQuery.parseJSON(h);
			for (var i = 0; i < student_info1.length; i++) {
				txt += " <tr  class=\"col-md-14\" align=\"left\"><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-xs-1 \"  >" + student_info1[i].Student_Id + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 \"  >" + student_info1[i].Student_Name + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 \"  >" + student_info1[i].Date_of_Birth + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-1 \"  >" + student_info1[i].Gender + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-4 \"  >" + student_info1[i].Address + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 \"  >" + student_info1[i].Contact + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 \"  >" + student_info1[i].emailAddress + "</button></td><td ><button type=\"button\"  class=\"btn btn-primary btn-group btn-group-justified col-md-3 deledit \" property=\""+student_info1[i].Student_Id+"_"+student_info1[i].Student_Name+"_"+student_info1[i].Date_of_Birth+"_"+student_info1[i].Gender+"_"+student_info1[i].Address+"_"+student_info1[i].Contact+"_"+student_info1[i].emailAddress+"\">Edit/Delete</button></td></tr>"

			}
			if (txt != "") {

				txt += "</tbody></table></div>";
				jQuery('#studentDetails').html('');
				$("#studentDetails").append(txt);
			}


		}
	});
    
    /* deptdeatils 
    <h2>Department Profile</h2><hr class=\"star-primary\"><div  style=\"width: 100%; float:left; border:1px  ;  padding: 1em;\"> <table   class=\"table-hover table-condensed table-responsive\" style=\"width: 100%; table-layout:fixed;border-spacing: 5px;\"><thead><tr><th><center>Dept Id</center></th><th><center>Dept Name<center></th><th><center>Dept Phone Number<center></th><th><center>Email Address<center></th></tr></thead><tbody>
    <tr  align=\"left\"><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + dept_info[i].Dept_Id + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + dept_info[i].Dept_Name + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + dept_info[i].Dept_PhoneNum + "</button></td><td ><button type=\"button\" style=\"word-wrap: break-word;white-space: normal;\" class=\"btn btn-primary btn-group btn-group-justified \"  >" + dept_info[i].depEmailAddress + "</button></td></tr>
    
    
    */
}

