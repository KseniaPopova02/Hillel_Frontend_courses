const ALL_CATEGORIES_URL = "https://fakestoreapi.com/products/categories";
const CATEGORY_URL = "https://fakestoreapi.com/products/category";

const categoryList = document.getElementById("category__list");
const productsList = document.getElementById("products__list");

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
    document.querySelector(".card__loading").style.display = "block";
    productsList.innerHTML = "";
    fetchCategoryProducts(text);
  });
  li.append(btn);
  categoryList.append(li);
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

  cardInfoTextDescription.append(cardInfoTextDescriptionSpan);
  cardInfoText.append(cardInfoTextDescription);
  cardInfoWrapper.append(cardInfoText);
  cardInfo.append(cardInfoWrapper);
  productTitle.append(cardInfo);
  card.append(productTitle);
  productsList.append(card);

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

  cardInfoPrice.append(cardInfoPriceSpan);
  cardInfoText.append(cardInfoPrice);

  const cardInfoImg = createElement("div", {
    class: "card__info-img",
  });
  const imgTag = createElement("img", {
    src: productData.image,
  });
  cardInfoImg.append(imgTag);
  cardInfoWrapper.append(cardInfoImg);
};

const fetchCategoryProducts = (categoryName) => {
  fetch(`${CATEGORY_URL}/${categoryName}`)
    .then((res) => res.json())
    .then((products) => {
      // hide loading icon
      document.querySelector(".card__loading").style.display = "none";
      products.forEach((product) => {
        renderProductItem(product);
      });
    })
    .catch(() => {
      alert("API not working");
    });
};

const init = () => {
  fetch(ALL_CATEGORIES_URL)
    .then((res) => res.json())
    .then((categories) => {
      if (categories.length) {
        fetchCategoryProducts(categories[0]);
        categories.forEach((category) => {
          renderCategoryListItem(category);
        });
      }
    })
    .catch(() => {
      alert("API not working");
    });
};

init();

//render products na innerHTML
