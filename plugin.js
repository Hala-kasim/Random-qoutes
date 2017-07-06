$(document).ready(function(){
  $("#newQoute").click(function(){
  newQoute();
     var randomQoute;
     var author;
     function newQoute() {
    $.getJSON("/json/quotes.json", function(data){
       $(".quote").html('"' + data.qouteText + '"');
      $(".auther").html(data.qouteAuthor);
     });
     }
     });
});
