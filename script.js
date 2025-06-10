import { products } from "./data.js";
console.log(1, products);

const template = document.querySelector("template");
const productList = document.querySelector("#product-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);
  const cardImage = clone.querySelector(".card-image");
  const cardTitle = clone.querySelector(".card-title");
  const rating = clone.querySelector(".rating");
  const description = clone.querySelector(".description");
  const discountPrice = clone.querySelector(".discount-price");

  cardTitle.textContent = product.title;
  description.textContent = product.description;
  cardImage.src = product.thumbnail;
  rating.textContent = `${product.rating} ★`;
  discountPrice.textContent = product.price + " so'm";

  productList.appendChild(clone);
});

const toggleBtn = document.getElementById("toggle-dark");
const themeIcon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
});
