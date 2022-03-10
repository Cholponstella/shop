window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".card");
  }
});
