const portfolio_photoshop =[
    {
        title: "Facebook - Logo",
        url:"./img/logo/facebook_logo.jpg"
    },
    {
        title: "messenger - Logo",
        url: "./img/logo/msgLogo.jpg"
    },
    {
        title: "Drop - Logo",
        url: "./img/photoshop/drop.jpg"
    },
    {
        title: "Sabin - Photoshop",
        url: "./img/photoshop/spPstp.jpg"
    },
    {
        title: "Logo1",
        url: "./img/logo/logo1.jpg"
    },
    {
        title: "Ogads - Logo",
        url: "./img/logo/OGAds.jpg"
    }
]

const portfolio_websites=[
    {
        title: "History of Nepal - Website",
        url:"./img/websites/history_of_nepal.jpg",
        link: "./kingdoms/index.html"
    }
]


for(var i=0; i<portfolio_photoshop.length; i++){
    document.getElementById('portfolio_container').innerHTML +=`
        <div class="contents">
            <div>
                <img src="${portfolio_photoshop[i].url}" alt="logo${i}">
                <p>${portfolio_photoshop[i].title}</p>
            </div>
        </div>
    `;
}


for(var i=0; i<portfolio_websites.length; i++){
    document.getElementById('portfolio_container').innerHTML +=`
        <div class="contents">
            <div>
                <img src="${portfolio_websites[i].url}" alt="Ancient Nepal">
                <p><a href="${portfolio_websites[i].link}" target="_blank">${portfolio_websites[i].title}</a></p>
            </div>
        </div>
    `;
}


// All the sections are here


const mobileMenu = document.getElementById("mobile_nav_links");
const nav_mobile = document.getElementById('nav_mobile');

// Navigation menus
const about = document.querySelector('.nav_about');
const portfolio = document.querySelector('.nav_portfolio');
const contact = document.querySelector('.nav_contact');


// Adding a active class to the given id and showing the three bars.
nav_mobile.addEventListener('click', function(){
    nav_mobile.classList.toggle('active');
});

// Shows mobile menu after clicking ham-bar.
function showMobileMenu(){
    if(mobileMenu.style.display !== 'block'){
        mobileMenu.style.display = "block";
    }
    else{
        mobileMenu.style.display = "none";
    }
}

// Functions to scroll down to about, portfolio and contact sections from top nav.
about.addEventListener('click', scrollToAbout);
function scrollToAbout(){
    const aboutSection = document.querySelector('.expand-about');
    const aboutHeading = document.querySelector('.aboutHeading');
    const aboutPrg = document.querySelector('.aboutPrg');

    // aboutSection.scrollIntoView({ behavior: 'smooth' });
    aboutHeading.classList.toggle('animate__bounceIn');
    aboutPrg.classList.toggle('animate__slideInUp');
}

// Scroll Contact
contact.addEventListener('click', scrollToContact);
function scrollToContact(){
    const footIcons=document.querySelector('.foot-icons');
    footIcons.classList.toggle('animate__jello');
}

// Scroll Portfolio
portfolio.addEventListener('click', scrollToPortfolio);
function scrollToPortfolio() {
    document.querySelector('.portfolioHeading').classList.toggle('animate__tada');
}

// scroll >200px ==> display scroll up arrow
window.addEventListener('scroll', function(){
    const moveTopIcon = document.querySelector('.move-to-top');
    // moveTopIcon.style.display = 'block';
    if (window.scrollY === 0) {
        moveTopIcon.style.display = 'none';
      } else {
        moveTopIcon.style.display = 'block';
      }
});