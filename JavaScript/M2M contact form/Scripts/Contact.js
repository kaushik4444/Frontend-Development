function resetFunction() {
    document.getElementById("myForm").reset();
}

function checkReqFields() {
	var returnValue=true;
	var name=document.getElementById("reqName").value;
	var email=document.getElementById("reqEmail").value;
	var orgname=document.getElementById("reqOrgName").value;	
	if(name.trim()==""){
		document.getElementById("reqNameTxt").innerHTML="* Name is required.";
		returnValue=false;
	}else {
		document.getElementById("reqNameTxt").innerHTML="";
	}
	if(orgname.trim()==""){
		document.getElementById("reqOrgNameTxt").innerHTML="* Organization name is required.";
		returnValue=false;
	}else {
		document.getElementById("reqOrgNameTxt").innerHTML="";
	}
	if(email.trim()==""){
		document.getElementById("reqEmailTxt").innerHTML="* Email is required.";
		returnValue=false;
	}else {
		document.getElementById("reqEmailTxt").innerHTML="";
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.reqEmail.value))) {
			alert("Not a valid e-mail address, Please enter email of format abc@xyz.com");
			returnValue=false;
			}
	}
	if(!returnValue){
		document.getElementById("reqWarn").innerHTML = "Please fill all the required fields below";
	}else {
		document.getElementById("reqWarn").innerHTML="";
	}
	return returnValue;			
}

function setPromo() {
    var x = document.getElementById("selectState").value;
	if(x == "def") {
		document.getElementById("promocode").value = "";
	}
	else{
		document.getElementById("promocode").value = x + "-PROMO";
	}
}

function maleAlert() {
	alert("Hello Sir");
	}
	
function femaleAlert(){
	alert("Hello Lady");
	}