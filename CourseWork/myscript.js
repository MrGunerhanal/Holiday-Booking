  $(document).ready(function () {
      
      $.getJSON('data.json', function(data){
       $(".search").on("click", function(){
           
           var userDept = $("option[name='destination']:checked").val();
           var getComfort = $("input[name='comfortLevel']:checked").val();
           var getActivity = $("input[name='activity']:checked").val();
           var getDate = $("input[name='date']:checked").val();
           
           var output = "<ul>";
           for(var i in data.resorts){
               if( (userDept == data.resorts[i].destination) && (getComfort == data.resorts[i].comfortLevel) && (getActivity == data.resorts[i].activity)) {
                   
                   
                   
                   output += "<li>" + "<img src='" + data.resorts[i].picture + "'>" + "</li>" + 
                       "<p>" + data.resorts[i].short_description +"</p>" +
                       "<p>" + data.resorts[i].price +"</p>" + "<li>" +"<a href='" + data.resorts[i].url + ".html'>Visit Page</a>" + "</li>"
               } 
           }
           output+="</ul>";
           document.getElementById("tab1").innerHTML = output;
           
                var headeroutput = "<ul>";
             for(var i in data.resorts){
                           if( (userDept == data.resorts[i].destination) && (getComfort == data.resorts[i].comfortLevel) && (getActivity == data.resorts[i].activity)){
                   headeroutput += "<h2>" + data.resorts[i].name + "</h2>"
               } }
   
            headeroutput+="</ul>";
            document.getElementById("header1").innerHTML = headeroutput;
           
           var accomadation = "<ul>";
             for(var i in data.resorts){
                           if( (userDept == data.resorts[i].destination) && (getComfort == data.resorts[i].comfortLevel) && (getActivity == data.resorts[i].activity)){
                   accomadation += "<li>" + data.resorts[i].long_description + "</li>"
               } }
   
            accomadation+="</ul>";
            document.getElementById("tab2").innerHTML = accomadation;
       });
  });    
});
$(function() {
    var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });
  });
 $(function() {
    $( "#check" ).button();
    $( "#format" ).buttonset();
  }); 
 $(function() {
    $( "#radio" ).buttonset();
  });
  $(function() {
    $( document ).tooltip();
  });
 $(function() {
    $( "#departure" ).datepicker({
      numberOfMonths: 3,
      showButtonPanel: true
    });
        $( "#arrival" ).datepicker({
      numberOfMonths: 3,
      showButtonPanel: true
    });
  });


