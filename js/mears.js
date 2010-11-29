var sandbridge;
var defaultPath = '/Users/tom/Desktop/bugs/';

var saved = function(face){
	alert("saved!");
};

var show_list = function(list){
    var bugs = eval(list);
    var objects = [];
    $(bugs).each(function(i, bug){
        objects.push({'bug': bug});        
    });
    $.tmpl( "list_template", objects ).appendTo( "#list ol" );
    
};

$(function(){
	sandbridge = document.sandbridge;
    $("#list_template").template("list_template");


	$('#track_button').click(function(){
		var filename = defaultPath + $('#write').val() + ".json";
		var contents = $('#contents').val();
		sandbridge.save(
			filename, contents, 'saved');
	});

    sandbridge.list(defaultPath, 'show_list');
});