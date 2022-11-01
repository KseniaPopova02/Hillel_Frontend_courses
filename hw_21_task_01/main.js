const ALL_CATEGORIES_URL = "https://fakestoreapi.com/products/categories";
const CATEGORY_URL = "https://fakestoreapi.com/products/category";
const LIMITED_PRODUCTS_URL = "https://fakestoreapi.com/products?limit=5";

const categoryList = document.getElementById("category__list");
const productsList = document.getElementById("products__list");

const spinner = document.querySelector(".card__loading");

const request = {
  get: (url) => {
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};

const createElement = (tagName, attributes, text) => {
  const el = document.createElement(tagName);

  if (attributes) {
    Object.entries(attributes).forEach(([attribute, value]) => {
      el.setAttribute(attribute, value);
    });
  }

  if (text) {
    el.textContent = text;
  }
  return el;
};

const renderCategoryListItem = (text) => {
  const li = createElement("li", { class: "category__list-item" });
  const btn = createElement("button", { class: "category__list-btn" }, text);
  btn.addEventListener("click", () => {
    productsList.innerHTML = "";
    fetchCategoryProducts(text);
  });
  li.append(btn);
  categoryList.append(li);
};

const toggleSpinner = (show) => {
  spinner.style.display = show ? "block" : "none";
};

const renderProductItem = (productData) => {
  console.log(productData);

  const card = createElement("div", { class: "card" });

  const productTitle = createElement(
    "div",
    {
      class: "card__header",
    },
    productData.title
  );
  const cardInfo = createElement("div", { class: "card__info" });
  const cardInfoWrapper = createElement("div", { class: "card__info-wrapper" });
  const cardInfoText = createElement("div", { class: "card__info-text" });
  const cardInfoTextDescription = createElement(
    "div",
    {
      class: "card__info-description",
    },
    "Description: "
  );
  const cardInfoTextDescriptionSpan = createElement(
    "span",
    {
      class: "card__info-description-span",
    },
    productData.description
  );

  const cardInfoPrice = createElement(
    "div",
    {
      class: "card__info-price",
    },
    "Price: "
  );

  const cardInfoPriceSpan = createElement(
    "span",
    {
      class: "card__info-price-span",
    },
    `${productData.price}$`
  );

  const cardInfoImg = createElement("div", {
    class: "card__info-img",
  });
  const imgTag = createElement("img", {
    src: productData.image,
  });
  cardInfoTextDescription.append(cardInfoTextDescriptionSpan);
  cardInfoText.append(cardInfoTextDescription);
  cardInfoWrapper.append(cardInfoText);
  cardInfo.append(cardInfoWrapper);
  productTitle.append(cardInfo);
  card.append(productTitle);
  productsList.append(card);
  cardInfoPrice.append(cardInfoPriceSpan);
  cardInfoText.append(cardInfoPrice);
  cardInfoImg.append(imgTag);
  cardInfoWrapper.append(cardInfoImg);
};

const fetchCategoryProducts = (categoryName) => {
  toggleSpinner(true);
  request.get(`${CATEGORY_URL}/${categoryName}`).then((products) => {
    toggleSpinner(false);
    products.forEach((product) => {
      renderProductItem(product);
    });
  });
};

const init = () => {
  Promise.all([
    request.get(ALL_CATEGORIES_URL),
    request.get(LIMITED_PRODUCTS_URL),
  ]).then(([categories, products]) => {
    categories.forEach((category) => {
      renderCategoryListItem(category);
    });
    products.forEach((product) => {
      renderProductItem(product);
    });
  });
};

init();

//render products na innerHTML
