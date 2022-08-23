"use strict";

/* Year in the header */
const fullDate = document.getElementById("header__fulldate").innerHTML = new Date().toLocaleString();

/* Year in the footer */
const year = document.getElementById("year").innerHTML = new Date().getFullYear();