$(function() {
    $('#add').click(function() {
        $.publish('/todo/add', []);
    });

    $('#textbox').keypress(function(event) {
        if(event.which === 13) {
            $.publish('/todo/add', []);
        }
    });

    $.subscribe('/todo/add', function() {
        if ($newItem.val() != "") {

            $('ul').append('<li class="ui-widget ui-state-default ui-corner-all list-item padded"><div class="flex-wrapper"><div>' + $newItem.val() + '</div><div><a href="#">x</a></div></div></li>');

            $newItem.val("");
        }  
    });
});

