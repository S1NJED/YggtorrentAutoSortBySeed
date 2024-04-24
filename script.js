// ==UserScript==
// @name         Yggtorrent auto add sort by seed param
// @namespace    http://tampermonkey.net/
// @version      2024-04-24
// @description  Ajoute automatiquement le paramètre sort=seed quand on fait une recherche
// @author       github@S1NJED
// @include      https://*.yggtorrent.tld/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var sortInput = document.createElement("input");
    sortInput.setAttribute("type", "hidden");
    sortInput.setAttribute("name", "sort");
    sortInput.setAttribute("value", "seed");

    document.querySelector('form[action="https://www3.yggtorrent.qa/engine/search"] > div').appendChild(sortInput);

})();