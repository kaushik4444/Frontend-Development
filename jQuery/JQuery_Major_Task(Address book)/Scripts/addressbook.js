$(document).ready(function () {
	function Contact(id, name, email, mobile, landline, website, address) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.landline = landline;
		this.website = website;
		this.address = address
	}
	var employeeList = [new Contact(1, "Trinath", "trinath.i@technovert.com", "9987655478", "040456789", "trinathInt.com", "kompally"),
	new Contact(2, "Kaushik Chandapet", "kaushik.c@technovert.com", "9501895868", "040859685", "kaushikism.com", "miyapur, hyderabad"),
	new Contact(3, "Mudit Sharma", "mudit.s@technovert.com", "9547678768", "040859685", "khhjhikism.com", "madhapur, hyderabad")
	];
	renderTableData();

	function validation(name, mobile, email) {
		var returnValue = true;
		if (name.trim() == "") {
			$("#reqNameTxt").text("* Name is required.");
			returnValue = false;
		}
		if (mobile.trim() == "") {
			$("#reqMobileTxt").text("* Mobile Number is required.");
			returnValue = false;
		} else {
			if (mobile.length != 10) {
				$("#reqMobileTxt").text("Entered Mobile number is invalid");
				returnValue = false;
			} else {
				intRegex = /[0-9 -()+]+$/;
				is_mobile = true;
				for (var i = 0; i < 10; i++) {
					if (intRegex.test(mobile[i])) {
						continue;
					} else {
						is_mobile = false;
						$("#reqMobileTxt").text("Entered Mobile number is invalid");
						break;
					}
				}
				if (returnValue) returnValue = is_mobile;
			}
		}
		if (email.trim() == "") {
			$("#reqEmailTxt").text("* Email is required.");
			returnValue = false;
		} else {
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))) {
				alert("Not a valid e-mail address, Please enter email of format abc@xyz.com");
				returnValue = false;
			}
		}
		if (!returnValue) {
			$("#reqWarn").text("Please fill all the required fields below");
		}
		return returnValue;
	}

	function reqTxtReset() {
		$("#reqWarn").text("");
		$("#reqNameTxt").text("");
		$("#reqEmailTxt").text("");
		$("#reqMobileTxt").text("");
	}

	function renderTableData() {
		$('.table ul').html("");
		$.each(employeeList, function () {
			var li = $('<li>').attr("id", this.id);
			var div = $('<div>');
			li.append(div).children('div').addClass("selectContact");
			div.append('<p id="selectContactName">' + this.name + '</p><p>' + this.email + '</p><p>+91 ' + this.mobile + '</p>');
			$('.table ul').append(li);
		});
	}

	function renderContactDetails() {
		$(".modal").css("display", "none");
		$("#contactDetails").css("display", "block");
	}

	function renderContactForm() {
		$(".modal").css("display", "block");
		$("#contactDetails").css("display", "none");
	}

	function getSelectedObject(activeID) {
		var object = 0;
		$.each(employeeList, function () {
			if (this.id == activeID) {
				object = this;
			}
		});
		return object;
	}

	$('#add').click(function () {
		$('#tableUL li').css("background-color", "white");
		$('#myForm')[0].reset();
		renderContactForm();
		reqTxtReset();
		$('.formUpdate').css("display", "none");
		$('.formAdd').css("display", "block");
	});

	$('#tableUL').on('click', 'li', function () {
		$('#tableUL li').css("background-color", "white");
		$(this).css("background-color", "#c9e4f5");
		renderContactDetails();
		var activeElementID = parseInt($(this).attr("id"));
		var activeObject = getSelectedObject(activeElementID);
		$('.delete').attr("id", activeElementID);
		$('.edit').attr("id", activeElementID);
		$('.formUpdate').attr("id", activeElementID);
		$('#detailsText').html('<h2>' + activeObject.name + '</h2><br><p>Email: ' + activeObject.email + '</p><br><p>Mobile: +91 ' + activeObject.mobile +
			'</p><p>Landline: 040 ' + activeObject.landline + '</p><br><p>Website: ' + activeObject.website + '</p><br><p>Address: ' + activeObject.address + '</p><p>');
	});

	$('.delete').click(function () {
		var deleteObject = getSelectedObject($(this).attr("id"));
		employeeList.splice(employeeList.indexOf(deleteObject), 1);
		$("#contactDetails").css("display", "none");
		renderTableData();
	});

	$('.edit').click(function () {
		var editObject = getSelectedObject($(this).attr("id"));
		renderContactForm();
		reqTxtReset();
		$('#name').val(editObject.name);
		$('#email').val(editObject.email);
		$('#mobile').val(editObject.mobile);
		$('#landline').val(editObject.landline);
		$('#website').val(editObject.website);
		$('#address').val(editObject.address);
		$('.formAdd').css("display", "none");
		$('.formUpdate').css("display", "block");
	});

	$('.formAdd').click(function () {
		var defID = employeeList[employeeList.length - 1].id + 1; //var defID = 0;
		reqTxtReset();
		var check = validation($('#name').val(), $('#mobile').val(), $('#email').val());
		if (check) {
			employeeList.push(new Contact(defID, $('#name').val(), $('#email').val(), $('#mobile').val(), $('#landline').val(), $('#website').val(), $('#address').val()));
			renderTableData();
			$('#myForm')[0].reset();
			$(".modal").css("display", "none");
			defID++;
		}
	});

	$('.formUpdate').click(function () {
		var objectId = $('.edit').attr("id");
		var editObject = getSelectedObject(objectId);
		reqTxtReset();
		var check = validation($('#name').val(), $('#mobile').val(), $('#email').val());
		if (check) {
			editObject = employeeList[employeeList.indexOf(editObject)] = new Contact(objectId, $('#name').val(), $('#email').val(), $('#mobile').val(), $('#landline').val(), $('#website').val(), $('#address').val());
			renderTableData();
			$('#tableUL #' + objectId).css("background-color", "#c9e4f5");
			$('#myForm')[0].reset();
			renderContactDetails();
			$('#detailsText').html('<h2>' + editObject.name + '</h2><br><p>Email: ' + editObject.email + '</p><br><p>Mobile: +91 ' + editObject.mobile +
				'</p><p>Landline: 040 ' + editObject.landline + '</p><br><p>Website: ' + editObject.website + '</p><br><p>Address: ' + editObject.address + '</p><p>');
		}
	});

	$('.close').click(function () {
		if ($('.formAdd').css("display") == "none") {
			$("#contactDetails").css("display", "block");
		}
		$(".modal").css("display", "none");
	});
});