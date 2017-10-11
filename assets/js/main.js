$(function() {
    $('#add').click(function() {
        var listvalue = $('#textbox').val();
            $("#textbox").val("");
            $('ul').append('<li class="ui-widget ui-state-default ui-corner-all list-item padded"><div class="flex-wrapper"><div>' + listvalue + '</div><div><a href="#">x</a></div></div></li>');
    });

    $('#textbox').keypress(function(event) {
        if(event.which === 13) {
            var listvalue = $('#textbox').val();
            $('#textbox').val("");
            $('ul').append('<li class="ui-widget ui-state-default ui-corner-all list-item padded"><div class="flex-wrapper"><div>' + listvalue + '</div><div><a href="#">x</a></div></div></li>');
        }
    });

    $("#list").sortable();
    $("#list").disableSelection();

    $('#list').delegate('a', 'click', function(e) {
        $(this).parent().parent().parent().remove();
    });

});

