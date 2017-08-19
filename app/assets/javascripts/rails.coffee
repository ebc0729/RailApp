# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
    $('li.area').click ->
        $('#allcompany').hide
        $('#allcompany').animate 'width' : 'show'

        $(@).addClass 'checked'
        $(@).siblings().removeClass 'checked'

    $('li.company').click ->
        $('#allline').hide
        $('#allline').animate 'width' : 'show'

        $(@).addClass 'checked'
        $(@).siblings().removeClass 'checked'