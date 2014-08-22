$("#guestbookformsubmit").click(function(event){
event.preventDefault (); 
var firstname, lastname;
firstname = $("#firstname").value();
lastname = $("#lastname").value();
$.get("rahim.herokuapp.com?fn="+firstname+"&ln="+lastname,function(error, data){
	

});
});
