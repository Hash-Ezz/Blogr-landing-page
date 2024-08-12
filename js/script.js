let dropdown = document.querySelectorAll(".dropdown");
let homeMenu=document.querySelector('#home-menu');
let mobileMenu=document.querySelector('#mobile-menu');
let homeChildren=homeMenu.children;

//home-menu

homeMenu.addEventListener('click',function(){
    mobileMenu.classList.toggle('scale-0');
    homeChildren[0].classList.toggle('span1');
    homeChildren[1].classList.toggle('scale-0');
    homeChildren[2].classList.toggle('span3');
});


//dropdown menu

for (let i = 0; i < dropdown.length; i++) {

  dropdown[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    dropdown[i].classList.toggle('rotate');
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.paddingBottom = '0px';
        panel.style.paddingTop = '0px';
      } else {
        panel.style.maxHeight = 'min-content';
        panel.style.paddingBottom = '1.25rem';
        panel.style.paddingTop = '1.25rem';
      } 
  });
}