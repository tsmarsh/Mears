{exec} = require 'child_process'

task 'build', 'Build project from coffee/*.coffee to js/*.js', ->
  exec 'coffee --compile --output js/ coffee/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr