$(document).ready(function() {
  var form = $('form');


  var input = $('.reallyInput').val();
  // if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (input !== "") {
			//alert('Please enter an item!');
      var enoughmoneyBtn = $('.enough-moneyBtn');
      var cantlivebutton = $('.cant-live-button');
      console.log(input);
      $('button').click(function() {
        console.log(input);
        $('ul.enough-money-list').append("<li class='left'>" + input + "</li>");
        // make input empty string to clear input field.
      });
      cantlivebutton.click(function() {
        console.log(input);
        $('ul.important-list').append(input);
      });
    }
  // val() is the method to grab the data from an input for example.


});
