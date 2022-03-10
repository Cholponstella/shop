// http://localhost:3000/cart

const basket__left = document.querySelector(".basket__left");
// const basket__item = ;
async function getResponse() {
  let response = await fetch("https://choposh-back.herokuapp.com/cart");
  let content = await response.json();

  console.log(content);

  let key;

  for (key in content) {
    basket__left.innerHTML += `
    <div class="basket__item">
    <img src="${content[key].imgUrl}" alt="" class="basket__img" />
    <div class="basket__info">
      <h2 class="basket__name">
       ${content[key].name}
      </h2>
    </div>
    <div class="basket__items-control-wrapper">
      <div class="basket__item" data-action="minus">
-
      </div>
      <div class="basket__item" data-counter>
1
      </div>
      <div class="basket__item" data-action="plus">
+
      </div>
     </div>
    <h3 class="basket__price">${content[key].price}₽</h3>
  </div>`;
  }
}

getResponse();
