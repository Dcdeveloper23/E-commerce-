document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");
  const cartDialog = document.querySelector(".cart-dialog");
  const closeBtn = document.querySelector(".close-btn");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartContent = document.querySelector(".cart-content");
  const notification = document.getElementById("notification");

  const cart = [];

  cartIcon.addEventListener("click", () => {
    cartDialog.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    cartDialog.classList.remove("open");
  });

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const name = event.target.getAttribute("data-name");
      const price = parseFloat(event.target.getAttribute("data-price"));
      addToCart(name, price);
      showNotification();
    });
  });

  function addToCart(name, price) {
    const item = cart.find((product) => product.name === name);
    if (item) {
      item.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCart();
  }

  function updateCart() {
    if (cart.length === 0) {
      cartContent.innerHTML = "<p>Your cart is currently empty.</p>";
      return;
    }

    cartContent.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <p>${item.name} - $${item.price.toFixed(2)} x ${
          item.quantity
        }</p>
            </div>
        `
      )
      .join("");

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    cartContent.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
  }

  function showNotification() {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const reels = document.querySelectorAll(".reel");
  let currentIndex = 0;
  const intervalTime = 3000;

  function updateCarousel() {
    const width = reels[0].clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * width}px)`;
  }

  function moveToNextSlide() {
    currentIndex = currentIndex < reels.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  }

  window.addEventListener("resize", updateCarousel);

  setInterval(moveToNextSlide, intervalTime);
});
