document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Product1",
      price: 29.99,
    },
    {
      id: 2,
      name: "Product2",
      price: 19.99,
    },
    {
      id: 3,
      name: "Product3",
      price: 9.99,
    },
  ];

  let cart = [];
  const productList = document.getElementById("product-list");
  const carItemList = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const totalPrice = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");
  const cardTotalContainer = document.getElementById("cart-total");

  products.forEach((ele) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <span>${ele.name} - $${ele.price.toFixed(2)}</span>
        <button data-id="${ele.id}">Add to Cart</button>
        `;
    productDiv.classList.add("product");
    productList.appendChild(productDiv);
  });

  console.log("RELOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id")); //convert string to integer
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    const carItem = document.createElement("div");
    carItem.innerHTML = `
      ${product.name}  - $${product.price}
      <button data-id=${product.id} class='delete-btn'>Delete</button>
    `;
    carItem.classList.add("cartElement");
    emptyCartMessage.classList.add("hidden");
    carItemList.appendChild(carItem);

    total = parseFloat(totalPrice.textContent.substring(1)) + product.price;
    totalPrice.textContent = `$${total.toFixed(2)}`;
    cardTotalContainer.classList.remove("hidden");

    carItem.querySelector("button").addEventListener("click", (e) => {
      console.log(e.target);

      if (e.target.tagName === "BUTTON") {
        const productId = parseInt(e.target.getAttribute("data-id"));
        cart = cart.filter((x) => x.id != productId);
        console.log(cart);

        carItem.remove();
        if (cart.length === 0) {
          total = 0.0;
          totalPrice.textContent = `$${total.toFixed(2)}`;
          cardTotalContainer.classList.add("hidden");
          emptyCartMessage.classList.remove("hidden");
        } else {
          total =
            parseFloat(totalPrice.textContent.substring(1)) - product.price;
          totalPrice.textContent = `$${total.toFixed(2)}`;
        }
      }
    });
  }

  checkoutBtn.addEventListener("click", () => {
    total = 0.0;
    totalPrice.textContent = `$${total.toFixed(2)}`;
    cardTotalContainer.classList.add("hidden");
    emptyCartMessage.classList.remove("hidden");
    cart = [];
    console.log(typeof carItemList.children);
    [...carItemList.children].forEach((child) => {
      if (child.tagName === "DIV") child.remove();
    });
    alert("CheckedOut");
  });
});
