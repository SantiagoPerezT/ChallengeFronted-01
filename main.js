const btnFeature = document.querySelector('#Featurebtn');
const MenuFeature = document.querySelector(".menu-features");
const btnCompany = document.querySelector('#Companybtn');
const MenuCompany = document.querySelector(".menu-company");

btnFeature.addEventListener('click', toggleMenuFeature);

function toggleMenuFeature() {
    MenuFeature.classList.toggle('inactive');
}

btnCompany.addEventListener('click', toggleMenuCompany)

function toggleMenuCompany() {
    MenuCompany.classList.toggle('inactive');
}