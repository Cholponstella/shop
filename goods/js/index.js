// async function getResponse () {
//     let response = await fetch ('http://localhost:3000/items')
//     let content = await response.json()

//     let list = document.querySelector('#baby')
//     let btn = document.querySelector('.btn')
//     let all = document.querySelector('.all')
//     let adult = document.querySelector('.adult')

//     let key;

//     for (key in content) {
//         list.innerHTML += `
//         <li>${content[key].name} </li>`
//     }

//     btn.addEventListener("click", () => {
//         list.innerHTML = "";
//         const filteredItems = content.filter(item => item.category === "food");
//         for (key in filteredItems) {
//             list.innerHTML += `
//             <li>${filteredItems[key].name} </li>`
//         }
//     });

//     all.addEventListener("click", () => {
//         list.innerHTML = "";
//         for (key in content) {
//             list.innerHTML += `
//             <li>${content[key].name} </li>`
//         }
//     });
//     adult.addEventListener("click", () => {
//         list.innerHTML = "";
//         const filteredItems = content.filter(item => item.category === "adult");
//         for (key in filteredItems) {
//             list.innerHTML += `
//             <li>${filteredItems[key].name} </li>`
//         }

//     })

// }

// getResponse()

const katalog__content = document.querySelector(".katalog__content");

async function getResponse() {
  let response = await fetch("https://choposh-back.herokuapp.com/items");
  let content = await response.json();

  let key;

  for (key in content) {
    katalog__content.innerHTML += `
       <div class="card mb-4">
       <div class="katalog__big_box">
       <div style="background-image: url(${content[key].imgUrl}); background-position: center; background-size: cover;" class="katalog__alli">
         <div class="katalog__baby">
           <p class="katalog__age">Возраст:  ${content[key].age}</p>
         </div>
       </div>

       <h6 class="katalog__h6">
         ${content[key].name}
       </h6>

       <ul>
         <li class="katalog__box">
           <img class="katalog__img" src="./img/time.svg" alt="" />Время
           игры: ${content[key].time} 
         </li>
         <li class="katalog__box">
           <img class="katalog__img" src="./img/smile.svg" alt="" />
           Кол-во игроков:${content[key].person}
         </li>
         <li class="katalog__box">
           <img
             class="katalog__img"
             src="./img/history.svg"
             alt=""
           />Подготовка: ${content[key].preparation}
         </li>
         <li class="katalog__box">
           <img class="katalog__img" src="./img/ball.svg" alt="" />Места:
           ${content[key].place}
         </li>
         <li class="katalog__box">
           <img
             class="katalog__img"
             src="./img/brain.svg"
             alt=""
           />Сложность: ${content[key].difficult}
         </li>
       </ul>
       <h5 class="katalog__three">${content[key].price}₽</h5>
       <button data-cart class="katalog__butt" data-action="${content[key].id}">Добавить в корзину</button>
     </div></div>
        `;
  }
}

getResponse();
