$(function() {
    var $newItem = $('#textbox'),
        $todoList = $('#list'),
        todo = {},
        keys = [],
        i = 0;
    
    // function used to sort numbers
    function compareNumbers(a, b) {
        return a - b;
    }

    //localStorage.removeItem('todo');

    if (localStorage && localStorage.getItem('todo')) {
        todo = JSON.parse(localStorage.getItem('todo'));
        Object.keys(todo).forEach(function(key) {
            // push keys to an array
            keys.push(Number(key));
        });
        // sort the array
        keys.sort(compareNumbers);
        
        // show the first 5 items from the stored list [to do]
        for (var k in keys) {
            $('ul').append('<li class="ui-widget ui-state-default ui-corner-all list-item padded" id="'
            + k + '"><div class="flex-wrapper"><div>' 
            + todo[k] + '</div><div><a href="#">x</a></div></div></li>');
        }

        i = keys[-1] + 1;
    }

    // click button to add item
    $('#add').click(function() {
        $.publish('/todo/add/', []);
    });

    // press enter to add item
    $newItem.keypress(function(event) {
        if(event.which === 13) {
            $.publish('/todo/add/', []);
        }
    });

    // click X to remove item from list
    $todoList.delegate('a', 'click', function(e) {
            var $this = $(this);
            
            e.preventDefault();
            $.publish('/todo/remove/', [$this]);
    });   

    // drag & drop items to rearrange them
    $todoList.sortable();
    $todoList.disableSelection();

    // Subscriptions

    // add subscription
    $.subscribe('/todo/add/', function() {
        if ($newItem.val() != "") {

            todo[i] = $newItem.val();
            console.log(todo);
            localStorage.setItem('todo',JSON.stringify(todo));
            var tmp = JSON.parse(localStorage.getItem('todo'));
            console.log(tmp);
            
            $('ul').append('<li class="ui-widget ui-state-default ui-corner-all list-item padded" id="'
            + i + '"><div class="flex-wrapper"><div>' + todo[i] + '</div><div><a href="#">x</a></div></div></li>');

            $newItem.val("");
            console.log(i);
            i++;
        }  
    });

    $.subscribe('/todo/remove/', function($this) {
        var parentId = $this.parent().parent().parent().attr('id'); // a -> div -> div -> li
        console.log(parentId);
        delete todo[parentId];

        // if we deleted the last key/value pair set i to 0 and delete the localstorage item
        if ($.isEmptyObject(todo)) {
            i = 0;
            localStorage.removeItem('todo');
            console.log("object is empty!");
            console.log(i);
        } else {
            // else set the new object as the localstorage item
            localStorage.setItem('todo',JSON.stringify(todo));
            console.log(todo);
        }

        $this.parent().parent().parent().remove();

    });

});

