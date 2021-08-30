"use strict";
import "./style.css";

const Restaurant = (() => {
  let content = document.getElementById("content");
  let buttonNames = ["About us", "Menu", "Contact us"];
  let viewsList = ["about-us", "menu", "contact-us"];
  
  
  /* NAVIGATION BAR */

  const addNavbarButtons = (navbar) => {
    
    for (let i = 0; i < 3; i++) {
      let navbarButton = document.createElement("button");

      navbarButton.classList.add("navbar-button");
      navbarButton.innerText = buttonNames[i];
      navbarButton.id = viewsList[i] +  '-button';

      navbar.appendChild(navbarButton);
    }
  }

  const navbarButtonEventListener = (button) => {
      
  }

  const addNavbar = () => {
    let navbar = document.createElement("div");
    navbar.classList.add("navbar-view");

    addNavbarButtons(navbar)
    content.appendChild(navbar);
  };



  // VIEWS CONSTRUCTION

  const addViews = () => {
    for (let i = 0; i < 3; i++) {
      let view = document.createElement("div")
      view.id = viewsList[i] + '-view';
      content.appendChild(view)
    }
  }

  return {
    addNavbar,
  };
})();

const Module = (() => {
  Restaurant.addNavbar();
  Restaurant.addViews();
})();
