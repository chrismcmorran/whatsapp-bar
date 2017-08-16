#!/usr/bin/env electron

let menubar = require('menubar');
let menu = menubar();

menu.on('ready', ()=> {
  console.log('whatsapp-bar has been loaded into the native menu bar.');
});
