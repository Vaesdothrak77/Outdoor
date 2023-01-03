const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}



const animItems = document.querySelectorAll('.anim__items');

if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemsHeight = animItem.offsetHeight;
      const animItemOffSet = offSet(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemsHeight / animStart;
      if(animItemsHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemsHeight / animStart;
      }

      if((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemsHeight)) {
        animItem.classList.add('active__class');
      } else {
          if(!animItem.classList.contains('_anim-no-hide')){
          animItem.classList.remove('active__class');
        }
      }
    }
  }
  function offSet(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
