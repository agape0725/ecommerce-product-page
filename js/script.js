'use strict'

//Conatainer Variables 

const mainContainer = document.querySelector('.main__container');
const leftColumn = document.querySelector('.col_left');
const rightColumn = document.querySelector('.col_right');

// Variables for Header Navgiation

const nav = document.querySelector('.nav');

// Variables for Left Column Image Navigation

const smallImagesContainer = document.querySelector(`.small_images_container`);
const smallImages = document.querySelectorAll(`.small-img`);
const mainImage = document.querySelector(`.main-img`);

//Variables for Right Column Increment or Decrement Quantity 

const minusButton = document.querySelector('.minus-icon');
const plusButton = document.querySelector('.plus-icon');
let quantity = document.querySelector('.quantity');

// Variables for Hidden Container 

const leftColumnHidden = document.querySelector('.col_left--hidden');
const smallImagesContainerHidden = document.querySelector('.small_images_container--hidden');
const smallImagesHidden = document.querySelectorAll('.small-img--hidden');
const mainImageHidden = document.querySelector('.main-img--hidden');

//Variables for Cart Final Input

const addToCartButton = document.querySelector('.addtocart-button');
const addedProductImage = document.querySelector('.addedtocart-product-img');
const addedProductTitle = document.querySelector('.addedtocart-product-title');
const addedProductPrice = document.querySelector('.addedtocart-product-price');
const addedProductQuantity = document.querySelector('.addedtocart-quantity');
const addedTotalAmount = document.querySelector('.addedtocart-product-total-amount');
const originalPrice = document.querySelector('.original-price');
const originalQuantity = document.querySelector('.quantity');
const cartDiv = document.querySelector('.my_cart_div');
const origPriceParse = parseInt(originalPrice.textContent);

// Variables for Pressing Cart Icon, Checkout, Delete button

const cartIcon = document.querySelector('.cart-icon');
const myCart = document.querySelector('.my_cart_container');
const checkoutButton = document.querySelector('.checkout-button');
const addedNone = document.querySelector('.display_none');
const cartNotification = document.querySelector('.cart_icon_container');

//Variables for Close Modal and Delete Product in Cart

const closeIcon = document.querySelector('.close-icon');
const addedDeleteIcon = document.querySelector('.addedtocart-delete-icon');

// Variables for Slide Image Button

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Header Navigation //   // Header Navigation //   // Header Navigation // 

// H.Nav Header Hover Suppress

nav.addEventListener('mouseover', function (e) {
  
  const link = e.target;
  const navList = link.closest('.nav').querySelectorAll('li');

  if (!link) return;

  navList.forEach(nl => {
    if (nl !== link) {
      nl.style.opacity = .6;
    } else {
      nl.style.opacity = 1;
    }
  })
  
})

// H.Nav Header Hover Release

nav.addEventListener('mouseout', function (e) {
  
  const link = e.target;
  const navList = link.closest('.nav').querySelectorAll('li');

  if (!link) return;

  navList.forEach(nl => {
    if (nl !== link) {
      nl.style.opacity = 1;
    } else {
      nl.style.opacity = 1;
    }
  })
  
})

// Left Column Navigation //  // Left Column Navigation //  // Left Column Navigation // 

// Left.Col Image Clicked, Open Modal.

leftColumn.addEventListener('click', function (e) {
  
  const link = e.target;
  const productImages = link.closest('.product-img');

  if (!productImages) return;

  // document.querySelector(`.small-img--hidden[data-slide="${1}"]`).classList.add('small-img--active');
  leftColumnHidden.classList.add('col_left--active');
  mainContainer.classList.add('blurred');
  e.preventDefault();

})

// Left.Col Hover Suppress

smallImagesContainer.addEventListener('mouseover', function (e) {

    const imageSlide = e.target.dataset.slide;

  if (!imageSlide) return;

  smallImages.forEach(si => {
    si.classList.remove('small-img--active');

    if (imageSlide === '1') {
      mainImage.setAttribute('src', `images/image-product-${imageSlide}.jpg`)
      document.querySelector(`.small-img[data-slide="${imageSlide}"]`).classList.add('small-img--active');
    } else if (imageSlide === '2') {
      mainImage.setAttribute('src', `images/image-product-${imageSlide}.jpg`)
      document.querySelector(`.small-img[data-slide="${imageSlide}"]`).classList.add('small-img--active');
    } else if (imageSlide === '3') {
      mainImage.setAttribute('src', `images/image-product-${imageSlide}.jpg`)
      document.querySelector(`.small-img[data-slide="${imageSlide}"]`).classList.add('small-img--active');
    } else if (imageSlide === '4') {
      mainImage.setAttribute('src', `images/image-product-${imageSlide}.jpg`)
      document.querySelector(`.small-img[data-slide="${imageSlide}"]`).classList.add('small-img--active');
    }
  })

})

// Right Column Navigation //  // Right Column Navigation //  // Right Column Navigation // 

plusButton.addEventListener('click', function (e) {

  if (parseInt(quantity.textContent) >= 6) {
    quantity.textContent = 6;
  } else {
    quantity.textContent++;
  }
})

minusButton.addEventListener('click', function (e) {

  if (parseInt(quantity.textContent) === 1) {
    quantity.textContent = 1;
  } else {
    quantity.textContent--;
  }
})

// Hidden Column //   // Hidden Column //   // Hidden Column // 

//H.Col Clicked Small Images 

smallImagesContainerHidden.addEventListener('click', function (e) {

  const link = e.target;
  const imageSlide = parseInt(link.dataset.slide);

  if (!imageSlide) return;
  
  smallImagesHidden.forEach(sih => {
    sih.classList.remove('small-img--active');
    if (imageSlide === 1) {
      mainImageHidden.setAttribute('src', `images/image-product-${imageSlide}.jpg`)
      document.querySelector(`.small-img--hidden[data-slide="${imageSlide}"]`).classList.add('small-img--active');
    } else if (imageSlide === 2) {
      mainImageHidden.setAttribute('src', `images/image-product-${imageSlide}.jpg`)
      document.querySelector(`.small-img--hidden[data-slide="${imageSlide}"]`).classList.add('small-img--active');
    } else if (imageSlide === 3) {
      mainImageHidden.setAttribute('src', `images/image-product-${imageSlide}.jpg`)
      document.querySelector(`.small-img--hidden[data-slide="${imageSlide}"]`).classList.add('small-img--active');   
    } else if (imageSlide === 4) {
      mainImageHidden.setAttribute('src', `images/image-product-${imageSlide}.jpg`)
      document.querySelector(`.small-img--hidden[data-slide="${imageSlide}"]`).classList.add('small-img--active');
      
    }
  })

  if (currentSlide !== imageSlide) {
    currentSlide = imageSlide;
  }

  activateDots(imageSlide);
  
})

//H.Col Created Dots 

const dotsContainer = document.querySelector('.dot'); 

const createdDotes = function() {
  smallImagesHidden.forEach((_, index) => {
    dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-dot="${index + 1}"></button>`)
  })
}

createdDotes();

//H. Col Activate Dot

const activateDots = function(activeDot) {

  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-dot="${(activeDot)}"]`).classList.add('dots__dot--active');

  if (activeDot === 4) {
    // nextButton.style.backgroundColor = 'lightgray';
    nextButton.classList.add('button--disable');
    prevButton.classList.remove('button--disable');
  } else if (activeDot === 1) {
    prevButton.classList.add('button--disable');
    nextButton.classList.remove('button--disable');
  } else {
    nextButton.classList.remove('button--disable');
    prevButton.classList.remove('button--disable');
  }
  
}

activateDots(1);

//H.Col Image Update Slide

const updateSlide = function(update) {
  mainImageHidden.setAttribute('src', `images/image-product-${update}.jpg`)
  smallImagesHidden.forEach(sih => {
    sih.classList.remove('small-img--active');
    document.querySelector(`.small-img--hidden[data-slide="${update}"]`).classList.add('small-img--active');
  })
}

updateSlide(1);

//H.Col Click Previous and Next Image

let currentSlide = 1;

const nextImage = function() {

  if (currentSlide === smallImagesHidden.length) {
    currentSlide = smallImagesHidden.length;
  } else {
    currentSlide++;
    activateDots(currentSlide)
    updateSlide(currentSlide)
  }
}

const prevImage = function() {
  if (currentSlide === 1) {
    currentSlide = 1;
  } else {
    currentSlide--;
    activateDots(currentSlide)
    updateSlide(currentSlide)
  }
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

//H.Col Close Modal

closeIcon.addEventListener('click', function (e) {
  leftColumnHidden.classList.remove('col_left--active');
  mainContainer.classList.remove('blurred');
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    leftColumnHidden.classList.remove('col_left--active');
    mainContainer.classList.remove('blurred');

    myCart.classList.remove('my_cart_container--active');
  }
})

// Hidden Added to Cart //  // Hidden Added to Cart //   // Hidden Added to Cart // 

// H.Add Add to cart button Click

let concatPrice = originalPrice.textContent = '$' + `${originalPrice.textContent}` + '.00';

addToCartButton.addEventListener('click', function (e) {

  checkoutButton.textContent = 'Checkout';
  checkoutButton.style.opacity = '1';
  checkoutButton.style.cursor = 'pointer';
  
  cartNotification.classList.add('cart_icon_container--active');
  cartDiv.classList.add('my_cart_div--active');
  myCart.classList.remove('my_cart_container--active');

  addedProductImage.src = 'images/image-product-3-thumbnail.jpg';
  addedProductTitle.textContent = document.querySelector('.product-title').textContent
  addedProductPrice.textContent = concatPrice;
  addedProductQuantity.textContent = '( ' + `${originalQuantity.textContent}` + ' )';
  addedTotalAmount.textContent = '₱' + (origPriceParse * originalQuantity.textContent) + '.00';
  console.log(originalQuantity.textContent);

})

// H.Add Cart icon Click

cartIcon.addEventListener('click', function (e) {

  myCart.classList.toggle('my_cart_container--active');
  addedNone.classList.remove('display_none--active-delay');
  cartDiv.classList.remove('my_cart_div--active-delay');

  if (!cartDiv.classList.contains('my_cart_div--active')) {
    addedNone.classList.add('display_none--active');
    cartDiv.classList.add('my_cart_div--active');
  } else {
    addedNone.classList.remove('display_none--active');
    cartDiv.classList.remove('my_cart_div--active');
    cartNotification.classList.remove('cart_icon_container--active');
  }

})

addedDeleteIcon.addEventListener('click', function(e) {

  addedNone.classList.add('display_none--active');
  cartDiv.classList.add('my_cart_div--active');

})

// H.Add Checkout Click

checkoutButton.addEventListener('click', function(e) {

  checkoutButton.textContent = 'Purchased';
  checkoutButton.style.opacity = '0.7'; 
  checkoutButton.style.cursor = 'default';
})