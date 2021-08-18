
const listItems = document.querySelectorAll(".advantages__item"),
      imgs = document.querySelectorAll(".gellary__img");



window.addEventListener("scroll", throttleScroll, false);
let isScrolling = false;
function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}
document.addEventListener("DOMContentLoaded", scrolling, false);
function scrolling(e) {

  for (let i = 0; i < listItems.length; i++) {

    let listItem = listItems[i];

    if (isPartiallyVisible(listItem)) {
    
      listItem.classList.add("_active");
    }
  }

  for (let i = 0; i < imgs.length; i++) {

    let img = imgs[i];

    if (isPartiallyVisible(img)) {
    
        img.classList.add("_active");
    }
  }


  
}

function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}