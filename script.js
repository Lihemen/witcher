"use strict";
// Populate the products carousel with products
const watches_carousel = document.querySelector(".product_showcase");

function populateCarousel() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "watches.json");
  xhr.send(null);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.forEach((watch) => {
        watches_carousel.innerHTML += `
        <article>
          <div class="single_product">
            <div class="product_info">
              <h1 class="product_title">
                ${watch.name} <span class="underline"></span>
              </h1>
              <p class="product_about">
                ${watch.description}
              </p>
              <div class="product_prices">
                <h3>$${watch.priceList.discount_price} <small>USD</small></h3>
        
                <span>$${watch.priceList.price}</span>
                <span>You save: ${Math.round(
                  ((watch.priceList.price - watch.priceList.discount_price) /
                    watch.priceList.price) *
                    100
                )} (%)</span>
              </div>
              <button class="add_to_cart">Buy Now</button>
            </div>
            <div class="image_review">
              <img src=${watch.image} alt=${watch.name} />
              <div class="watch_review">
                <div class="ratings">
                  <div class="number d-flex">
                    <h2>${watch.ratings.value}</h2>
                    <small>RATED</small>
                  </div>
                  <div class="product_review">
                    ${showRating(watch.ratings.value)}
                  </div>
                </div>
                <div class="straps_count">
                  <h2>$${watch.straps}+</h2>
                  <p>STRAPS</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        `;
      });
    }
  };
}

// $(document).ready(function () {
//   // Initialize the products carousel
// });

// show the rating of the product
function showRating(rating) {
  const rate = parseFloat(rating);
  return rate === 1
    ? `<i class="fas fa-star"></i>`
    : rate > 1 && rate < 2
    ? `<i class="fas fa-star"></i><i class="fas fa-star-half-stroke"></i>`
    : rate === 2
    ? `<i class="fas fa-star"></i><i class="fas fa-star"></i>`
    : rate > 2 && rate < 3
    ? `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-stroke"></i>`
    : rate === 3
    ? `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa"></i>`
    : rate > 3 && rate < 4
    ? `<i class="fas fa-star"><i class="fas fa-star"></i></i><i class="fas fa-star"></i><i class="fas fa-star-half-stroke"></i>`
    : rate === 4
    ? `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa"></i>`
    : rate > 4 && rate < 5
    ? `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-stroke"></i>`
    : `
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      `;
}

// populateCarousel();

// start the carousel

$(".product_showcase").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
