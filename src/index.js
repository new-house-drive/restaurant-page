"use strict";
import "./style.css";
import coverImage from "./img/cover.jpeg"

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
    let viewsWrapping = document.createElement("div")
    viewsWrapping.classList.add('views-wrapping')

    content.appendChild(viewsWrapping)
    for (let i = 0; i < 3; i++) {
      let view = document.createElement("div")
      view.id = viewsList[i] + '-view';
      viewsWrapping.appendChild(view)
    }

    generateAboutUs()
  }

  const generateAboutUs = () => {
    let aboutUsView = document.getElementById('about-us-view');

    let cover = document.createElement('img');
    cover.src = coverImage;
    cover.alt = 'Holodomor cover'

    let text = 'This site was intended to show the food of Ukrainian people during the Holodomor famine. '+
    'However, once I start the research I found out that such site already exists and it was made by far more '+
    'experienced develeopers than I am at the moment. Therefore, I strongly recommend visiting and checking out '+
    'their website <a href="uncounted.ual.ua"> Uncounted</a>. Still, you can see some of the dishes under the Menu section'

    let textElement = document.createElement('p');
    textElement.innerHTML = text

    aboutUsView.appendChild(cover);
    aboutUsView.appendChild(textElement);



  }

  return {
    addNavbar,
    addViews,
  };
})();

const Module = (() => {
  Restaurant.addNavbar();
  Restaurant.addViews();
})();
