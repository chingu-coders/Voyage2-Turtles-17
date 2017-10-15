/*
Open a new tab, and load "index.html" into it.
*/
function ext() {
    chrome.tabs.create({
      "url": "/index.html"
    });
 }
 
 
 /*
 Add ext() as a listener to clicks on the browser action.
 */
 chrome.browserAction.onClicked.addListener(ext);
  /*
 Add ext() as a listener to clicks on the browser action.
 */

/*alessio's code start here pls don't touch without asking*/	
$('#cog-icon').hover(function(){
    $(this).toggleClass('fa-spin');
});

$('#cog-icon, #close-btn').click(function(){
    $('.settings-tab').toggle();
    $(this).toggleClass('showMenu');


});


$('.weather-toggle').click(function(){
	if (this.textContent === "TURN OFF") {
		
		$(this).text("TURN ON");
	} else {

		$(this).text("TURN OFF");
	}

	$('.lolo').toggle();
	$(this).toggleClass('showModules');

	
});

$('.links-toggle').click(function(){
	if (this.textContent === "TURN OFF") {
		
		$(this).text("TURN ON");
	} else {

		$(this).text("TURN OFF");
	}

	$('.lolo').toggle();
	$(this).toggleClass('showModules');
});

$('.todo-toggle').click(function(){
	if (this.textContent === "TURN OFF") {
		
		$(this).text("TURN ON");
	} else {

		$(this).text("TURN OFF");
	}

	$('.lolo').toggle();
	$(this).toggleClass('showModules');
});

/*alessio's code ends here pls don't touch without asking*/	
