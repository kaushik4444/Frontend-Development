$(document).ready(function(){
	$("button").click(function(){
		var sum = nums = max = 0;
		$("tbody tr").each(function(){
		if(this.children[0].children[0].checked == true) {
				var value = 0;
				var val = parseInt(this.children[2].textContent);
				if(!isNaN(val)) value = val;
				if(value > max) max = value;
				sum += value;
				nums++;
			}
		}); 
        $("#average").text((nums != 0) ? sum / nums : 0);
		$("#max").text(max);
    });
	
	$("#selectall").change(function(){
    var status = this.checked;
    $('.checkbox').each(function(){
        this.checked = status;
    });
	});

	$('.checkbox').change(function(){
		if(this.checked == false){ 
			$("#selectall")[0].checked = false; 
		}
		if ($('.checkbox:checked').length == $('.checkbox').length ){ 
			$("#selectall")[0].checked = true;
		}
	});

	$('#search').on('keyup change', function (e) {    
            e.preventDefault();    
            var searchText = ($('#search').val().replace(/(\s+)/,"(<[^>]+>)*$1(<[^>]+>)*"));    
            var searchArea = $('#myTable');    
            var resetText = '';
            if (searchText != '') {    
				for(var i = 0; i < 4; i++) {
					for(var j = 1; j < 5; j++) {
						var eachRow = searchArea[0].children[i].children[j];
						resetText = $(eachRow).html().replace(/(<mark>|<\/mark>)/igm, "");    
						$(eachRow).html(resetText);     
						var query = new RegExp("("+searchText+")", "gim");    
						newtext= $(eachRow).html().replace(query, "<mark>$1</mark>");    
						newtext= newtext.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"</mark><mark>");    
    					$(eachRow).html(newtext); 
					}						
				}	
            }
            else {
				for(var i = 0; i < 4; i++) {
					for(var j = 1; j < 5; j++) {
						var eachRow = searchArea[0].children[i].children[j];
						resetText = $(eachRow).html().replace(/(<mark>|<\/mark>)/igm, "");    
						$(eachRow).html(resetText);
					}
				}   
            }    
        });               
});
