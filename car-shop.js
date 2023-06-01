let document = $;
let searchContainer = $.querySelector(".search-input");
let search = $.querySelector("input");
let suggestionsBox = $.querySelector(".autocom-box");
let searchButton = $.querySelector(".icon");

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
}


function searching() {
  let searchValue = search.value.toLowerCase();
  if (searchValue) {
    searchContainer.classList.add("active");
    suggestionsBox.innerHTML = "";

    let selectedSuggestions = suggestions.filter(function (word) {
      return word.toLocaleLowerCase().includes(searchValue);
    });

    if (selectedSuggestions.length) {
      suggestionsBoxGenerator(selectedSuggestions);
    } else {
      let unFindSuggestion = $.createElement("li");
      suggestionsBox.append(unFindSuggestion);
      unFindSuggestion.innerHTML = search.value;
      unFindSuggestion.addEventListener("click", selectingSuggestion);
    }
  } else {
    searchContainer.classList.remove("active");
  }
}

function suggestionsBoxGenerator(selectedSuggestions) {
  let suggestionsBoxFragment = new DocumentFragment();
  selectedSuggestions.forEach(function (selectedSuggestion) {
    let findSuggestion = $.createElement("li");
    findSuggestion.innerHTML = selectedSuggestion;
    findSuggestion.addEventListener("click", selectingSuggestion);
    suggestionsBoxFragment.append(findSuggestion);
  });
  suggestionsBox.append(suggestionsBoxFragment);
}
function selectingSuggestion(event) {
  search.value = event.target.textContent;
  searchContainer.classList.remove("active");
}
search.addEventListener("input", searching);
generateProducts();
window.addEventListener("load", getFromLocalStorage);

function test(){
  console.log("test");
}


