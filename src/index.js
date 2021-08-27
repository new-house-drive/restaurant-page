"use strict";
import "./style.css";

const Restaurant = (() => {
  let content = document.getElementById("content");

  const addNavbar = () => {
    let navbarView = document.createElement("div");

    navbarView.classList.add("navbar-view");

    let navbarBtnNames = ["About us", "Menu", "Contact us"];
    let navbarBtnIDs = ["about-us", "menu", "contact-us"];

    for (let i = 0; i < 3; i++) {
      let navbarButton = document.createElement("button");

      navbarButton.classList.add("navbar-button");
      navbarButton.innerText = navbarBtnNames[i];
      navbarButton.id = navbarBtnIDs[i];

      navbarView.appendChild(navbarButton);
    }
    content.appendChild(navbarView);
  };

  return {
    addNavbar,
  };
})();

const Module = (() => {
  Restaurant.addNavbar();
})();
