function addListeners () {
  document.querySelectorAll("li").forEach(
    menuItem => menuItem.onclick = () => showOnly(menuItem)
  )
}	

addListeners();
function showOnly(page) {	    
  document.querySelectorAll(".description").forEach(
    descriptionDiv => {
      descriptionDiv.style.opacity = 0;
      descriptionDiv.style.left = "100%";
    }
  )	    
  document.querySelector( "#description-of-" + page.innerHTML ).style.opacity = 1;
  document.querySelector( "#description-of-" + page.innerHTML ).style.left = "1%";
 
}

let currentSlideOffset = 0 ;
const lastSlideOffset = 6 ;
const slide = direction => {
  if (direction === "forward") {
    if ( currentSlideOffset == lastSlideOffset ) {
      return ;
    } else {
      currentSlideOffset++ ;
    }
  } else if ( direction === "back" ) {
    if ( currentSlideOffset == 0 ) {
      return ;
    } else {
      currentSlideOffset-- ;
    }
  } ;
  document.querySelector("#frieze").style.transform = `translateX( ${ currentSlideOffset * -30 }vw )` ;
} ;
