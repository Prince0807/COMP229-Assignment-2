/*
Student Name: Prince Kiritkumar Patel
Student ID: 301277354
Date: 21 Oct 2022
File Name: style.css // for css
*/

$(document).ready(function(){
	var element = $('meta[name="active-menu"]').attr('content');
	$('#' + element).addClass('active');
});
