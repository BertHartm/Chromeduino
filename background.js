'use strict'

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('main.html', {
        bounds: {
            width: 800,
            height: 600,
            left: 100,
            top: 100
        },
        minWidth: 800,
        minHeight: 600
    });
});

chrome.runtime.onInstalled.addListener(function() { 
//    chrome.storage.local.set(object items, function callback);
});

chrome.runtime.onInstalled.addListener(function() { 
//    chrome.storage.local.set(object items, function callback);
});
