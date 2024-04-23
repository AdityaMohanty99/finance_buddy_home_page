// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked");
  sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

















































document.addEventListener('DOMContentLoaded', () => {
  
  //------ Slider Begin
	const CaroS = document.querySelector('.Carousel-slider');
	const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(CaroS);
	const CaroSTimer = 2000;
	let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    
  //------- Mouseenter Event
	CaroS.onmouseenter = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseleave Event
	CaroS.onmouseleave = function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseclick Event
	CaroS.onclick = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //------ Gesture Tap Event
	hammer.on('tap', function(e) {
		clearInterval(CaroAutoplay);
		console.log(e.type + ' gesture detected');
	});
  
  //----- Gesture Swipe Event
	hammer.on('swipe', function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' gesture detected');
	});

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  
  //---- Slider End
  
});





