var sandBridge;
var defaultPath = '/Users/tom/Desktop/bugs/';
var bugs = [];

var saved = function(face){
	update_list();
};

var build_bugs = function(list){
    bugs = [];
    $(eval(list)).each(function(i, bug){
        bugs.push({'bug': bug});
    });
    show_list();
}

var update_list = function(){
    sandBridge.list(defaultPath, 'build_bugs');
}

var show_list = function(){
    $("#list ol").empty();
    $.tmpl( "list_template", bugs ).appendTo( "#list ol" );
    
};

$(function(){
	sandBridge = document.sandbridge;
    $("#list_template").template("list_template");


	$('#track_button').click(function(){
		var filename = defaultPath + $('#write').val() + ".json";
		var contents = $('#contents').val();
		sandBridge.save(
			filename, contents, 'saved');
	});

    update_list();
});