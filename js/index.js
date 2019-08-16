const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
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
//////////////////// navigation, logo-img //////////////////////////
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// navigation - add a foreach when you get everything done.
let nav = document.querySelectorAll('a');

const link_1 = document.getElementsByTagName('a')[0]
link_1.textContent = siteContent["nav"]["nav-item-1"]

const link_2 = document.getElementsByTagName('a')[1]
link_2.textContent = siteContent["nav"]["nav-item-2"]

const link_3 = document.getElementsByTagName('a')[2]
link_3.textContent = siteContent["nav"]["nav-item-3"]

const link_4 = document.getElementsByTagName('a')[3]
link_4.textContent = siteContent["nav"]["nav-item-4"]

const link_5 = document.getElementsByTagName('a')[4]
link_5.textContent = siteContent["nav"]["nav-item-5"]

const link_6 = document.getElementsByTagName('a')[5]
link_6.textContent = siteContent["nav"]["nav-item-6"]

// task 3 append and prepend / all nav icons green

const Prepend = document.createElement('a');
Prepend.textContent = "Prepend";
// document.getElementsByTagName('a').style.cursor = "pointer";

const Append = document.createElement('a');
Append.textContent = "Append";

const addNewPrepend = document.querySelector('nav');
addNewPrepend.prepend(Prepend);

const addNewAppend = document.querySelector('nav');
addNewAppend .appendChild(Append);

const navText = document.querySelectorAll('a');
navText.forEach(element => {
 element.style.color = 'green'
});


///////////////////// cta content ///////////////////////////////////// 
const cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src', siteContent["cta"]["img-src"])

//work into the nesting of the element. less de-bugging and more of a direct selection.
// const dom = document.getElementsByTagName("section")[0];
const h1 = document.getElementsByTagName("h1")[0];
h1.textContent = siteContent["cta"]["h1"];


// cta button
const button = document.getElementsByTagName("button")[0];
button.textContent = siteContent["cta"]["button"];
//////////////////////// main-content //////////////////////////////
// main-content img
const middle_img_src = document.getElementById("middle-img");
middle_img_src.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// all h4 tags on page
let h4 = document.querySelectorAll("h4");
// itemized - h4 tags
const features_h4 = document.getElementsByTagName("h4")[0];
features_h4.textContent = siteContent["main-content"]["features-h4"];

const about_h4 = document.getElementsByTagName("h4")[1];
about_h4.textContent = siteContent["main-content"]["about-h4"];

const services_h4 = document.getElementsByTagName("h4")[2];
services_h4.textContent = siteContent["main-content"]["services-h4"];

const product_h4 = document.getElementsByTagName("h4")[3];
product_h4.textContent = siteContent["main-content"]["product-h4"];

const vision_h4 = document.getElementsByTagName("h4")[4];
vision_h4.textContent = siteContent["main-content"]["vision-h4"];

// contact styling ///////////////////////////
// const contact_h4 = document.querySelectorAll("h4")[5];
// contact_h4.textContent = siteContent["contact"]["contact-h4"]

// all p tags on page
let p = document.querySelectorAll("p");
// itemized - p tags
const features_content = document.getElementsByTagName("p")[0];
features_content.textContent = siteContent["main-content"]["features-content"];

const about_content = document.getElementsByTagName("p")[1];
about_content.textContent = siteContent["main-content"]["about-content"];

const services_content = document.getElementsByTagName("p")[2];
services_content.textContent = siteContent["main-content"]["services-content"];

const product_content = document.getElementsByTagName("p")[3];
product_content.textContent = siteContent["main-content"]["product-content"];

const vision_content = document.getElementsByTagName("p")[4];
vision_content.textContent = siteContent["main-content"]["vision-content"];

///////////////////////// contact ////////////////////////////////////
// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },

// contact h4  / itemized///////////
const contact_h4 = document.getElementsByTagName("h4")[5];
contact_h4.textContent = siteContent["contact"]["contact-h4"]

// all contact p tags / itemized //////
const address = document.getElementsByTagName("p")[5];
address.textContent = siteContent["contact"]["address"]

const phone = document.getElementsByTagName("p")[6];
phone.textContent = siteContent["contact"]["phone"]

const email = document.getElementsByTagName("p")[7];
email.textContent = siteContent["contact"]["email"]

/////////////////////////////////  footer //////////////////////////////////
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// }

// footer copyright
const footer = document.getElementsByTagName("p")[8];
footer.textContent = siteContent["footer"]["copyright"]














