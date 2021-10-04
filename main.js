const swiper = new Swiper('.swiper-one', {
  // Optional parameters
  loop: true,
  autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
  
 spaceBetween: 10,
  centeredSlides: true,
 breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },


 
});
const preloader = document.querySelector(".preloader")

window.addEventListener("load", disppear )

function disppear (){
 preloader.classList.add("disppear")
}
const swiper2 = new Swiper('.swiper-two', {
  // Optional parameters
  loop: true,
  autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
  spaceBetween: 10,
  centeredSlides: true,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 5,
    },
  },


 
});

const swiper3 = new Swiper('.arhive1', {
  // Optional parameters
  loop: true,
  autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
       
  spaceBetween: 10,
  centeredSlides: true,
 
 breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },


 
});
const swiper4 = new Swiper('.arhive2', {
  // Optional parameters
  loop: true,
  autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
       
  spaceBetween: 10,
  centeredSlides: true,
 
 breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },


 
});
var input = document.querySelector(".search-form")
var serachIcon =document.querySelector("#serach-icon")

serachIcon.addEventListener("click", ()=>{
  input.classList.toggle("active")
})

const swiper5 = new Swiper('.testemonial-swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
  
 spaceBetween: 10,
  centeredSlides: true,
 breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },


 
});

const swiper6 = new Swiper('.blog', {
  // Optional parameters
  loop: true,
  autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
  
 spaceBetween: 10,
  centeredSlides: true,
 breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },


 
});

document.getElementById("data").innerHTML =  new Date().getFullYear()

var largeScreen = document.querySelector(".large-screen")

window.addEventListener("scroll", ()=>{
  largeScreen.classList.toggle("sticky", window.scrollY > 0)
})

gsap.to(".header-holder", {
  scrollTrigger: {
    scrub: 1
  },
  scale: 0.5
})

gsap.to(".icon-container ", {
  scrollTrigger: {
    scrub: 1
  },
  x: 500
})
gsap.to(".featured-books", {
  scrollTrigger: {
    scrub: 1
  },
  y: -400,
})
gsap.to(".subscribe", {
  scrollTrigger: {
    scrub: 1
  },
  x: -400,
})
gsap.to(".new-arhive", {
  scrollTrigger: {
    scrub: 1
  },
  x: 1700,
})
gsap.to(".deal .holder", {
  scrollTrigger: {
    scrub: 1
  },
  y: -200
})
gsap.to(".deal .img", {
  scrollTrigger: {
    scrub: 1
  },
  x: -500
})
gsap.to(".testemonial", {
  scrollTrigger: {
    scrub: 1
  }, 
  scale: 1
})
gsap.to(".blog-section", {
  scrollTrigger: {
    scrub: 1
  }, 
  scale: 1
})
gsap.to(".info", {
  scrollTrigger: {
    scrub: 1
  }, 
  scale: 1
})
