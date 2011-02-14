sandBridge = null
defaultPath = '/Users/tom/Desktop/bugs/'
bugs = []
self = exports ? this

self.build_bugs = (raw_list) ->
    list = JSON.parse raw_list
    bugs = [];
    bugs.push {'bug': bug} for bug in $(list)
    show_list()

update_list = ->    
    sandBridge.list defaultPath, 'build_bugs'

show_list = ->
    $("#list ol").empty()
    $.tmpl( "list_template", bugs ).appendTo "#list ol"

new_story = ->
    $("#current_bug").html $("#new_bug_template").html() 
    $('#track_button').click ->
        filename = defaultPath + $('#write').val() + ".json"
        contents = $('#contents').val()
        sandBridge.save filename, contents, 'saved'

self.saved = ->
    alert "hello!"
    update_list()

$(document).ready -> 
    sandBridge = document.sandbridge
    $("#list_template").template "list_template"
    $("#new_bug_template").template "new_bug_template"
    $("#new_story_button").click new_story
    update_list()