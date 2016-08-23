$(document).ready(function() {
var enoughmoneyBtn = $('.enough-moneyBtn');
var cantlivebutton = $('.cant-live-button');
enoughmoneyBtn.click(function() {
  var input = $('.reallyInput').val();
      /* This is what is called a conditional statement, if / if else ...
      Here it is checking if the input is empty, if it is NOT empty, append....*/
  if (input !==""){
    var item = '<li class="item"> <img class="checked" src="images/check.png"/>'+input+'<img class="trash" src="images/trash.png"/></li>';
    $('.enough-money-list').append(item);
    $('reallyInput').val('');
  }
});
cantlivebutton.click(function(){
  var input = $('.reallyInput').val();
  if (input !==""){
    var item = '<li class="item"> <img class="checked" src="images/check.png"/>'+input+'<img class="trash" src="images/trash.png"/></li>';
    $('.important-list').append(item);
    $('reallyInput').val('');
  }
});
/*check delete items*/
assignlisteners();
function assignlisteners() {
	$('ul').on('click', '.trash', function(event){
		console.log('trash clicked');
		$(this).closest('li').remove();
	});
	$('ul').on('click', '.checked', function(event) {
		$(this).closest('li').toggleClass('linethrough');
		console.log('check clicked');
  });
  }
});
