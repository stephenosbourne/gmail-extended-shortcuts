// ==UserScript==
// @name        gmail-extended-shortcuts
// @namespace   affinehat.net
// @description Custom shortcuts for Gmail
// @include     https://mail.google.com/mail/*
// @version     0.1.1
// @grant       none
// ==/UserScript==

var back = document.getElementById(':ip');
var forward = document.getElementById(':iq');

function keyHandler(event) {
  if (event.charCode === 104) { // 'h' pressed
    // simulate click...
  }

  if (event.charCode === 108) { // 'l' pressed
    event.stopPropagation();
  }
}

document.body.addEventListener('keypress', keyHandler, true);
