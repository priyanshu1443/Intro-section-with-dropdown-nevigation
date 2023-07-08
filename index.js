
const feature = document.getElementById('feature');
const features = document.getElementById("features")
const company = document.getElementById('company');
const companys = document.getElementById('companys');
const nav = document.getElementById('nav');
const nav_items = document.getElementById('nav_items');
const loginout = document.getElementById('loginout');


const arrow = document.getElementsByClassName('arrow');


var featureshow = 0
var companyshow = 0
var navshow = 0


nav.onclick = () => {
  if (navshow === 0) {
    nav_items.style.display = 'block';
    nav.src = './images/icon-close-menu.svg'
    nav.style.zIndex = 3
    navshow = 1
  } else {
    nav_items.style.display = 'none';
    nav.src = './images/icon-menu.svg'
    navshow = 0
  }
}

const changestyle = (ele, n1 = 0) => {
  if (n1 === 1) {
    ele.style.position = 'unset';
    ele.style.boxShadow = 'none';
    ele.style.padding = '0 0 0 2rem';
  } else {
    ele.style.position = 'relative';
    ele.style.boxShadow = '1px 1px 12px rgb(226, 223, 223)';
    ele.style.padding = '2rem 0 2rem 2rem';
  }
}

feature.onclick = () => {
  if (featureshow === 0) {
    arrow[0].src = './images/icon-arrow-up.svg';
    features.style.display = 'flex';
    featureshow = 1;
    if (window.innerWidth <= 769) {
      feature.style.height = '21rem';
      changestyle(features, 1)
      companyshow === 1 ? loginout.style.top = '59rem' : loginout.style.top = '48rem';
    }
  }
  else {
    arrow[0].src = "./images/icon-arrow-down.svg";
    features.style.display = 'none';
    featureshow = 0;
    if (window.innerWidth <= 769) {
      feature.style.height = "5rem"
      changestyle(features)
      companyshow === 1 ? loginout.style.top = "43rem" : loginout.style.top = '32rem';
    }
  }
}

company.onclick = () => {
  if (companyshow === 0) {
    arrow[1].src = './images/icon-arrow-up.svg';
    companys.style.display = 'flex';
    companyshow = 1;
    if (window.innerWidth <= 769) {
      company.style.height = '16rem';
      changestyle(companys, 1)
      featureshow === 1 ? loginout.style.top = '59rem' : loginout.style.top = '43rem';
    }
  }
  else {
    arrow[1].src = "./images/icon-arrow-down.svg";
    companys.style.display = 'none';
    companyshow = 0
    if (window.innerWidth <= 769) {
      company.style.height = '5rem';
      changestyle(companys)
      featureshow === 1 ? loginout.style.top = "48rem" : loginout.style.top = '32rem';
    }
  }
}