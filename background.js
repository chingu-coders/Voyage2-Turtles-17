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