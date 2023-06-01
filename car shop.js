let document = $;
let carsArray = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    capacity: 2,
    steering: "manual",
    gasoline: 70,
    price: 99,
    totalPrice: 99,
    favorite: false,
  },
  {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    capacity: 2,
    steering: "manual",
    gasoline: 80,
    price: 80,
    totalPrice: 100,
    favorite: false,
  },
  {
    id: 3,
    name: "Rolls-Royce",
    type: "Sport",
    capacity: 4,
    steering: "manual",
    gasoline: 70,
    price: 96,
    totalPrice: 96,
    favorite: false,
  },
  {
    id: 4,
    name: "All New Rush",
    type: "SUV",
    capacity: 6,
    steering: "manual",
    gasoline: 70,
    price: 72,
    totalPrice: 80,
    favorite: false,
  },
  {
    id: 5,
    name: "CR-V",
    type: "SUV",
    capacity: 6,
    steering: "manual",
    gasoline: 80,
    price: 80,
    totalPrice: 80,
    favorite: false,
  },
  {
    id: 6,
    name: "Al New Terios",
    type: "SUV",
    capacity: 2,
    steering: "manual",
    gasoline: 90,
    price: 74,
    totalPrice: 74,
    favorite: false,
  },
];
function generateProducts() {
    let productsContainer = $.querySelector(".products-container");
    let productsContainerFragment = new DocumentFragment();
    productsContainer.innerHTML = "";
    products.forEach((product) => {
      let outerProductContainer = $.createElement("div");
      outerProductContainer.classList.add("product-container-padding");
      outerProductContainer.insertAdjacentHTML(
        "beforeend",
        '<a class="product-container" href="./product details.html?id=' +
          product.id +
          '"target="_blank"><div class="product-details-top"><div class="product-image-container"><img src="' +
          product.image +
          '" alt="' +
          product.title +
          '" /><div class="product-description">' +
          product.description +
          '</div></div><div class="product-title">' +
          product.title +
          '</div></div><div class="product-details-bottom"><div class="product-price">$' +
          product.price +
          '</div><div class="add-to-cart" onclick="addingToCart(' +
          product.id +
          ',event)">Add to Cart</div></div></a>'
      );
      productsContainerFragment.appendChild(outerProductContainer);
    });
    productsContainer.append(productsContainerFragment);
    generatingPageButtons(productsList);
}
function getFromLocalStorage() {
    // let localFavoriteProducts;
    // if (localStorage.getItem("localFavoriteProducts")) {
    //   localFavoriteProducts = JSON.parse(
    //     localStorage.getItem("localFavoriteProducts")
    //   );
    //   productsInCart = localFavoriteProducts;
    // } else {
    //   productsInCart = [];
    // }
  generateProducts();
}

window.addEventListener("load", getFromLocalStorage);
