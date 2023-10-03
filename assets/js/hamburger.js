const toggleButton =document.getElementById('toggle_menu_button');
const navList = document.getElementById('nav_list');
var x =0;


toggleButton.addEventListener("click", () => {
  if(x==0){
    navList.classList.toggle('active');
    toggle_menu_button.innerHTML ='<i class="fa-solid fa-xmark fa-lg"></i>';
    x=1;
  }else{
    navList.classList.toggle('active');
    toggle_menu_button.innerHTML='<i class="fa-solid fa-bars fa-lg"></i>';
    x=0;
  }
} );


// -----------header backgorund color on scroll---------------

window.addEventListener("scroll", ()=>{
const navHeader =document.getElementById('header');
 var scrollValue =window.scrollY;
 
 if(scrollValue<64){
   navHeader.style.backgroundColor="";
   navHeader.style.transition = 'background-color 0.3s ease-in-out';
 }else{
   navHeader.style.backgroundColor="#683bff";
   navHeader.style.transition = 'background-color 0.3s ease-in-out';
 }
  
});


// =============day and night mode==============
const dyBtn = document.getElementById('d_n_toggle_icon');
const root = document.documentElement;
const svg = document.querySelectorAll('svg path');
const footer = document.getElementById('contact');
var y = 0;

const savedMode = localStorage.getItem('mode');


function toggleMode() {
  if (y == 0) {
    setDarkMode();
    y=1;
  } else {
    setLightMode();
    y=0;
  }
}


function setDarkMode() {
  document.body.style.backgroundColor = 'black';
  root.style.setProperty('--black-text-color', '#fff');
  

  svg.forEach((path) => {
    path.style.fill = 'black';
  });
  
  footer.style.backgroundColor = '#0e0535';
  dyBtn.innerHTML = '<i class="fa-solid fa-sun fa-lg"></i>';
  u = 1;
  
  localStorage.setItem('mode', 'dark');
}

function setLightMode() {
  document.body.style.backgroundColor = '';
  root.style.setProperty('--black-text-color', '');
  
  svg.forEach((path) => {
    path.style.fill = '#fff';
  });
  
  footer.style.backgroundColor = '';
  dyBtn.innerHTML = '<i class="fa-solid fa-moon fa-lg"></i>';
  y = 0;
  
  localStorage.setItem('mode', 'light');
}


dyBtn.addEventListener('click', toggleMode);

if (savedMode === 'dark') {
  setDarkMode();
} else {
  setLightMode();
}
