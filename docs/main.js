$(function(){
	$(".dropdown-menu").on("shown.bs.dropdown", function(e){
	//do something
	console.log("You clicked the drop downs", event);
		$("#crime_choropleth").load("violent.html");
		e.preventDefault();
	});
})