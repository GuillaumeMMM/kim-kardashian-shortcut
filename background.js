chrome.runtime.onInstalled.addListener(function() {
    // add an action here
    console.log('Kim loaded', window.location.href);
});

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
      // read changeInfo data and do something with it (like read the url)
      if (changeInfo.status === 'complete') {
        // do something here
        if (tab.url.substr(0, 18) === 'https://www.google') {
            chrome.tabs.sendMessage( tabId, {
                message: 'ongoogle',
            })
        }
  
      }
    }
  );
