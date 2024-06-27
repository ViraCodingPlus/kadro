// Get the button
var mybutton = document.getElementById("back-to-top");
var chatbutton = document.getElementById("chat-button");

// swiper element
const swiperEl = document.getElementById('swiper-container1');
const swiperEl2 = document.getElementById('swiper-container2');
const swiperEl3 = document.getElementById('swiper-container3');
const swiperEl4 = document.getElementById('swiper-container4');
const swiperEl5 = document.getElementById('swiper-container5');
const main_carousel_swiper = document.getElementById('main_carousel_swiper');


// mega menu element
const MegaMenu = document.getElementById('mega-menu-dropdown');
const MegaMenuButton = document.getElementById('mega-menu-dropdown-button');


// dropdown mobile menu element
const DropdownMenuButton = document.getElementById('dropdown-menu-button');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};
MegaMenu.onmouseover=function() {
  MegaMenuButton.style.backgroundColor = '#F9F9F9BF';
  MegaMenuButton.style.marginTop = '-8px';
  MegaMenuButton.style.borderRadius = '16px 16px 0 0';
  MegaMenuButton.style.boxShadow='0px 65px 120px 0px #0000002E';
}
MegaMenu.onmouseleave=function() {
  MegaMenuButton.style.backgroundColor = '';
  MegaMenuButton.style.marginTop = '';
  MegaMenuButton.style.borderRadius = '';
  MegaMenuButton.style.boxShadow='';
}
DropdownMenuButton.onclick=function() {
  document.getElementById('dropdown-menu-opened').classList.toggle('hidden');
  document.getElementById('dropdown-menu-closed').classList.toggle('hidden');

}
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
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

const listItems = document.querySelectorAll('#feature_list li');

    listItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            // Remove active class from all items
            listItems.forEach(li => li.classList.remove('active'));
            // Add active class to the hovered item
            item.classList.add('active');
        });

       
    });

document.getElementById('default-styled-select').addEventListener('change', function (e) {
  const targetId = e.target.selectedOptions[0].getAttribute('data-tabs-target');
  const tabContents = document.querySelectorAll('#default-styled-tab-content > div');

  tabContents.forEach(content => {
      if (content.id === targetId.substring(1)) {
          content.classList.remove('hidden');
      } else {
          content.classList.add('hidden');
      }
  });
});

document.getElementById('default-styled-select2').addEventListener('change', function (e) {
  const targetId = e.target.selectedOptions[0].getAttribute('data-tabs-target');
  const tabContents = document.querySelectorAll('#default-styled-tab-content2 > div');

  tabContents.forEach(content => {
      if (content.id === targetId.substring(1)) {
          content.classList.remove('hidden');
      } else {
          content.classList.add('hidden');
      }
  });
});

// swiper parameters
const swiperParams1 = {
  slidesPerView: 3,
  spaceBetween:1,
//   loop:true,
  navigation:true,
  centeredSlides:true,
  breakpoints: {
    340: {
      slidesPerView: 1.8,
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

const swiperParams5 = {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.main-swiper-button-next',
    prevEl: '.main-swiper-button-prev',
  },
  pagination: {
    el: '#main_carousel_dots',
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="dot ${className}"></div>`;
    },
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
      autoplay: true,
      direction: 'horizontal',
    },
    1250: {
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
      direction: 'vertical',
      navigation:false
    },
  },
  on: {
    slideChange: function () {
      const bullets = document.querySelectorAll('#main_carousel_dots .dot');
      bullets.forEach((bullet, index) => {
        bullet.classList.remove('active');
        if (index === this.activeIndex) {
          bullet.classList.add('active');
        }
      });
    },
  },
};


// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams1);
Object.assign(swiperEl2, swiperParams2);
Object.assign(swiperEl3, swiperParams3);
Object.assign(swiperEl4, swiperParams3);
Object.assign(swiperEl5, swiperParams4);
Object.assign(main_carousel_swiper, swiperParams5);

// and now initialize it
swiperEl.initialize();
swiperEl2.initialize();
swiperEl3.initialize();
swiperEl4.initialize();
swiperEl5.initialize();
main_carousel_swiper.initialize();
document.querySelector('#main_carousel_dots .dot').classList.add('active');
