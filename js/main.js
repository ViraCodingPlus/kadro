// Get the button
var mybutton = document.getElementById("back-to-top");
var chatbutton = document.getElementById("chat-button");

// swiper element
const swiperEl = document.getElementById('swiper-container1');
const swiperEl2 = document.getElementById('swiper-container2');
const swiperEl3 = document.getElementById('swiper-container3');
const swiperEl4 = document.getElementById('swiper-container4');
const swiperEl5 = document.getElementById('swiper-container5');


// mega menu element
const MegaMenu = document.getElementById('mega-menu-dropdown');
const MegaMenuButton = document.getElementById('mega-menu-dropdown-button');


// dropdown mobile menu element
const DropdownMenuButton = document.getElementById('dropdown-menu-button');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    // scrollFunction();
};
MegaMenu.onmouseover=function() {
  MegaMenuButton.style.backgroundColor = '#F9F9F9BF';
  MegaMenuButton.style.boxShadow='0px 65px 120px 0px #0000002E';
}
MegaMenu.onmouseleave=function() {
  MegaMenuButton.style.backgroundColor = '';
  MegaMenuButton.style.boxShadow='';
}
DropdownMenuButton.onclick=function() {
  document.getElementById('dropdown-menu-opened').classList.toggle('hidden');
  document.getElementById('dropdown-menu-closed').classList.toggle('hidden');

}
function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        mybutton.style.display = "flex";
        chatbutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
        chatbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};



// swiper parameters
const swiperParams1 = {
  slidesPerView: 3,
  spaceBetween:1,
  loop:true,
  navigation:true,
  centeredSlides:true,
  breakpoints: {
    340: {
      slidesPerView: 1.5,
      spaceBetween:10,
      centeredSlides:true,
    },
    640: {
      slidesPerView: 2.5,
      centeredSlides:true,
      spaceBetween:0
    },
    1024: {
      slidesPerView: 3,
      spaceBetween:1,
      
    },
  },
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },
  on: {
    init() {
      // Example: Set the active slide to the second slide (index 1) after initialization
      this.slideTo(1, 0); // (slide index, transition speed in ms)
    },
  },
};
const swiperParams2 = {
  slidesPerView: 3,
  spaceBetween:1,
  loop:true,
  navigation:true,
  centeredSlides:true,
  breakpoints: {
    340: {
      slidesPerView: 1.5,
      spaceBetween:10,
      centeredSlides:true,
    },
    640: {
      slidesPerView: 2,
      spaceBetween:15,
      centeredSlides:true,
      loop:true,
      
    },
    800: {
      slidesPerView:3,
      spaceBetween:15,
      centeredSlides:true,
      loop:true,
      
    },
    1024: {
      slidesPerView: 4,
      spaceBetween:20,
      centeredSlides:true,
      
    },
    1250: {
      loop:true,
      slidesPerView: 3,
      spaceBetween:20,
      
    },
  },
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },
  on: {
    init() {
      // Example: Set the active slide to the second slide (index 1) after initialization
      this.slideTo(1, 0); // (slide index, transition speed in ms)
    },
  },
};
const swiperParams3 = {
  slidesPerView: 3,
  spaceBetween:1,
  loop:true,
  navigation:false,
  breakpoints: {
    340: {
      slidesPerView: 1.2,
      spaceBetween:10,
      centeredSlides:true,
      allowTouchMove: true
    },
    640: {
      slidesPerView: 2,
      spaceBetween:15,
      centeredSlides:true,
      allowTouchMove: true
      
    },
    800: {
      slidesPerView:3,
      spaceBetween:15,
      centeredSlides:true,
      allowTouchMove: true
      
    },
    1024: {
      slidesPerView: 4,
      spaceBetween:20,
      centeredSlides:true,
      allowTouchMove: true
    },
    1250: {
      slidesPerView: 3,
      spaceBetween:20,
      clickable:false,
      allowTouchMove: false
      
    },
  },
  on: {
    init() {
      // Example: Set the active slide to the second slide (index 1) after initialization
      this.slideTo(1, 0); // (slide index, transition speed in ms)
    },
  },
};
const swiperParams4 = {
  slidesPerView: 3,
  spaceBetween:1,
  loop:true,
  navigation:false,
  breakpoints: {
    340: {
      slidesPerView: 4,
      spaceBetween:10,
      allowTouchMove: true
    },
    640: {
      slidesPerView: 5,
      spaceBetween:15,
      allowTouchMove: true
      
    },
    800: {
      slidesPerView:6,
      spaceBetween:30,
      allowTouchMove: true
      
    },
    1024: {
      slidesPerView: 8,
      spaceBetween:20,
      allowTouchMove: true
    },
    1250: {
      slidesPerView: 10,
      spaceBetween:20,
      clickable:false,
      allowTouchMove: false
      
    },
  },
  on: {
    init() {
      // Example: Set the active slide to the second slide (index 1) after initialization
      this.slideTo(1, 0); // (slide index, transition speed in ms)
    },
  },
};


// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams1);
Object.assign(swiperEl2, swiperParams2);
Object.assign(swiperEl3, swiperParams3);
Object.assign(swiperEl4, swiperParams3);
Object.assign(swiperEl5, swiperParams4);

// and now initialize it
swiperEl.initialize();
swiperEl2.initialize();
swiperEl3.initialize();
swiperEl4.initialize();
swiperEl5.initialize();
