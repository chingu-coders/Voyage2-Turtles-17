$(function() {
    $('#add').click(function() {
        var listvalue = $('#textbox').val();
                $("#textbox").val("");
            $('ul').append('<li class="ui-widget ui-state-default ui-corner-all list-item padded">' + listvalue + '<a href="#">x</a></li>');
    });

    $('#textbox').keypress(function(event) {
        if(event.which === 13) {
            var listvalue = $('#textbox').val();
                $('#textbox').val("");
                $('ul').append('<li class="ui-widget ui-state-default ui-corner-all list-item padded">' + listvalue + '<a href="#">x</a></li>');
        }
    });

    $('#list').on('click', 'li', function(e) {
        $(this).remove();
     });
});

