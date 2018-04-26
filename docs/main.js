$(function(){
	$("#Violent").on("click", function(e){
	//do something
		console.log("You clicked the drop downs", event);
		$("#crime_choropleth").html("violent.html");
		e.preventDefault();
	});
})