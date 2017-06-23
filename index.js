$( document ).ready(function() {
$("#heading").addClass("animated shake");
});

$("#2015_incidents_btn").click(function() {
 $("#2016_incidents").hide();
 $("#2015_incidents").toggle(600);
});

$("#2016_incidents_btn").click(function(){
	$("#2015_incidents").hide();
	$("#2016_incidents").toggle(600);
	$("#compare_btn").show();
	$("#arc_timesets").hide(900);
	
});

$("#compare_btn").click(function(){
	$("#2015_incidents").hide();
	$("#arc_timesets").toggle(600);
});



$("#collect_events_btn").click(function(){
	$("#collect_events_div").toggle();
});

$("#display_btn").click(function(){
	$("#hot_display").toggle();
	
});



$("#ellipse_btn").click(function(){
	$("#ellipse_div").toggle();	
});

$("#median_btn").click(function(){
	$("#median_div").toggle();
});


$("#drug_query").click(function(){
	$("#drug_img_div").toggle();
});

$("#drug_ellipse").click(function(){
	$("#drugellipse_img_div").toggle();
});

$("#displayschoolincidents_btn").click(function(){
	$("#drugsnearschools_div").toggle();
});