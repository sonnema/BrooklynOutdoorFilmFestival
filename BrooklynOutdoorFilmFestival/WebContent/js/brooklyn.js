$(function() {
	  $(document).click(function (event) {
	    $('.navbar-collapse').collapse('hide');
	  });
	});
	$(document).on('click', '.close', function () {
     $(this).parent('div').fadeOut();
 	});
	$(".dropdown-menu li a").click(function(){
	  
	  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
	  $(this).parents(".dropdown").find('.btn').addClass('chngOverflow');
	}); 
	
	$('#regForm').on('submit', function(e){
	  var month = 'August';
	  var count = 0;
	  var dropdownMenuUpd = [];
	  dropdownMenuUpd[0] = $('#datetime .dropdown:nth-child(1) button');
	  dropdownMenuUpd[1] = $('#datetime .dropdown:nth-child(2) button');
	  dropdownMenuUpd[2] = $('#datetime .dropdown:nth-child(3) button');
	  dropdownMenuUpd[3] = $('#datetime .dropdown:nth-child(4) button');
		
	  for(var j=0;j<4;j++)		  
	  {
		  var inputval = dropdownMenuUpd[j].text();
		  if(inputval.indexOf(month) >= 0)
		  		count++;
	  }	  
	  if(count > 3) {
		  alert("You haven't selected any movie shows yet!!");
	  }
	  else
	  {
		  $('#regModal').modal('show');
	  }		  
	  e.preventDefault();
	});
$('#btnYes').on('click', function(e){
	  $('#regModal').modal('hide');
	  $('#regSuccess').modal('show');
	  e.preventDefault();
	});
$('#btnNo').on('click', function(e){
	$('#regModal').modal('hide');
	$('#regCancel').modal('show');
	e.preventDefault();
	});