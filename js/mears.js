var sandBridge;
var defaultPath = '/Users/tom/Desktop/bugs/';
var bugs = [];

var saved = function(){
    alert("hello!");
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

var new_story = function(){
    $("#current_bug").html($("#new_bug_template").html());  
    $('#track_button').click(function(){
		var filename = defaultPath + $('#write').val() + ".json";
		var contents = $('#contents').val();
		sandBridge.save(
			filename, contents, 'saved');
	});  
}

$(document).ready(function(){
	sandBridge = document.sandbridge;
    $("#list_template").template("list_template");
    $("#new_bug_template").template("new_bug_template");
    $("#new_story_button").click(new_story);
    update_list();
});