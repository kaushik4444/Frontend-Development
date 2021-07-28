$(document).ready(function(){
	
	$("#myForm").submit(function(){
		var returnValue=true;
		var name=$("#reqName").val();
		var email=$("#reqEmail").val();
		var orgname=$("#reqOrgName").val();	
		if(name.trim()==""){
			$("#reqNameTxt").text("* Name is required.");
			returnValue=false;
		}else {
			$("#reqNameTxt").text("");
		}
		if(orgname.trim()==""){
			$("#reqOrgNameTxt").text("* Organization name is required.");
			returnValue=false;
		}else {
			$("#reqOrgNameTxt").text("");
		}
		if(email.trim()==""){
			$("#reqEmailTxt").text("* Email is required.");
			returnValue=false;
		}else {
			$("#reqEmailTxt").text("");
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.reqEmail.value))) {
				alert("Not a valid e-mail address, Please enter email of format abc@xyz.com");
				returnValue=false;
			}
		}
		if(!returnValue){
			$("#reqWarn").text("Please fill all the required fields below");
		}else {
			$("#reqWarn").text("");
		}
		return returnValue;	
	});
	
	$("#selectState").change(function(){
			$("#promocode")[0].value = this.value + "-PROMO";
	});
	
	$("input[name = gender]").click(function(){
		if($(this).attr("value")=="male") {
			alert("Hello Sir");
		}
		if($(this).attr("value")=="female") {
			alert("Hello Lady");
		}
	});
	
	$("#clearForm").click(function(){
		$("#myForm")[0].reset();
		$("#myForm span").text("");
	});	
});
	