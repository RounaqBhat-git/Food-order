'use strict';

const restaurants = [
  {
    id: "urban-fork",
    name: "Urban Fork",
    cuisine: "International",
    rating: 4.5,
    image: "./assets/images/rest1.jpg",
    menu: [
      { category: "Starters", items: [
        { name: "Bruschetta", price: 180, veg: true },
        { name: "Chicken Wings", price: 280, veg: false },
        { name: "Nachos", price: 220, veg: true }
      ]},
      { category: "Mains", items: [
        { name: "Grilled Salmon", price: 520, veg: false, popular: true },
        { name: "Beef Burger", price: 380, veg: false },
        { name: "Veggie Bowl", price: 320, veg: true }
      ]},
      { category: "Desserts", items: [
        { name: "Cheesecake", price: 180, veg: true },
        { name: "Brownie Sundae", price: 200, veg: true }
      ]},
      { category: "Beverages", items: [
        { name: "Fresh Juice", price: 120, veg: true },
        { name: "Iced Tea", price: 100, veg: true }
      ]}
    ]
  },
  {
    id: "olive-thyme",
    name: "Olive & Thyme",
    cuisine: "Mediterranean",
    rating: 4.6,
    image: "./assets/images/rest2.jpg",
    menu: [
      { category: "Mezze", items: [
        { name: "Hummus", price: 180, veg: true, popular: true },
        { name: "Falafel", price: 200, veg: true },
        { name: "Stuffed Grape Leaves", price: 220, veg: true }
      ]},
      { category: "Mains", items: [
        { name: "Shawarma Platter", price: 380, veg: false },
        { name: "Grilled Halloumi", price: 320, veg: true },
        { name: "Lamb Kebab", price: 420, veg: false }
      ]},
      { category: "Desserts", items: [
        { name: "Baklava", price: 160, veg: true },
        { name: "Kunafa", price: 200, veg: true }
      ]},
      { category: "Beverages", items: [
        { name: "Mint Lemonade", price: 120, veg: true },
        { name: "Turkish Coffee", price: 100, veg: true }
      ]}
    ]
  },
  {
    id: "spice-route",
    name: "Spice Route",
    cuisine: "Indian",
    rating: 4.8,
    image: "./assets/images/rest3.jpg",
    menu: [
      {
        category: "Starters",
        items: [
          { name: "Paneer Tikka", price: 220, veg: true, popular: true },
          { name: "Chicken Tikka", price: 260, veg: false },
          { name: "Veg Spring Rolls", price: 180, veg: true }
        ]
      },
      {
        category: "Main Course",
        items: [
          { name: "Butter Chicken", price: 320, veg: false, popular: true },
          { name: "Paneer Butter Masala", price: 280, veg: true },
          { name: "Dal Makhani", price: 240, veg: true },
          { name: "Kadai Chicken", price: 300, veg: false }
        ]
      },
      {
        category: "Biryani & Rice",
        items: [
          { name: "Chicken Biryani", price: 280, veg: false, popular: true },
          { name: "Veg Biryani", price: 240, veg: true },
          { name: "Jeera Rice", price: 150, veg: true }
        ]
      },
      {
        category: "Breads",
        items: [
          { name: "Butter Naan", price: 50, veg: true },
          { name: "Garlic Naan", price: 70, veg: true },
          { name: "Tandoori Roti", price: 30, veg: true }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Masala Chai", price: 50, veg: true },
          { name: "Sweet Lassi", price: 90, veg: true },
          { name: "Soft Drinks", price: 50, veg: true }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Gulab Jamun", price: 100, veg: true, popular: true },
          { name: "Rasmalai", price: 120, veg: true }
        ]
      }
    ]
  },
  {
    id: "royal-tandoor",
    name: "Royal Tandoor",
    cuisine: "North Indian",
    rating: 4.4,
    image: "./assets/images/rest4.jpg",
    menu: [
      { category: "Starters", items: [
        { name: "Tandoori Chicken", price: 320, veg: false, popular: true },
        { name: "Seekh Kebab", price: 280, veg: false },
        { name: "Paneer Tikka", price: 240, veg: true }
      ]},
      { category: "Main Course", items: [
        { name: "Rogan Josh", price: 420, veg: false },
        { name: "Shahi Paneer", price: 340, veg: true },
        { name: "Dal Makhani", price: 260, veg: true }
      ]},
      { category: "Breads", items: [
        { name: "Garlic Naan", price: 80, veg: true },
        { name: "Laccha Paratha", price: 70, veg: true }
      ]},
      { category: "Beverages", items: [
        { name: "Sweet Lassi", price: 100, veg: true },
        { name: "Shikanji", price: 80, veg: true }
      ]}
    ]
  },
  {
    id: "masala-junction",
    name: "Masala Junction",
    cuisine: "Street Food",
    rating: 4.2,
    image: "./assets/images/rest5.jpg",
    menu: [
      { category: "Chaats", items: [
        { name: "Pani Puri", price: 80, veg: true, popular: true },
        { name: "Bhel Puri", price: 90, veg: true },
        { name: "Dahi Puri", price: 100, veg: true }
      ]},
      { category: "Snacks", items: [
        { name: "Vada Pav", price: 60, veg: true },
        { name: "Kathi Roll", price: 150, veg: false },
        { name: "Pav Bhaji", price: 120, veg: true }
      ]},
      { category: "Sweets", items: [
        { name: "Jalebi", price: 80, veg: true },
        { name: "Gulab Jamun", price: 90, veg: true }
      ]},
      { category: "Beverages", items: [
        { name: "Sugarcane Juice", price: 60, veg: true },
        { name: "Cold Coffee", price: 100, veg: true }
      ]}
    ]
  },
  {
    id: "wazwan-delight",
    name: "Wazwan Delight",
    cuisine: "Kashmiri",
    rating: 4.9,
    image: "./assets/images/rest6.jpg",
    menu: [
      { category: "Wazwan Specialties", highlight: true, items: [
        { name: "Rogan Josh", price: 380, veg: false, chefSpecial: true },
        { name: "Yakhni", price: 360, veg: false },
        { name: "Gushtaba", price: 420, veg: false, chefSpecial: true },
        { name: "Rista", price: 400, veg: false }
      ]},
      { category: "Chicken Dishes", items: [
        { name: "Chicken Korma", price: 300, veg: false },
        { name: "Chicken Handi", price: 340, veg: false }
      ]},
      { category: "Vegetarian", items: [
        { name: "Dum Aloo", price: 220, veg: true },
        { name: "Paneer Chaman", price: 240, veg: true }
      ]},
      { category: "Rice & Breads", items: [
        { name: "Steamed Rice", price: 120, veg: true },
        { name: "Kashmiri Pulao", price: 220, veg: true },
        { name: "Butter Naan", price: 50, veg: true }
      ]},
      { category: "Drinks", items: [
        { name: "Kahwa", price: 90, veg: true },
        { name: "Noon Chai", price: 80, veg: true }
      ]},
      { category: "Desserts", items: [
        { name: "Phirni", price: 100, veg: true },
        { name: "Shufta", price: 140, veg: true }
      ]}
    ]
  },
  {
    id: "bean-and-bite",
    name: "Bean and Bite",
    cuisine: "Cafe",
    rating: 4.7,
    image: "./assets/images/rest7.jpg",
    menu: [
      { category: "All-Day Breakfast", items: [
        { name: "Avocado Toast", price: 280, veg: true },
        { name: "Eggs Benedict", price: 320, veg: false, popular: true },
        { name: "Pancakes", price: 220, veg: true }
      ]},
      { category: "Sandwiches", items: [
        { name: "Club Sandwich", price: 280, veg: false },
        { name: "Grilled Veggie", price: 240, veg: true },
        { name: "BLT", price: 260, veg: false }
      ]},
      { category: "Desserts", items: [
        { name: "Waffle", price: 200, veg: true },
        { name: "Croissant", price: 150, veg: true }
      ]},
      { category: "Beverages", items: [
        { name: "Cappuccino", price: 160, veg: true },
        { name: "Cold Brew", price: 180, veg: true },
        { name: "Matcha Latte", price: 180, veg: true }
      ]}
    ]
  },
  {
    id: "ristretto-cafe",
    name: "Ristretto Cafe",
    cuisine: "American Fast Food",
    rating: 4.0,
    image: "./assets/images/rest8.jpg",
    menu: [
      { category: "Burgers", items: [
        { name: "Classic Cheeseburger", price: 280, veg: false, popular: true },
        { name: "Double Patty Burger", price: 340, veg: false },
        { name: "Veggie Burger", price: 240, veg: true }
      ]},
      { category: "Sides", items: [
        { name: "French Fries", price: 120, veg: true },
        { name: "Onion Rings", price: 140, veg: true },
        { name: "Coleslaw", price: 100, veg: true }
      ]},
      { category: "Desserts", items: [
        { name: "Milkshake", price: 180, veg: true },
        { name: "Apple Pie", price: 160, veg: true }
      ]},
      { category: "Beverages", items: [
        { name: "Coke", price: 80, veg: true },
        { name: "Lemonade", price: 100, veg: true }
      ]}
    ]
  },
  {
    id: "mama-noura",
    name: "Mama noura",
    cuisine: "Indian",
    rating: 4.0,
    image: "./assets/images/rest9.jpg",
    menu: [
      { category: "Starters", items: [
        { name: "Aloo Tikki", price: 100, veg: true },
        { name: "Chicken Pakora", price: 220, veg: false, popular: true },
        { name: "Hara Bhara Kebab", price: 180, veg: true }
      ]},
      { category: "Curries", items: [
        { name: "Chicken Curry", price: 320, veg: false },
        { name: "Rajma", price: 240, veg: true },
        { name: "Kadai Paneer", price: 300, veg: true }
      ]},
      { category: "Rice & Breads", items: [
        { name: "Jeera Rice", price: 120, veg: true },
        { name: "Chapati", price: 40, veg: true }
      ]},
      { category: "Beverages", items: [
        { name: "Sweet Lassi", price: 100, veg: true },
        { name: "Nimbu Pani", price: 60, veg: true }
      ]}
    ]
  },
  {
    id: "coya",
    name: "Coya",
    cuisine: "Chinese",
    rating: 4.0,
    image: "./assets/images/rest10.jpg",
    menu: [
      { category: "Starters", items: [
        { name: "Spring Rolls", price: 160, veg: true },
        { name: "Dim Sum", price: 200, veg: false, popular: true },
        { name: "Crispy Corn", price: 180, veg: true }
      ]},
      { category: "Mains", items: [
        { name: "Kung Pao Chicken", price: 360, veg: false },
        { name: "Tofu Stir-Fry", price: 280, veg: true },
        { name: "Fried Rice", price: 220, veg: true }
      ]},
      { category: "Noodles", items: [
        { name: "Hakka Noodles", price: 200, veg: true },
        { name: "Chow Mein", price: 240, veg: false }
      ]},
      { category: "Beverages", items: [
        { name: "Green Tea", price: 80, veg: true },
        { name: "Lychee Juice", price: 120, veg: true }
      ]}
    ]
  },
  {
    id: "panda-express",
    name: "Panda Express",
    cuisine: "Chinese Fast Food",
    rating: 3.0,
    image: "./assets/images/rest11.jpg",
    menu: [
      { category: "Entrees", items: [
        { name: "Orange Chicken", price: 280, veg: false, popular: true },
        { name: "Broccoli Beef", price: 300, veg: false },
        { name: "Kung Pao Shrimp", price: 320, veg: false }
      ]},
      { category: "Sides", items: [
        { name: "Chow Mein", price: 160, veg: true },
        { name: "Fried Rice", price: 140, veg: true },
        { name: "Super Greens", price: 120, veg: true }
      ]},
      { category: "Extras", items: [
        { name: "Spring Rolls", price: 120, veg: true },
        { name: "Cream Cheese Rangoon", price: 140, veg: true }
      ]},
      { category: "Beverages", items: [
        { name: "Fountain Drink", price: 80, veg: true },
        { name: "Bottled Water", price: 60, veg: true }
      ]}
    ]
  },
  {
    id: "olive-oven",
    name: "Olive Oven",
    cuisine: "Italian",
    rating: 5.0,
    image: "./assets/images/restt12.jpg",
    menu: [
      { category: "Starters", items: [
        { name: "Garlic Bread", price: 120, veg: true },
        { name: "Bruschetta", price: 150, veg: true },
        { name: "Cheese Balls", price: 180, veg: true }
      ]},
      { category: "Pizzas", items: [
        { name: "Margherita Pizza", price: 250, veg: true, popular: true },
        { name: "Farmhouse Pizza", price: 320, veg: true },
        { name: "Pepperoni Pizza", price: 350, veg: false }
      ]},
      { category: "Pasta", items: [
        { name: "White Sauce Pasta", price: 280, veg: true },
        { name: "Red Sauce Pasta", price: 260, veg: true },
        { name: "Penne Alfredo", price: 300, veg: true }
      ]},
      { category: "Main Course", items: [
        { name: "Lasagna", price: 350, veg: false },
        { name: "Grilled Chicken Steak", price: 420, veg: false },
        { name: "Veg Steak", price: 300, veg: true }
      ]},
      { category: "Desserts", items: [
        { name: "Tiramisu", price: 220, veg: true },
        { name: "Chocolate Lava Cake", price: 180, veg: true }
      ]},
      { category: "Beverages", items: [
        { name: "Cold Coffee", price: 120, veg: true },
        { name: "Lemon Iced Tea", price: 100, veg: true },
        { name: "Cappuccino", price: 140, veg: true }
      ]}
    ]
  }
];

/**
 * add event on multiple elements
 */

const addEventOnElements = function (elem, type, callback) {
  for (let i = 0, len = elem.length; i < len; i++) {
    elem[i].addEventListener(type, callback);
  }
}

/**
 * LOADING
 */

const loadingElement = document.querySelector("[data-loading-container]");

window.addEventListener("load", function () {
  if (loadingElement) loadingElement.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNavbar);



/**
 * HEADER
 */

// header will be active after scroll 200px of window

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 200 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", headerActive);



/**
 * SCROLL REVEAL
 */

const scrollReveal = function () {
  const revealElements = document.querySelectorAll("[data-reveal]");
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);



/**
 * CART SIDEBAR TOGGLE
 */

const cartSidebar = document.querySelector("[data-cart-sidebar]");
const cartTogglers = document.querySelectorAll("[data-cart-toggler]");

const toggleCart = function () {
  cartSidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(cartTogglers, "click", toggleCart);



/**
 * SEARCH MODAL TOGGLE
 */

const searchModal = document.querySelector("[data-search-modal]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = function () {
  searchModal.classList.toggle("active");
}

addEventOnElements(searchTogglers, "click", toggleSearch);



/**
 * SEARCH AND FILTER
 */

const searchInput = document.querySelector("[data-search-input]");
const cuisineFilter = document.querySelector("[data-cuisine-filter]");
const restaurantListItems = document.querySelectorAll("[data-restaurant-list] li:not(.empty-state)");
const emptyState = document.querySelector("[data-empty-state]");

// If we are on the homepage, search UI may be absent; tolerate it.
const isFilterPage = !!cuisineFilter;


const filterRestaurants = function () {
  const searchValue = (searchInput.value || "").trim().toLowerCase();
  const filterValue = (cuisineFilter?.value || "all").toLowerCase();
  let hasResults = false;

  const currentItems = document.querySelectorAll("[data-restaurant-list] li:not(.empty-state)");

  currentItems.forEach(item => {
    const restaurantName = (item.dataset.name || "").toLowerCase();
    const restaurantCuisine = (item.dataset.cuisine || "").toLowerCase();

    const matchesSearch = !searchValue || restaurantName.includes(searchValue);
    const matchesCuisine = filterValue === "all" || restaurantCuisine.includes(filterValue);

    if (matchesSearch && matchesCuisine) {
      item.classList.remove("hidden");
      hasResults = true;
    } else {
      item.classList.add("hidden");
    }
  });

  // Toggle page-level empty state
  if (emptyState) {
    if (hasResults) emptyState.classList.remove("active");
    else emptyState.classList.add("active");
  }

  // Update search modal message (header search UI)
  const hintEl = document.querySelector('.search-hint');
  if (hintEl) {
    if (!searchValue) hintEl.textContent = 'Start typing to search...';
    else hintEl.textContent = hasResults ? 'Restaurants found.' : 'No results found!';
  }
}

if (searchInput) searchInput.addEventListener("input", filterRestaurants);
if (cuisineFilter) cuisineFilter.addEventListener("change", filterRestaurants);




/**
 * NAVIGATION SCROLL & ACTIVE LINK HIGHLIGHT
 */

const navLinks = document.querySelectorAll(".navbar-link");
const sections = document.querySelectorAll("section[id], footer[id]");

const smoothScroll = function (event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - 80, // Offset for fixed header
      behavior: "smooth"
    });
    closeNavbar();
  }
}

addEventOnElements(navLinks, "click", smoothScroll);

const activeLinkHighlight = function () {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 100) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activeLinkHighlight);



/**
 * SEE ALL BUTTON
 */

const seeAllBtn = document.querySelector("[data-see-all-btn]");
const restaurantList = document.querySelector("[data-restaurant-list]");

if (seeAllBtn) {
  seeAllBtn.addEventListener("click", function () {
    // Navigate to full restaurants page
    window.location.href = "./restaurants.html";
  });
}




/**
 * CART SYSTEM
 */

const addToCartBtns = document.querySelectorAll("[data-add-to-cart]");
const cartList = document.querySelector("[data-cart-list]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");

let cart = JSON.parse(localStorage.getItem("foodOrderCart")) || [];

const saveCart = () => {
  localStorage.setItem("foodOrderCart", JSON.stringify(cart));
  updateCartUI();
};

const updateCartUI = () => {
  if (!cartList) return;
  cartList.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    count += item.quantity;

    const li = document.createElement("li");
    li.classList.add("cart-item");
    li.innerHTML = `
      <figure class="img-holder">
        <img src="${item.image}" width="70" height="70" alt="${item.name}" class="img-cover">
      </figure>
      <div class="item-wrapper">
        <h3 class="item-title">${item.name}</h3>
        <p class="item-price">$${item.price.toFixed(2)}</p>
        <div class="quantity-wrapper">
          <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
          <span class="span">${item.quantity}</span>
          <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" aria-label="remove item" onclick="removeFromCart(${index})">
        <ion-icon name="trash-outline" aria-hidden="true"></ion-icon>
      </button>
    `;
    cartList.appendChild(li);
  });

  if (cartCount) cartCount.textContent = count;
  if (cartTotal) {
    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartTotal.setAttribute("value", total);
  }
};

window.changeQuantity = (index, delta) => {
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  saveCart();
};

/**
 * LOCATION (Navbar)
 */

const locationTextEl = document.querySelector('[data-location-text]');
const LOCATION_STORAGE_KEY = 'foodOrderLocation';

const setLocationText = (text) => {
  if (!locationTextEl) return;
  locationTextEl.textContent = (text || '').trim();
};

const geoToDemoCityName = (lat, lon) => {
  // No reverse-geocoding API in this project; best-effort demo mapping.
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;

  // Srinagar (J&K)
  if (lat >= 33.7 && lat <= 34.4 && lon >= 74.0 && lon <= 76.5) return 'Srinagar';
  // Delhi
  if (lat >= 28.2 && lat <= 29.8 && lon >= 76.5 && lon <= 78.5) return 'Delhi';
  // Mumbai
  if (lat >= 18.8 && lat <= 20.0 && lon >= 72.6 && lon <= 73.6) return 'Mumbai';
  // Bangalore
  if (lat >= 12.8 && lat <= 13.5 && lon >= 77.0 && lon <= 78.8) return 'Bangalore';

  return null;
};

const detectCurrentLocation = () => {
  if (!navigator.geolocation) {
    setLocationText('📍 Location Unavailable');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const cityName = geoToDemoCityName(lat, lon);

      if (!cityName) {
        setLocationText('📍 Location Unavailable');
        localStorage.removeItem(LOCATION_STORAGE_KEY);
        return;
      }

      const display = `📍 ${cityName}`;
      setLocationText(display);
      localStorage.setItem(LOCATION_STORAGE_KEY, display);
    },
    () => {
      setLocationText('📍 Location Unavailable');
      localStorage.removeItem(LOCATION_STORAGE_KEY);
    },
    { enableHighAccuracy: false, timeout: 6500, maximumAge: 300000 }
  );
};

// Init from storage (if previously detected)
const storedLocation = localStorage.getItem(LOCATION_STORAGE_KEY);
setLocationText(storedLocation && storedLocation.trim() ? storedLocation : '📍 Location Unavailable');

// Always attempt live geolocation once on load
detectCurrentLocation();


window.removeFromCart = (index) => {
  cart.splice(index, 1);
  saveCart();
};

/**
 * CHECKOUT MODAL
 */

const checkoutModal = document.querySelector('[data-checkout-modal]');
const checkoutBackdrop = document.querySelector('[data-checkout-toggler]');
const checkoutCloseBtn = checkoutModal ? checkoutModal.querySelector('.checkout-close') : null;

const checkoutOrderItems = document.querySelector('[data-checkout-order-items]');
const checkoutSubtotalEl = document.querySelector('[data-checkout-subtotal]');
const checkoutDeliveryEl = document.querySelector('[data-checkout-delivery]');
const checkoutTotalEl = document.querySelector('[data-checkout-total]');

const checkoutForm = document.querySelector('[data-checkout-form]');
const checkoutSuccessEl = document.querySelector('[data-checkout-success]');

const DELIVERY_FEE = 50; // fixed delivery fee

const formatMoney = (n) => {
  const num = Number(n) || 0;
  return `$${num.toFixed(2)}`;
};

const setCheckoutTotals = (subtotal) => {
  const safeSubtotal = Number(subtotal) || 0;
  const delivery = safeSubtotal > 0 ? DELIVERY_FEE : 0;
  const total = safeSubtotal + delivery;

  if (checkoutSubtotalEl) checkoutSubtotalEl.textContent = formatMoney(safeSubtotal);
  if (checkoutDeliveryEl) checkoutDeliveryEl.textContent = formatMoney(delivery);
  if (checkoutTotalEl) checkoutTotalEl.textContent = formatMoney(total);
};

const renderCheckoutOrderSummary = () => {
  if (!checkoutOrderItems) return;

  if (!cart || cart.length === 0) {
    checkoutOrderItems.innerHTML = `<div style="color: var(--sonic-silver); font-weight: 600; font-size: var(--fs-10);">Your cart is empty.</div>`;
    setCheckoutTotals(0);
    return;
  }

  let subtotal = 0;

  checkoutOrderItems.innerHTML = cart
    .map((item) => {
      const lineTotal = item.price * item.quantity;
      subtotal += lineTotal;

      return `
        <div class="order-item">
          <figure>
            <img src="${item.image}" alt="${item.name}" />
          </figure>
          <div class="order-item-info">
            <div class="order-item-name">${item.name}</div>
            <div class="order-item-meta">
              <span>Qty: ${item.quantity}</span>
              <span>${formatMoney(lineTotal)}</span>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  setCheckoutTotals(subtotal);
};

const openCheckoutModal = () => {
  if (!checkoutModal) return;

  // reset success state
  if (checkoutSuccessEl) {
    checkoutSuccessEl.classList.remove('show');
  }

  renderCheckoutOrderSummary();

  checkoutModal.classList.add('active');
  document.body.classList.add('active');

  // Focus first input for better UX
  const firstInput = checkoutModal.querySelector('input, textarea, button');
  if (firstInput && typeof firstInput.focus === 'function') firstInput.focus();
};

const closeCheckoutModal = () => {
  if (!checkoutModal) return;
  checkoutModal.classList.remove('active');
  document.body.classList.remove('active');
};

if (checkoutBackdrop) {
  checkoutBackdrop.addEventListener('click', (e) => {
    // only close when clicking backdrop itself
    if (e.target === checkoutBackdrop) closeCheckoutModal();
  });
}

if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckoutModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && checkoutModal && checkoutModal.classList.contains('active')) {
    closeCheckoutModal();
  }
});

// Cart sidebar Checkout button -> open checkout modal
const cartCheckoutBtn = document.querySelector('.cart-sidebar button.btn.btn-primary.has-after');

/**
 * NOTE: Location dropdown uses standalone listeners below.
 * Keep this file order stable; avoid interfering with other initializations.
 */

if (cartCheckoutBtn) {
  cartCheckoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Prevent closing sidebar behind modal
    if (checkoutModal) openCheckoutModal();
  });
}

// Place Order
if (checkoutForm) {
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // basic validation (HTML required will handle UI, but keep safe)
    const fullName = checkoutForm.querySelector('#checkout-fullname')?.value?.trim();
    const phone = checkoutForm.querySelector('#checkout-phone')?.value?.trim();
    const address = checkoutForm.querySelector('#checkout-address')?.value?.trim();

    if (!fullName || !phone || !address) {
      // Let browser show required messages; also focus first missing
      if (!fullName) checkoutForm.querySelector('#checkout-fullname')?.focus();
      return;
    }

    if (checkoutSuccessEl) checkoutSuccessEl.classList.add('show');

    // Clear cart
    cart = [];
    localStorage.setItem('foodOrderCart', JSON.stringify(cart));
    updateCartUI();

    // Close after short delay
    setTimeout(() => {
      if (checkoutSuccessEl) checkoutSuccessEl.classList.remove('show');
      closeCheckoutModal();
    }, 900);
  });
}


const initializeAddToCart = () => {
  const btns = document.querySelectorAll("[data-add-to-cart]");
  // No-op on pages that don't have add-to-cart buttons.
  btns.forEach(btn => {
    btn.addEventListener("click", function () {

      const card = this.closest("[data-restaurant-card]") || this.closest(".restaurant-card");
      const name = (card.querySelector("[data-item-name]") || card.querySelector(".card-title")).textContent;
      // Default price if not found
      const priceElement = card.querySelector("[data-item-price]");
      const price = priceElement ? parseFloat(priceElement.getAttribute("value")) : 25.00; 
      const image = (card.querySelector("[data-item-image]") || card.querySelector(".card-image")).getAttribute("src");

      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }
      saveCart();
      
      if (!cartSidebar.classList.contains("active")) {
        toggleCart();
      }
    });
  });
}



/**
 * AUTH UI (Login + Signup)
 */

const loginModal = document.querySelector("[data-login-modal]");
const loginTogglers = document.querySelectorAll("[data-login-toggler]");
const authBtn = document.querySelector("[data-auth-btn]");
const loginForm = document.querySelector("[data-login-form]");

const profileDropdown = document.querySelector("[data-profile-dropdown]");
const profileToggleBtn = document.querySelector("[data-profile-toggle]");
const profileMenu = document.querySelector("[data-profile-menu]");
const profileTextEl = document.querySelector("[data-profile-text]");
const logoutBtn = document.querySelector("[data-logout-btn]");

const authTabs = document.querySelectorAll("[data-auth-tab]");
const usernameFieldWrapper = document.querySelector("[data-auth-field=\"username\"]");
const submitBtn = document.querySelector("[data-auth-submit]");
const helperEl = document.querySelector("[data-auth-helper]");

let currentAuthMode = 'login';

const setAuthMode = (mode) => {
  currentAuthMode = mode;

  // tabs
  authTabs.forEach((tab) => {
    const isActive = tab.getAttribute('data-auth-tab') === mode;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  // signup-only field
  if (usernameFieldWrapper) {
    const shouldShow = mode === 'signup';
    usernameFieldWrapper.style.display = shouldShow ? 'block' : 'none';
    const input = usernameFieldWrapper.querySelector('input');
    if (input) input.required = shouldShow;
  }

  // submit label
  if (submitBtn) submitBtn.textContent = mode === 'signup' ? 'Signup' : 'Login';

  // helper
  if (helperEl) helperEl.textContent = '';
};

const toggleLogin = function () {
  if (!loginModal) return;
  loginModal.classList.toggle("active");
  document.body.classList.toggle("active");

  // default visible mode on open
  if (loginModal.classList.contains('active')) setAuthMode(currentAuthMode || 'login');
}

addEventOnElements(loginTogglers, "click", toggleLogin);

const updateAuthUI = function () {
  const user = localStorage.getItem("foodOrderUser");
  const email = localStorage.getItem("foodOrderEmail");

  const loggedIn = !!user;

  if (authBtn) {
    if (loggedIn) {
      authBtn.style.display = 'none';
      authBtn.setAttribute('aria-hidden', 'true');
    } else {
      authBtn.style.display = '';
      authBtn.removeAttribute('aria-hidden');
      authBtn.textContent = 'Login / Sign Up';
      authBtn.title = '';
    }
  }

  if (profileDropdown) {
    profileDropdown.classList.toggle('is-hidden', !loggedIn);
  }

  if (profileTextEl) {
    profileTextEl.textContent = loggedIn ? user : 'Profile';
  }


  // ensure emoji/icon color is applied even if CSS is changed later
  if (profileToggleBtn) {
    const avatar = profileToggleBtn.querySelector('.profile-avatar');
    if (avatar) avatar.style.color = loggedIn ? '#f4b000' : '';
  }


  // keep email available for display/debug
  if (profileDropdown && loggedIn && email) {
    profileDropdown.dataset.email = email;
  } else if (profileDropdown) {
    delete profileDropdown.dataset.email;
  }
};

if (authBtn) {
  authBtn.addEventListener("click", function () {
    const user = localStorage.getItem("foodOrderUser");
    if (user) return;
    setAuthMode('login');
    toggleLogin();
  });
}

// Profile dropdown
if (profileToggleBtn) {
  profileToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!profileMenu) return;
    profileMenu.classList.toggle('is-open');
  });
}

// close orders modal on click outside handled via generic document click below

// My Orders (sample data UI)

const renderOrdersSample = (containerEl) => {
  const sample = [
    {
      restaurant: 'Spice Route',
      items: ['Butter Chicken', 'Jeera Rice', 'Garlic Naan'],
      total: 860,
      status: 'Delivered',
      date: '2026-05-01',
    },
    {
      restaurant: 'Olive & Thyme',
      items: ['Hummus', 'Shawarma Platter'],
      total: 560,
      status: 'Preparing',
      date: '2026-05-04',
    },
    {
      restaurant: 'Urban Fork',
      items: ['Bruschetta', 'Chicken Wings', 'Fresh Juice'],
      total: 580,
      status: 'On the Way',
      date: '2026-05-08',
    },
  ];

  const fmt = (iso) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return iso;
    }
  };

  const badgeClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'badge-delivered';
      case 'Preparing':
        return 'badge-preparing';
      case 'On the Way':
        return 'badge-onway';
      default:
        return '';
    }
  };

  containerEl.innerHTML = sample
    .map((o) => {
      return `
        <div class="order-card" role="article" aria-label="order">
          <div class="order-top">
            <div>
              <div class="order-restaurant">${o.restaurant}</div>
              <div class="order-date">${fmt(o.date)}</div>
            </div>
            <div class="badge ${badgeClass(o.status)}">${o.status}</div>
          </div>

          <div class="order-items">
            ${o.items.map((it) => `<div class="order-item"><span>${it}</span></div>`).join('')}
          </div>

          <div class="order-total">
            <span>Total</span>
            <span class="amount">₹${o.total}</span>
          </div>
        </div>
      `;
    })
    .join('');
};

const ordersBtn = document.querySelector('[data-orders-btn]');
const ordersModal = document.querySelector('[data-orders-modal]');
const ordersBackdrop = document.querySelector('.orders-backdrop[data-orders-toggler]');

if (ordersBtn) {
  ordersBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (profileMenu) profileMenu.classList.remove('is-open');

    if (ordersModal) {
      ordersModal.classList.add('active');
      document.body.classList.add('active');
    }

    // Populate sample orders
    const ordersListEl = document.querySelector('[data-orders-list]');
    if (ordersListEl && !ordersListEl.dataset.rendered) {
      renderOrdersSample(ordersListEl);
      ordersListEl.dataset.rendered = 'true';
    }
  });
}

// Close orders modal
const closeOrdersModal = () => {
  if (ordersModal) ordersModal.classList.remove('active');
  document.body.classList.remove('active');
};

const ordersTogglers = document.querySelectorAll('[data-orders-toggler]');
if (ordersTogglers && ordersTogglers.length) {
  ordersTogglers.forEach((el) => {
    el.addEventListener('click', (e) => {
      // Close on backdrop/close button
      e.preventDefault();
      closeOrdersModal();
    });
  });
}




/**
 * TOAST NOTIFICATIONS
 */

const toastContainer = document.querySelector("[data-toast-container]");

const showToast = function (message, icon = "checkmark-circle-outline") {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
    <ion-icon name="${icon}" class="toast-icon" aria-hidden="true"></ion-icon>
    <span class="toast-message">${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 10);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};



if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    // Clear all user-related data
    localStorage.removeItem('foodOrderUser');
    localStorage.removeItem('foodOrderEmail');
    localStorage.removeItem('foodOrderPhone');
    localStorage.removeItem('foodOrderAddress');
    
    // Optional: Clear cart on logout if it's considered part of the session
    // localStorage.removeItem('foodOrderCart');
    // cart = [];
    // updateCartUI();

    if (profileMenu) profileMenu.classList.remove('is-open');
    updateAuthUI();
    
    showToast("Logged out successfully");
  });
}

// Click outside closes dropdown (and orders dropdown via modal)
document.addEventListener('click', () => {
  if (profileMenu) profileMenu.classList.remove('is-open');

  // close orders modal when clicking backdrop handled by the [data-orders-toggler] elements

});


// Tabs interactions
authTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const mode = tab.getAttribute('data-auth-tab');
    setAuthMode(mode);
  });
});

// Initialize username field visibility
setAuthMode('login');

// Form submit (login/signup)
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector("#auth-email")?.value?.trim() || '';
    const password = this.querySelector("#auth-password")?.value || '';
    const username = this.querySelector("#auth-username")?.value?.trim() || '';

    if (!email || !password) return;

    // Basic validation: email contains @ and password length >= 6
    if (!email.includes("@") || password.length < 6) {
      if (helperEl) helperEl.textContent = 'Please enter a valid email and a password with at least 6 characters.';
      return;
    }

    if (currentAuthMode === 'signup') {
      if (!username || username.length < 2) {
        if (helperEl) helperEl.textContent = 'Please enter a username (at least 2 characters).';
        return;
      }

      localStorage.setItem('foodOrderUser', username);
      localStorage.setItem('foodOrderEmail', email);
    } else {
      // login: username derived from email
      const userName = email.split('@')[0];
      localStorage.setItem('foodOrderUser', userName);
      localStorage.setItem('foodOrderEmail', email);
    }

    updateAuthUI();
    toggleLogin();
    this.reset();
    setAuthMode('login');
  });
}




/**
 * PROFILE MODAL
 */

const profileModal = document.querySelector("[data-profile-modal]");
const profileTogglers = document.querySelectorAll("[data-profile-toggler]");
const profileBtn = document.querySelector("[data-profile-btn]");
const profileEditBtn = document.querySelector("[data-profile-edit-btn]");
const profileCancelBtn = document.querySelector("[data-profile-cancel-btn]");
const profileForm = document.querySelector("[data-profile-form]");
const profileView = document.querySelector("[data-profile-view]");

const profileNameView = document.querySelector("[data-profile-name-view]");
const profileEmailView = document.querySelector("[data-profile-email-view]");
const profilePhoneView = document.querySelector("[data-profile-phone-view]");
const profileAddressView = document.querySelector("[data-profile-address-view]");

const profileNameInput = document.querySelector("#profile-name");
const profileEmailInput = document.querySelector("#profile-email");
const profilePhoneInput = document.querySelector("#profile-phone");
const profileAddressInput = document.querySelector("#profile-address");

const toggleProfileModal = function () {
  if (!profileModal) return;
  profileModal.classList.toggle("active");
  document.body.classList.toggle("active");

  if (profileModal.classList.contains("active")) {
    updateProfileUI();
    showProfileView();
  }
};

const updateProfileUI = function () {
  const name = localStorage.getItem("foodOrderUser") || "John Doe";
  const email = localStorage.getItem("foodOrderEmail") || "john@example.com";
  const phone = localStorage.getItem("foodOrderPhone") || "Not provided";
  const address = localStorage.getItem("foodOrderAddress") || "Not provided";

  if (profileNameView) profileNameView.textContent = name;
  if (profileEmailView) profileEmailView.textContent = email;
  if (profilePhoneView) profilePhoneView.textContent = phone;
  if (profileAddressView) profileAddressView.textContent = address;

  if (profileNameInput) profileNameInput.value = name;
  if (profileEmailInput) profileEmailInput.value = email;
  if (profilePhoneInput) profilePhoneInput.value = phone === "Not provided" ? "" : phone;
  if (profileAddressInput) profileAddressInput.value = address === "Not provided" ? "" : address;
};

const showProfileEdit = function () {
  profileView.classList.add("is-hidden");
  profileForm.classList.remove("is-hidden");
};

const showProfileView = function () {
  profileView.classList.remove("is-hidden");
  profileForm.classList.add("is-hidden");
};

if (profileBtn) {
  profileBtn.addEventListener("click", () => {
    if (profileMenu) profileMenu.classList.remove("is-open");
    toggleProfileModal();
  });
}

addEventOnElements(profileTogglers, "click", toggleProfileModal);

if (profileEditBtn) {
  profileEditBtn.addEventListener("click", showProfileEdit);
}

if (profileCancelBtn) {
  profileCancelBtn.addEventListener("click", showProfileView);
}

if (profileForm) {
  profileForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = profileNameInput.value.trim();
    const email = profileEmailInput.value.trim();
    const phone = profilePhoneInput.value.trim();
    const address = profileAddressInput.value.trim();

    if (name && email) {
      localStorage.setItem("foodOrderUser", name);
      localStorage.setItem("foodOrderEmail", email);
      localStorage.setItem("foodOrderPhone", phone || "Not provided");
      localStorage.setItem("foodOrderAddress", address || "Not provided");

      updateProfileUI();
      updateAuthUI();
      showProfileView();
    }
  });
}


/**
 * DYNAMIC RENDERING
 */

const renderFeaturedRestaurants = () => {
  const carouselContainer = document.querySelector("[data-carousel]");
  if (!carouselContainer) return;

  const featured = [...restaurants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  carouselContainer.innerHTML = featured.map((rest, index) => {
    const badgeText = rest.rating >= 4.8 ? "Top Rated" : "Popular";
    const reviewCount = Math.floor(Math.random() * 500) + 50;
    const deliveryTime = "25-35 min";
    const priceRange = "₹₹";

    return `
      <div class="restaurant-card featured-card" data-card>
        <div class="card-icon">
          <img src="${rest.image}" alt="${rest.name}" class="card-image" loading="lazy">
          <div class="card-badge">${badgeText}</div>
        </div>
        <div class="card-content">
          <h3 class="h5 card-title">${rest.name}</h3>
          
          <div class="rating-wrapper">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <span class="rating-text">${rest.rating} (${reviewCount} reviews)</span>
          </div>

          <div class="card-meta-wrapper">
            <span class="card-meta">${rest.cuisine.toLowerCase()}</span>
          </div>

          <div class="card-footer">
            <div class="footer-item">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
              <span>${deliveryTime}</span>
            </div>
            <div class="footer-item">
              <span>${priceRange}</span>
            </div>
          </div>

          <button class="btn btn-secondary view-menu-btn" data-view-menu="${rest.id}">
            <span class="span">View Menu</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
};

const renderAllRestaurants = () => {
  const restaurantList = document.querySelector("[data-restaurant-list]");
  if (!restaurantList) return;

  // If the page has search/filter UI, keep restaurant cards in sync with the UI.
  if (emptyState) emptyState.classList.remove("active");


  const limitAttr = restaurantList.getAttribute('data-restaurant-limit');
  const limit = limitAttr ? parseInt(limitAttr, 10) : null;

  const restaurantData = typeof limit === 'number' && !Number.isNaN(limit)
    ? restaurants.slice(0, limit)
    : restaurants;

  restaurantList.innerHTML = restaurantData.map(rest => {

    const stars = Math.floor(rest.rating);
    const hasHalfStar = rest.rating % 1 !== 0;
    
    let starsHtml = "";
    for(let i=0; i<5; i++) {
        if(i < stars) starsHtml += '<ion-icon name="star" aria-hidden="true"></ion-icon>';
        else if(i === stars && hasHalfStar) starsHtml += '<ion-icon name="star-half" aria-hidden="true"></ion-icon>';
        else starsHtml += '<ion-icon name="star-outline" aria-hidden="true"></ion-icon>';
    }

    // Mock data for missing fields
    const reviewCount = Math.floor(Math.random() * 500) + 50;
    const deliveryTime = "25-35 min";
    const priceRange = "₹₹";

    return `
      <li data-reveal="right" data-name="${rest.name}" data-cuisine="${rest.cuisine.toLowerCase()}">
        <div class="restaurant-card" data-restaurant-card>
          <div class="card-icon">
            <img src="${rest.image}" width="300" height="300" loading="lazy"
              alt="${rest.name}" class="w-100" data-item-image>
          </div>
          
          <div class="card-content">
            <h3 class="h5 card-title" data-item-name>${rest.name}</h3>
            
            <div class="rating-wrapper">
              <div class="stars">${starsHtml}</div>
              <span class="rating-text">${rest.rating} (${reviewCount} reviews)</span>
            </div>

            <div class="card-meta-wrapper">
              ${rest.cuisine.split(" ").map(c => `<span class="card-meta">${c.toLowerCase()}</span>`).join("")}
            </div>

            <div class="card-footer">
              <div class="footer-item">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                <span>${deliveryTime}</span>
              </div>
              <div class="footer-item">
                <span>${priceRange}</span>
              </div>
            </div>

            <button class="btn btn-secondary" type="button" data-view-menu="${rest.id}">
              <span class="span">View Menu</span>
            </button>
          </div>
        </div>
      </li>
    `;
  }).join("");
};

/**
 * MENU MODAL
 */

let modalCurrentRestaurant = null;
let modalItemQtys = {};

const buildItemActionHTML = (itemName) => {
  const qty = modalItemQtys[itemName] || 0;
  if (qty > 0) {
    return `<div class="qty-control">
        <button class="qty-btn qty-minus" data-action="qty-minus">\u2212</button>
        <span class="qty-value">${qty}</span>
        <button class="qty-btn qty-plus" data-action="qty-plus">+</button>
      </div>`;
  }
  return `<button class="menu-add-btn" data-action="add">Add +</button>`;
};

const updateItemUI = (itemName) => {
  const row = document.querySelector(`[data-modal-item="${itemName}"]`);
  if (!row) return;
  const actionEl = row.querySelector('.menu-item-action');
  if (actionEl) actionEl.innerHTML = buildItemActionHTML(itemName);
};

const updateMenuFooter = () => {
  let totalQty = 0;
  let totalPrice = 0;
  if (modalCurrentRestaurant) {
    modalCurrentRestaurant.menu.forEach(cat => {
      cat.items.forEach(item => {
        const qty = modalItemQtys[item.name] || 0;
        totalQty += qty;
        totalPrice += qty * item.price;
      });
    });
  }
  const countEl = document.getElementById('menu-footer-count');
  const totalEl = document.getElementById('menu-footer-total');
  const footer = document.getElementById('menu-modal-footer');
  if (countEl) countEl.textContent = `${totalQty} item${totalQty !== 1 ? 's' : ''}`;
  if (totalEl) totalEl.textContent = `\u20B9${totalPrice}`;
  if (footer) footer.classList.toggle('has-items', totalQty > 0);
};

const syncToCart = (itemName, price, image) => {
  const qty = modalItemQtys[itemName] || 0;
  const idx = cart.findIndex(i => i.name === itemName);
  if (qty === 0) {
    if (idx !== -1) cart.splice(idx, 1);
  } else if (idx !== -1) {
    cart[idx].quantity = qty;
  } else {
    cart.push({ name: itemName, price, image, quantity: qty });
  }
  saveCart();
};

const openMenu = (restaurantId) => {
  const restaurant = restaurants.find(r => r.id === restaurantId);
  if (!restaurant || !restaurant.menu) return;

  modalCurrentRestaurant = restaurant;
  modalItemQtys = {};
  // Pre-populate from existing cart
  cart.forEach(item => {
    const inMenu = restaurant.menu.some(cat => cat.items.some(mi => mi.name === item.name));
    if (inMenu) modalItemQtys[item.name] = item.quantity;
  });

  document.getElementById('menu-modal-title').textContent = restaurant.name;
  document.getElementById('menu-modal-cuisine').textContent = restaurant.cuisine;
  document.getElementById('menu-modal-body').innerHTML = restaurant.menu.map((category, index) => `
    <div class="menu-category${category.highlight ? ' menu-category--highlight' : ''}">
      ${index > 0 ? '<hr class="menu-divider">' : ''}
      <h3 class="menu-category-title">${category.category}</h3>
      <ul class="menu-items-list">
        ${category.items.map(item => `
          <li class="menu-item${item.popular ? ' menu-item--popular' : ''}"
              data-modal-item="${item.name}"
              data-item-price="${item.price}"
              data-item-image="${restaurant.image}">
            <div class="menu-item-left">
              <span class="food-type-dot ${item.veg ? 'dot-veg' : 'dot-nonveg'}" title="${item.veg ? 'Veg' : 'Non-Veg'}"></span>
              <span class="menu-item-name">${item.name}</span>
              ${item.popular ? '<span class="popular-badge">&#9733; Popular</span>' : ''}
              ${item.chefSpecial ? '<span class="chef-special-badge">&#10022; Chef Special</span>' : ''}
            </div>
            <div class="menu-item-right">
              <span class="menu-item-price">&#8377;${item.price}</span>
              <div class="menu-item-action">${buildItemActionHTML(item.name)}</div>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  updateMenuFooter();
  document.getElementById('menu-modal').classList.add('active');
  document.body.classList.add('active');
};

const closeMenuModal = () => {
  document.getElementById('menu-modal').classList.remove('active');
  document.body.classList.remove('active');
  modalCurrentRestaurant = null;
};

// Expose globally so it can also be called via inline onclick if needed
window.openMenu = openMenu;

// partnership modal (reusable)
const partnershipModal = document.getElementById('partnership-modal');
const partnershipBackdrop = document.getElementById('partnership-modal-backdrop');
const partnershipCloseBtn = document.getElementById('partnership-modal-close');


// (renamed to avoid duplicate identifier) was: const closePartnershipModalFn = () => { ... }

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const menuModal = document.getElementById('menu-modal');
    if (menuModal && menuModal.classList.contains('active')) closeMenuModal();

    // partnership modal will be defined later in the file
    // (avoid runtime crash before closePartnershipModal exists)

    if (partnershipModal && partnershipModal.classList.contains('active')) {
      closePartnershipModal();
    }
  }
});


const partnershipTemplates = {
  courier: {
    title: 'Join Courier',
    desc: 'Join our delivery network and earn flexible income while delivering food across your city.',
    img: './assets/images/partner-1.jpg',
    points: [
      { icon: 'bicycle-outline', text: 'Flexible shifts you can choose' },
      { icon: 'time-outline', text: 'Fast payouts and transparent earnings' },
      { icon: 'shield-checkmark-outline', text: 'Reliable support & safety guidelines' }
    ],
    ctaLabel: 'Apply as Courier'
  },
  restaurant: {
    title: 'Join Restaurant Partner',
    desc: 'Reach new customers and grow your sales with YMT Foods.',
    img: './assets/images/partner-2.jpg',
    points: [
      { icon: 'restaurant-outline', text: 'More orders from nearby customers' },
      { icon: 'trending-up-outline', text: 'Promotions that boost visibility' },
      { icon: 'fast-food-outline', text: 'Streamlined onboarding & support' }
    ],
    ctaLabel: 'Request Restaurant Access'
  },
  brand: {
    title: 'Become a Brand Partner',
    desc: 'Promote your products with offers customers actually love.',
    img: './assets/images/brandcollab.jpg',
    points: [
      { icon: 'sparkles-outline', text: 'Targeted campaigns for better ROI' },
      { icon: 'megaphone-outline', text: 'Creative support for your offers' },
      { icon: 'people-outline', text: 'Reach engaged YMT Foods audiences' }
    ],
    ctaLabel: 'Partner with Us'
  }
};

const getPartnershipVariantFromCard = (card) => {
  const titleEl = card.querySelector('.card-title');
  const title = (titleEl?.textContent || '').trim().toLowerCase();

  if (title.includes('courier')) return 'courier';
  if (title.includes('restaurant')) return 'restaurant';
  return 'brand';
};

const openPartnershipModal = (variant) => {
  if (!partnershipModal) return;
  const data = partnershipTemplates[variant] || partnershipTemplates.courier;

  // Image
  const modalImg = document.getElementById('partnership-modal-img');
  if (modalImg) modalImg.src = data.img;

  // Title + desc
  const modalTitle = document.getElementById('partnership-modal-title');
  if (modalTitle) modalTitle.textContent = data.title;
  const modalDesc = document.getElementById('partnership-modal-desc');
  if (modalDesc) modalDesc.textContent = data.desc;

  // Points
  const pointsList = document.getElementById('partnership-modal-points');
  if (pointsList) {
    pointsList.innerHTML = data.points
      .map(
        (p) => `
          <li class="partnership-benefit-item">
            <ion-icon name="${p.icon}" aria-hidden="true"></ion-icon>
            <span>${p.text}</span>
          </li>
        `
      )
      .join('');
  }

  // CTA button label
  const modalCtaBtn = document.getElementById('partnership-modal-cta');
  if (modalCtaBtn) modalCtaBtn.textContent = data.ctaLabel;

  // Store variant for form submit
  partnershipModal.setAttribute('data-variant', variant);

  partnershipModal.classList.add('active');
  document.body.classList.add('active');
};

const closePartnershipModal = () => {
  if (!partnershipModal) return;
  partnershipModal.classList.remove('active');
  partnershipModal.setAttribute('data-variant', '');
  document.body.classList.remove('active');
};

if (partnershipCloseBtn) partnershipCloseBtn.addEventListener('click', closePartnershipModal);
if (partnershipBackdrop) partnershipBackdrop.addEventListener('click', closePartnershipModal);

// Use event delegation for all Learn More buttons
document.addEventListener('click', function (e) {
  const learnMoreBtn = e.target.closest('[data-partnership-learn-more]');
  if (!learnMoreBtn) return;

  e.preventDefault();
  const variantFromBtn = learnMoreBtn.getAttribute('data-partnership-variant');
  if (variantFromBtn) {
    openPartnershipModal(variantFromBtn);
    return;
  }

  const card = learnMoreBtn.closest('.partnership-card');
  const variant = getPartnershipVariantFromCard(card);
  openPartnershipModal(variant);
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {

  renderFeaturedRestaurants();
  renderAllRestaurants();
  initializeAddToCart();
  updateCartUI();
  updateAuthUI();
  // ensure correct signup field visibility on load
  if (typeof setAuthMode === 'function') setAuthMode('login');
  activeLinkHighlight();

  scrollReveal();

  /**
   * TESTIMONIAL SLIDER
   */
  const slider = document.querySelector('[data-testid-slider]');
  if (slider) {
    const slidesContainer = slider.querySelector('.testi-slides');
    const slides = slider.querySelectorAll('[data-testid-slide]');
    const prevBtn = slider.querySelector('[data-testid-prev]');
    const nextBtn = slider.querySelector('[data-testid-next]');
    const dotsWrap = slider.querySelector('[data-testid-dots]');

    let current = 0;

    // TESTIMONIAL DATA (source of truth)
    const testimonials = [
      {
        customerImage: "./assets/images/testi-avatar.jpg",
        customerName: "Thomas Adamson",
        customerRole: "Food Blogger • Srinagar",
        reviewText:
          "“The interface is smooth and ordering food feels super quick. Delivery tracking is excellent.”",
        rating: 5,
      },
      {
        customerImage: "./assets/images/testi-avatar.jpg",
        customerName: "Sarah Khan",
        customerRole: "Restaurant Guest • Bengaluru",
        reviewText:
          "“Loved the restaurant variety and fast delivery service. The app experience feels modern and clean.”",
        rating: 4,
      },
      {
        customerImage: "./assets/images/testi-avatar.jpg",
        customerName: "Ali Raza",
        customerRole: "Verified Customer • Lahore",
        reviewText:
          "“Food quality was good and customer support responded quickly. Would like more payment options.”",
        rating: 3.5,
      },
    ];

    const renderStars = (ratingValue) => {
      const ratingWrapper = slider.querySelector("[data-testid-author-rating]");
      if (!ratingWrapper) return;

      const rating = Number(ratingValue) || 0;
      const fullStars = Math.floor(rating);
      const hasHalf = rating - fullStars >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

      ratingWrapper.innerHTML = "";

      for (let i = 0; i < fullStars; i++) {
        const star = document.createElement("ion-icon");
        star.setAttribute("name", "star");
        star.setAttribute("aria-hidden", "true");
        ratingWrapper.appendChild(star);
      }

      if (hasHalf) {
        const halfStar = document.createElement("ion-icon");
        halfStar.setAttribute("name", "star-half");
        halfStar.setAttribute("aria-hidden", "true");
        ratingWrapper.appendChild(halfStar);
      }

      for (let i = 0; i < emptyStars; i++) {
        const outlineStar = document.createElement("ion-icon");
        outlineStar.setAttribute("name", "star-outline");
        outlineStar.setAttribute("aria-hidden", "true");
        ratingWrapper.appendChild(outlineStar);
      }
    };

    const setActive = (idx) => {
      if (!slides.length) return;
      current = (idx + slides.length) % slides.length;

      // Defensive: ensure testimonial array matches slides count
      const t = testimonials[current] || testimonials[current % testimonials.length];
      if (t) {
        // Update all parts together (review + author + rating + image)
        // Only update the currently active slide's review text (prevents accidental override).
        const activeSlide = slides[current];
        if (activeSlide && t.reviewText) activeSlide.textContent = t.reviewText;


        const avatarEl = slider.querySelector("[data-testid-avatar]");
        const nameEl = slider.querySelector("[data-testid-author-name]");
        const roleEl = slider.querySelector("[data-testid-author-role]");

        if (avatarEl && t.customerImage) avatarEl.setAttribute("src", t.customerImage);
        if (nameEl && t.customerName) nameEl.textContent = t.customerName;
        if (roleEl && t.customerRole) roleEl.textContent = t.customerRole;

        renderStars(t.rating);
      }

      slides.forEach((s, i) => {
        s.classList.toggle("is-active", i === current);
      });

      if (dotsWrap) {
        const dots = dotsWrap.querySelectorAll("[data-testid-dot]");
        dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
      }
    };

    // Build dots
    if (dotsWrap && slides.length) {
      dotsWrap.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'testi-dot';
        dot.setAttribute('data-testid-dot', '');
        dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
        dot.addEventListener('click', () => setActive(i));
        dotsWrap.appendChild(dot);
      });
    }

    setActive(current);

    if (prevBtn) prevBtn.addEventListener('click', () => setActive(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => setActive(current + 1));

    // Auto-rotate
    let intervalId = setInterval(() => setActive(current + 1), 4500);

    slider.addEventListener('mouseenter', () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = null;
    });
    slider.addEventListener('mouseleave', () => {
      if (!intervalId) intervalId = setInterval(() => setActive(current + 1), 4500);
    });
  }


  // NEWSLETTER subscribe (show Subscribed after click)
  const newsletterEmail = document.querySelector('[data-newsletter-email]');
  const newsletterBtn = document.querySelector('[data-newsletter-btn]');
  const newsletterStatus = document.querySelector('[data-newsletter-status]');

  if (newsletterEmail && newsletterBtn && newsletterStatus) {
    const setStatus = (text) => {
      newsletterStatus.textContent = text;
    };

    newsletterBtn.addEventListener('click', () => {
      const email = (newsletterEmail.value || '').trim();

      if (!email || !email.includes('@')) {
        setStatus('Please enter a valid email.');
        return;
      }

      localStorage.setItem('foodOrderNewsletterEmail', email);
      setStatus('Subscribed');

      // change button label too (requested UI behavior)
      const span = newsletterBtn.querySelector('.span');
      if (span) span.textContent = 'Subscribed';

      newsletterBtn.disabled = true;
      newsletterBtn.style.opacity = '0.7';
    });
  }

  // View Menu buttons (event delegation)
  document.addEventListener('click', function (e) {
    const viewBtn = e.target.closest('[data-view-menu]');
    if (viewBtn) { openMenu(viewBtn.getAttribute('data-view-menu')); return; }


    // Menu item Add / qty actions (event delegation)
    const actionEl = e.target.closest('[data-action]');
    if (actionEl) {
      const row = actionEl.closest('[data-modal-item]');
      if (row) {
        const itemName = row.dataset.modalItem;
        const itemPrice = parseFloat(row.dataset.itemPrice);
        const itemImage = row.dataset.itemImage;
        const action = actionEl.dataset.action;
        if (action === 'add') {
          modalItemQtys[itemName] = 1;
        } else if (action === 'qty-plus') {
          modalItemQtys[itemName] = (modalItemQtys[itemName] || 0) + 1;
        } else if (action === 'qty-minus') {
          modalItemQtys[itemName] = Math.max(0, (modalItemQtys[itemName] || 0) - 1);
        }
        updateItemUI(itemName);
        syncToCart(itemName, itemPrice, itemImage);
        updateMenuFooter();
      }
    }
  });

  // Modal close
  const menuModalCloseBtn = document.getElementById('menu-modal-close');
  const menuModalBackdrop = document.getElementById('menu-modal-backdrop');
  if (menuModalCloseBtn) menuModalCloseBtn.addEventListener('click', closeMenuModal);
  if (menuModalBackdrop) menuModalBackdrop.addEventListener('click', closeMenuModal);

  // Footer buttons
  const viewCartBtn = document.getElementById('menu-view-cart-btn');
  const checkoutBtn = document.getElementById('menu-checkout-btn');
  if (viewCartBtn) {
    viewCartBtn.addEventListener('click', () => {
      closeMenuModal();
      if (!cartSidebar.classList.contains('active')) toggleCart();
    });
  }
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      closeMenuModal();
      if (!cartSidebar.classList.contains('active')) toggleCart();
    });
  }
});



/**
 * CAROUSEL SCROLL (Featured Restaurants)
 */

const carouselContainer = document.querySelector("[data-carousel]");
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");

if (carouselContainer && scrollLeftBtn && scrollRightBtn) {
  const scrollAmount = 320;
  
  scrollLeftBtn.addEventListener("click", function () {
    carouselContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });
  
  scrollRightBtn.addEventListener("click", function () {
    carouselContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });
}
