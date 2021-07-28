$(document).ready(function () {

	var employeeList = [{
		name: "Mahendra Kukka",
		age: 23,
		email: "mahendra.k@technovert.com",
		id: 1
	}, {
		name: "Sukanyaa Bhavanibhatla",
		age: 17,
		email: "sukanya.b@technovert.com",
		id: 2
	},
	{
		name: "Siva siddam",
		age: 34,
		email: "siva.s@technovert.com",
		id: 3
	}
	];
	$.each(employeeList, function () {
		var tr = $('<tr/>');
		var td = $('<td/>');
		td.append('<input/>').children('input').attr("id", this.id).attr("name", "select").addClass("checkbox").attr("type", "checkbox").attr("value", "false");
		tr.append(td).append('<td>' + this.name + '</td>').append('<td>' + this.age + '</td>').append('<td>' + this.email + '</td>').append('<td></td>');
		$('tbody').append(tr);
	});

	$("button").click(function () {
		var sum = nums = max = 0;
		$.each(employeeList, function () {
			if ($('#' + this.id).length == 1) {
				if ($('#' + this.id)[0].checked) {
					var value = 0;
					var val = parseInt(this.age);
					if (!isNaN(val)) value = val;
					if (value > max) max = value;
					sum += value;
					nums++;
				}
			}
		});
		$("#average").text((nums != 0) ? sum / nums : 0);
		$("#max").text(max);
	});


	$("#selectall").change(function () {
		var status = this.checked;
		$('.checkbox').each(function () {
			this.checked = status;
		});
	});


	$('.checkbox').change(function () {
		if (this.checked == false) {
			$("#selectall")[0].checked = false;
		}
		if ($('.checkbox:checked').length == $('.checkbox').length) {
			$("#selectall")[0].checked = true;
		}
	});


	$('#search').on('keyup change', function (e) {
		e.preventDefault();
		var searchText = ($('#search').val().replace(/(\s+)/, "(<[^>]+>)*$1(<[^>]+>)*"));
		var searchArea = $('#myTable');
		var resetText = '';
		if (searchText != '') {
			for (var i = 0; i < employeeList.length; i++) {
				for (var j = 1; j <= (Object.keys(employeeList[0]).length); j++) {
					var eachRow = searchArea[0].children[i].children[j];
					resetText = $(eachRow).html().replace(/(<mark>|<\/mark>)/igm, "");
					$(eachRow).html(resetText);
					var query = new RegExp("(" + searchText + ")", "gim");
					newtext = $(eachRow).html().replace(query, "<mark>$1</mark>");
					//newtext= newtext.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"</mark><mark>");    
					$(eachRow).html(newtext);
				}
			}
		} else {
			for (var i = 0; i < employeeList.length; i++) {
				for (var j = 1; j <= (Object.keys(employeeList[0]).length); j++) {
					var eachRow = searchArea[0].children[i].children[j];
					resetText = $(eachRow).html().replace(/(<mark>|<\/mark>)/igm, "");
					$(eachRow).html(resetText);
				}
			}
		}
	});
});
