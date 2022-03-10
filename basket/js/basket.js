const basket__goods = document.querySelector(".basket__goods");
const basket__totalsum = document.querySelector(".basket__totalsum");
const page__title = document.querySelector(".page__title");

async function getResponse() {
  let response = await fetch("https://choposh-back.herokuapp.com/cart");
  let content = await response.json();

  console.log(content);

  basket__goods.innerHTML = `
  <div class="basket__goods qwerty">
                  <span>Товары (${content.length})</span>
                  <span>4600₽</span>
                </div>
  `;

  page__title.innerHTML = `
  Товаров в корзине: ${content.length}
  `

  //   basket__totalsum.innerHTML = `

  //   `
}

getResponse();
