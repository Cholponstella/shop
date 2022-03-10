window.addEventListener("click", async (event) => {
  // console.log('Click Window!')

  // console.log(event.target.dataset.action);

  if (event.target.dataset.action) {
    let id = event.target.dataset.action;

    let response = await fetch("https://choposh-back.herokuapp.com/items" + "/" + id);
    let data = await response.json();

    console.log(data);
    const url = "https://choposh-back.herokuapp.com/cart";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log("Успех:", JSON.stringify(json));
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
});
