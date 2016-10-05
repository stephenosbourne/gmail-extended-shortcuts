// ==UserScript==
// @name        gmail-extended-shortcuts
// @namespace   affinehat.net
// @description Custom shortcuts for Gmail
// @include     https://mail.google.com/mail/*
// @version     0.1.0
// @grant       none
// ==/UserScript==


function keyHandler(event) {
  if(event.keyCode === 108) { // 'l' pressed
    event.stopPropagation();
  } 	
}

document.body.addEventListener('keypress', keyHandler, true);
