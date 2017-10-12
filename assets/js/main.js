$(function() {
    var $newItem = $('#textbox'),
        $todoList = $('#list');

    // click button to add item
    $('#add').click(function() {
        $.publish('/todo/add', []);
    });

    // press enter to add item
    $newItem.keypress(function(event) {
        if(event.which === 13) {
            $.publish('/todo/add', []);
        }
    });

    // click X to remove item from list
    $todoList.delegate('a', 'click', function() {
        $(this).parent().parent().parent().remove(); // a -> div -> div -> li
    });

    // drag & drop items to rearrange them
    $todoList.sortable();
    $todoList.disableSelection();

    // Subscriptions

    // add subscription
    $.subscribe('/todo/add', function() {
        if ($newItem.val() != "") {
            
            $('ul').append('<li class="ui-widget ui-state-default ui-corner-all list-item padded"><div class="flex-wrapper"><div>' + $newItem.val() + '</div><div><a href="#">x</a></div></div></li>');

            $newItem.val("");
        }  
    });
});

