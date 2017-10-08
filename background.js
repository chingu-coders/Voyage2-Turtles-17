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

$('#cog-icon, span').click(function(){
    $('.settings-tab').toggle();
    $(this).toggleClass('showMenu');
});
/*alessio's code ends here pls don't touch without asking*/	
