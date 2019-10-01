const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item4-": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll('a');
navBar.forEach((link, position) => {link.textContent = siteContent["nav"]["nav-item-" + (position + 1)]});

let headerOne = document.querySelector('h1');
headerOne.innerHTML = `${siteContent["cta"]["h1"].slice(0, 3)}<br> ${siteContent["cta"]["h1"].slice(4, 6)}<br> ${siteContent["cta"]["h1"].slice(7, 15)}`;

let buttonText = document.querySelector('button');
buttonText.textContent = siteContent.cta.button;

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let featuresTitle = document.querySelector('.top-content .text-content:first-Child h4');
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

let featuresText = document.querySelector('.top-content .text-content:first-Child p');
featuresText.textContent = siteContent["main-content"]["features-content"];

let aboutTitle = document.querySelector('.top-content .text-content:last-Child h4');
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

let aboutText = document.querySelector('.top-content .text-content:last-Child p');
aboutText.textContent = siteContent["main-content"]["about-content"];

let servicesTitle = document.querySelector('.bottom-content .text-content h4');
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

let servicesText = document.querySelector('.bottom-content .text-content p');
servicesText.textContent = siteContent["main-content"]["services-content"];

let productTitle = document.querySelector('.bottom-content .text-content:nth-Child(2) h4');
productTitle.textContent = siteContent["main-content"]["product-h4"];

let productText = document.querySelector('.bottom-content .text-content:nth-Child(2) p');
productText.textContent = siteContent["main-content"]["product-content"];

let visionTitle = document.querySelector('.bottom-content .text-content:last-Child h4');
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

let visionText = document.querySelector('.bottom-content .text-content:last-Child p');
visionText.textContent = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

let footerItem = document.querySelector('footer p');
footerItem.textContent = siteContent["footer"]["copyright"];