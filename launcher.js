var scr_parent = document.getElementById("guide_main");
var scr_coreurl = (location.protocol == "file:") ? "./core.js" : "https://thenyutheta.github.io/KCW_TRAIN_GUIDE/core.js";
var scr_core = document.createElement("script");
scr_core.src = scr_coreurl + '?t=' + Date.now();
scr_core.onload = function () { };
scr_parent.appendChild(scr_core);
