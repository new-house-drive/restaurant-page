"use strict";
import "./style.css";
import menuList from './img/menu/menu';

import coverImage from "./img/cover.jpeg"
import contactUsCover from './img/contact-us.jpg'


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
      navbarButton.id = viewsList[i];

      navbar.appendChild(navbarButton);
    }
  }

  const navbarButtonEventListener = (button) => {
      let viewToDisplay = button.id + '-view';
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

    generateAboutUs();
    generateMenu();
    generateContactUs();
  }

  const generateAboutUs = () => {
    let aboutUsView = document.getElementById('about-us-view');

    let cover = document.createElement('img');
    cover.src = coverImage;
    cover.alt = 'Holodomor cover'

    let text = 'This site was intended to show the food of Ukrainian people during the Holodomor famine. '+
    'However, once I start the research I found out that such site already exists and it was made by far more '+
    'experienced develeopers than I am at the moment. Therefore, I strongly recommend visiting and checking out '+
    'their website <a href="uncounted.ual.ua"> Uncounted</a>. Still, you can see some of the dishes under the Menu section.'

    let textElement = document.createElement('p');
    textElement.innerHTML = text

    aboutUsView.appendChild(cover);
    aboutUsView.appendChild(textElement);

  }

  const generateMenu = () => {
    let menuView = document.getElementById('menu-view');
    

    for (let item of menuList()) {
      let menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      let pic = document.createElement('img');
      pic.src = item.pic;
      pic.alt = item.title;

      let title = document.createElement('p');
      title.innerText = item.title;

      let text = document.createElement('div');
      text.classList.add('menu-item-text');
      text.innerText = item.text;

      let price = document.createElement('div');
      price.classList.add('menu-item-price');
      price.innerText = item.price;

      menuItem.appendChild(pic);
      menuItem.appendChild(title);
      menuItem.appendChild(text);
      menuItem.appendChild(price);

      menuView.appendChild(menuItem);
    }
  }

  const generateContactUs = () => {
    let contactUsView = document.getElementById('contact-us-view');

    let cover = document.createElement('img')
    cover.src = contactUsCover;
    cover.alt = 'contact us'

    let text = document.createElement('p')
    text.innerHTML = 'Thank you for visiting my website. If you wish to learn more about Holodomor tragedy I will gladly refer you to the following' 
    + ' <a href="https://youtu.be/mZoUioqlZEs">video</a> from TimeGhost History channel. It has Age Restriction and cannot be played on my website.'

    let links = document.createElement('p')
    links.innerHTML = "You are also welcome to check the website of Kyiv\'s <a href='https://holodomormuseum.org.ua/en/'>museum of Holodomor</a> for more information." + 
    " Please also consider supporting their croudfunding project <a href='https://www.zernapravdy.org/en/'>Grains of Truth</a>."
    
    contactUsView.appendChild(cover);
    contactUsView.appendChild(text);
    contactUsView.appendChild(links);


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
