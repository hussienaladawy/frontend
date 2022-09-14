// const accordion = document.getElementsByClassName('container');

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// // }
// $(document).ready(function(){
// $('#icon').click(function(){
// $('ul').toggleclass('show');
// });
// });
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();







const you = document.getElementsByClassName('container');
for (i=0; i<you.length; i++) {
you[i].addEventListener('click',good)

}
function good(){
  this.classList.toggle('active')
}
/******scroll btn dawn footer */
let icon = document.querySelector(".up")
window.onscroll = function(){
 if (this.scrollY>=1000){
icon.classList.add("show")
 }else{
  icon.classList.remove("show")
 }
};
icon.onclick = function () {

  window.scrollTo({
     top:0,
     behavior:"smooth",
  });
    
};
/*end footer scroll code */
// /**test js */
// document.querySelector('.btn-1').addEventListener('click',open)


// function open(){
//   const you = document.getElementsByClassName('container');
// }
