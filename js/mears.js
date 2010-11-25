var sandbridge;
var defaultPath = '/Users/tom/Desktop/bugs/';

var saved = function(){
	alert("saved!");
}
$(function(){
	sandbridge = document.sandbridge;
	$('#track_button').click(function(){
		var filename = defaultPath + $('#write').val() + ".json";
		var contents = $('#contents').val();
		alert(filename + " : " + contents);
		sandbridge.save(
			filename, contents, 'saved');
	});
});