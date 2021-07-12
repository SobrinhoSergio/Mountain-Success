const sections = document.querySelectorAll(".section-container");

const navLi = document.querySelectorAll("#nav ul li");

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
