// // let infoEl = document.getElementsByClassName("info")
// // console.log(infoEl[0])
// // infoEl[0].style.backgroundColor = "orange";

// // let infoEl = document.querySelector(".info")
// // console.log(infoEl)
// // infoEl.style.backgroundColor = "orange"

// // let productList = document.querySelector(".product-list")
// // let namesToAdd = ["Oppo","Huawei"]

// // let li = document.createElement('li');
// // li.textContent = namesToAdd[0];

// // let li2 = document.createElement('li');
// // li2.textContent = namesToAdd[1]

// // productList.append(li, li2);
// // console.log(productList.innerHTML)

// // productList.innerHTML += `<li>${namesToAdd[0]}</li>
// // <li>${namesToAdd[1]}</li>`

// // let imgElement = document.querySelector("img")
// // imgElement.setAttribute("src","https://c4.wallpaperflare.com/wallpaper/881/838/514/besiktas-j-k-turkey-turkish-soccer-pitches-wallpaper-preview.jpg");

// // let title1 = document.querySelector('#title')
// // title1.firstElementChild.style.fontWeight = 'lighter'
// // title1.lastElementChild.style.fontStyle = 'italic'
// // title1.children[1].style.textDecoration = 'underline'
// // console.log(title1.children)

// // document.getElementById("info-content").innerText="Helo world";
// // let allListElements=document.querySelectorAll('li')
// // for(let list of allListElements){
// //     list.classList.add('blue')
// // }
// // const secondLiEl = document.querySelector("li:nth-child(2)")
// // const secondLiEl = document.querySelectorAll('li')[1]
// // console.log(secondLiEl)
// // secondLiEl.classList.replace("blue","red")

// // const list= document.querySelector('.product-list')
// // list.children[2].previousElementSibling.classList.toggle('green')

// // const imgElement = document.querySelector("img")
// // const grandParent = imgElement.parentElement.parentElement
// // grandParent.style.backgroundColor ="lightgray"

// // const img = {
// //     parentElement: { // imageDiv
// //         parentElement: {
// //             style: {
// //                 backgroundColor: 'none'
// //             }
// //         }
// //     }
// // }

// /*
// 1. Taglari almaq
// 2. Sekilleri deyismek
// 3. sehifeleri deyismek
//     1. sehifeleri yaratmaq
//     2. butun sehifeleri unselected elemek
//     3. index almaq ve sehifenin rengini deyismek
// 4. setInterval qurmaq
// */

// const products = [
//   {
//     name: "Iphone 13 Pro Max",
//     image:
//       "https://www.uae.krocer.com/image/cache/catalog/apple-iphone-13-pro-max-256gb-smartphone-japan-specs-29965-470x556.jpg",
//     description: "Pulunuz varsa gelin",
//   },
//   {
//     name: "S21 Ultra",
//     image:
//       "https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg",
//     description: "18 ay faizle",
//   },
//   {
//     name: "Xiaomi Mi 9",
//     image: "https://cdn.akakce.com/xiaomi/xiaomi-mi-9-64-gb-z.jpg",
//     description: "Esl kasib telefonu",
//   },
// ];

// const imageDiv = document.querySelector(".image-div");
// const img = document.querySelector(".image-div img");
// const nameEl = document.querySelector(".image-div p");
// const description = document.querySelector(".image-div h5");
// const pageWrapper = document.querySelector(".page-wrapper");

// let counter = 0;

// const changeImg = function () {
//   const index = counter % products.length;
//   nameEl.textContent = products[index].name;
//   img.setAttribute("src", products[index].image);
//   description.textContent = products[index].description;

//   choosePage(index);
//   counter++;
// };

// for (let i = 0; i < products.length; i++) {
//   const pageEl = document.createElement("div");
//   pageEl.className = "page";
//   pageWrapper.append(pageEl);
// }
// const clearCurrentPage = function () {
//   for (let pageEl of pageWrapper.children) {
//     pageEl.classList.remove("page-selected");
//   }
// };
// const choosePage = function (index) {
//   clearCurrentPage();
//   pageWrapper.children[index].classList.add("page-selected");
// };

// // setInterval(changeImg,1000)

// const info = document.querySelector(".info");

// // info.onmouseenter = () => {
// //   info.style.backgroundColor = 'green'
// // };
// // info.onmouseleave = () => {
// //   info.style.backgroundColor = 'red'
// // };
// // info.onmousemove = () => {
// //  console.log('isledi')
// // };

// // info.addEventListener('click', () => {
// //     console.log('clicked')
// // })
// // info.addEventListener('click', () => {
// //     console.log('clicked version 2')
// // })

// // info.onclick = () => {
// //     console.log('clicked')
// // }
// // info.onclick = () => {
// //     console.log('clicked version 2')
// // }

// info.addEventListener('dblclick', function(event) {
//     console.log(this)
//     console.log(event.target)
// })

const openButton = document.querySelector('#modal-open-button')
const modal = document.querySelector('.modal-container')
const backdrop = document.querySelector('.backdrop')
const cancelButton = document.querySelector('.cancel')

openButton.onclick = () => {
    console.log('isleyir')
    modal.classList.add('modal-container-open')
    backdrop.classList.add('backdrop-open')
    document.body.style.overflow = 'hidden'
}

cancelButton.addEventListener('click', () => {
    modal.classList.remove('modal-container-open')
    backdrop.classList.remove('backdrop-open')
    document.body.style.overflow = 'hidden'

})
backdrop.onclick=function(){
  modal.classList.remove('modal-container-open')
  backdrop.classList.remove('backdrop-open')
  document.body.style.overflow = 'hidden'
}







