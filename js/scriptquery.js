'use strict'

// Variables for Burger Icon

const burgerIcon = document.querySelector('.burger_icon');
const spanFirstChild = burgerIcon.firstElementChild;
const spanMiddleChild = document.querySelector('.burger_icon :nth-child(2)');
const spanLastChild = burgerIcon.lastElementChild;

const navList = document.querySelector('.nav_list, li');

// Variables for Slide Image, Button, and Container

const slideContainer = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
const fqPrevButton = document.querySelector('.prev-button-forquery');
const fqNextButton = document.querySelector('.next-button-forquery');
const fqMaxSlide = slide.length - 1;
let fqCurrentSlide = 0;

// Burger Icon // 

burgerIcon.addEventListener('click', function (e) {

  burgerIcon.classList.toggle('burger_icon--active');
  navList.classList.toggle('nav_list--active');

})

// Image Slider // 

// Slide Image

const slideUpdate = function(update) {
  slide.forEach((s, index) => {
    s.style.transform = `translateX(${100 * (index - update)}%)`
  })
}

slideUpdate(0);

// Next Slide

const nextSlide = function() {
  if (fqCurrentSlide === fqMaxSlide) {
    fqCurrentSlide = 0;
  } else {
    fqCurrentSlide++;
  }

  slideUpdate(fqCurrentSlide);
  fqActivateDots(fqCurrentSlide);
}

// Previous Slide 

const prevSlide = function() {
  if (fqCurrentSlide === 0) {
    fqCurrentSlide = fqMaxSlide;
  } else {
    fqCurrentSlide--;
  }

  slideUpdate(fqCurrentSlide);
  fqActivateDots(fqCurrentSlide);

}

// Navigate Next and Previous slide using button click

fqNextButton.addEventListener('click', nextSlide)
fqPrevButton.addEventListener('click', prevSlide)

// Navigate Next and Previous slide using arrow keys

const arrowKeysNextPrev = function() {
  document.addEventListener('keydown', function(e) {
        
    if (e.key === 'ArrowRight') {
      nextSlide();
    }

    if (e.key === 'ArrowLeft') {
      prevSlide();
    }
    
  })
}

arrowKeysNextPrev();

//Created Dots FQ

const fqDotsContainer = document.querySelector('.dot-forquery');

const fqCreatedDots = function() {
  slide.forEach((_, index) => {
    fqDotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot_forquery" data-dot-forquery="${index}"></button>`)
  })
}

fqCreatedDots();

//Activate Dots FQ

const fqActivateDots = function(ad) {
  document.querySelectorAll(`.dots__dot_forquery`).forEach(dot => { dot.classList.remove('dots__dot--active');
    document.querySelector(`.dots__dot_forquery[data-dot-forquery="${ad}"]`).classList.add('dots__dot--active');
  })
}

fqActivateDots(0);

fqDotsContainer.addEventListener('click', function (e) {
  const link = e.target;
  const slideDot = link.closest('.dots__dot_forquery');

  if (!slideDot) return;

  document.querySelectorAll(`.dots__dot_forquery`).forEach(dot => {
    dot.classList.remove('dots__dot--active');
    document.querySelector(`.dots__dot_forquery[data-dot-forquery="${slideDot.dataset.dotForquery}"]`).classList.add('dots__dot--active');
  })

  if (fqCurrentSlide != parseInt(slideDot.dataset.dotForquery)) {
    fqCurrentSlide = parseInt(slideDot.dataset.dotForquery);
  } 

  slideUpdate(slideDot.dataset.dotForquery);

})



// const productImageOption = {
//   root: null,
//   threshold: 1,
// }

// const productImageObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {

//     if (entry.isIntersecting) {
//       console.log('true');
//       arrowKeysNextPrev();
//     } else {
//       console.log('false');
      
//     }

//   })  
// }, productImageOption)

// const header = document.querySelector('header');

// productImageObserver.observe(header);




