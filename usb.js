'use strict'

var VENDOR_ID = 0x2341;// 9025;//
var PRODUCT_ID = 0x0043;//67;//
var DEVICE_INFO = {"vendorId": VENDOR_ID, "productId": PRODUCT_ID};

var numdev;
var numint;
function descriptorCallback(desarr) {
    console.log("desarr");
    console.log(desarr);
    numint.textcontent = desarr.length;
}

function usbCallback(devarr) {
    console.log("devarr");
    console.log(devarr);
    numdev.textContent = devarr.length;
    if (devarr.length > 0) {
        chrome.usb.listInterfaces(devarr[0], descriptorCallback);
    }
}

function gotPermission() {
    numdev = document.getElementById("numdev");
    numint = document.getElementById("numint");
    numdev.textContent = "Loading ...";
    numint.textContent = "Loading ...";
    chrome.usb.findDevices(DEVICE_INFO, usbCallback);
}

var permissionObj = {permissions: [{'usbDevices': [DEVICE_INFO] }]};

var requestButton = document.getElementById("requestPermission");
requestButton.addEventListener('click', function() {
    chrome.permissions.request( permissionObj, function(result) {
        if (result) {
            gotPermission();
        } else {
            console.log('App was not granted the "usbDevices" permission.');
            console.log(chrome.runtime.lastError);
        }
    });
});

chrome.permissions.contains( permissionObj, function(result) {
    if (result) {
        gotPermission();
    }
});
