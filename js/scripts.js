$(document).ready(function() {
  $("form#paliForm").submit(function(event) {
    event.preventDefault();
    var input = $("#paliInput").val();
    var wordArray = input.split('');

    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] !== wordArray[wordArray.length - i -1]) {
        //console.log("Error! Not a Palindrome!");
        $(".output").text("Error! the string: '"+ input +"' is not a Palindrome!");
      } else {
        $(".output").text("congratulations! "+ input +" is a Palindrome!");
      }
    }
  });
});
