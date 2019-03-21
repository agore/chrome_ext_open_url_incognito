chrome.browserAction.onClicked.addListener(function(tab) {
  console.log(tab.url);
  //var action_url = "javascript:window.print();";
  //chrome.tabs.update(tab.id, {url: action_url});
	//var url = "https://www.google.com";
	chrome.windows.create({"url": tab.url, "incognito": true});
});
