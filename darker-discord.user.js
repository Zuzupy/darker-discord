// ==UserScript==
// @name         Discord Midnight Theme
// @namespace    http://tampermonkey.net/
// @version      2024-06-05
// @description  Enables Discord's hidden midnight theme on desktop!
// @author       github.com/Zuzupy
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    console.log("[darker-discord] turning the lights off!");

    // Use the existing midnight theme as a base
    document.body.classList.toggle("theme-midnight");

    // Servers list
    GM_addStyle(".scroller_de945b { background: #080808; }");

    // User profile box
    GM_addStyle(".container_debb33 { background: linear-gradient(90deg, #080808, #000) !important; }");

    // Channels list
    GM_addStyle(".containerDefault_ae2ea4 { background: linear-gradient(90deg, #080808, #000); }");
    GM_addStyle(".containerDefault_e3b32b { background: linear-gradient(90deg, #080808, #000); }");

    // Text entry
    GM_addStyle(".themedBackground__3a4c0 { background: #080808; }");

    // Members list
    GM_addStyle(".members__573eb { background: linear-gradient(90deg, #010101, #030303); }");
    GM_addStyle(".member_aa4760 { background: linear-gradient(90deg, #000, #020202); }");

    // Server folders
    GM_addStyle(".expandedFolderBackground_b1385f { background: #000; }");

    // Friends list
    GM_addStyle(".privateChannels__9b518 { background: linear-gradient(90deg, #080808, #000); }");
    GM_addStyle(".container__3792d { background: linear-gradient(90deg, #080808, #000); border-radius: 0; }");

    // Friends top bar
    GM_addStyle(".themed_b152d4 { background: #000 !important; }");

    // Settings left panel
    GM_addStyle(".sidebar__02e8d { background: #030303; }");
    GM_addStyle(".sidebarRegionScroller__8113e { background: #000; }");

    // Server discovery
    GM_addStyle(".scroller__26b89 { background: #000");
    GM_addStyle(".thin__62e51 { background: linear-gradient(90deg, #080808, #000); }");

    // Server cards
    GM_addStyle(".guildInfo__4779b { background: linear-gradient(180deg, #080808, #000); }");
    GM_addStyle(".card__86773 { background: #080808 !important; }");

    // Focus locks?
    GM_addStyle(".container__2e9cc { background: #080808 !important; }");
})();