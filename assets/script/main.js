jQuery(document).ready(function($){

    /*$(window).scroll(function(){

        if($(this).scrollTop()>100){
            $('.topo').fadeIn();
        }

        else{
            $('.topo').fadeOut();
        }
    });*/

    $('.topo').click(function(){
        $('body, html').animate({

            scrollTop: 0
        }, 600);

        return false;
    });

});






const menuLinks = document.querySelectorAll('#menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}




/*Menu Ativo*/

const sections = document.querySelectorAll(".section-container");

const navLi = document.querySelectorAll("#menu ul li");

window.addEventListener("scroll", () => {
  
    let current = "";
  
    sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      
        current = section.getAttribute("id");
    
    }
  
});

  
navLi.forEach((li) => {
    
    li.classList.remove("action");
    
    if (li.classList.contains(current)) {
      
        li.classList.add("action");
    
    }
  
});

});
