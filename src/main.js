'use strict';
//main

// Json데이터 가져오기
// function loadItems(){
//   return fetch('data/data.json')
//   .then(response => response.json())
//   .then(json => json.items); // item객체를 배열로출력함 
// }

// // 아이템을 동적으로 html에 추가하는 함수
// function displayItems(items){
//   const container = document.querySelector('.content');
//   container.innerHTML = items.map(item => createHTMLString(item)).join('');
// }

// // item배열로부터 html태그를 포함한 문자열 배열로 반환하는 함수.

// function createHTMLString(item){
//   return `
//   <div class="item">
//     <img src="${item.image}" alt="${item.type}">
//     <span>${item.gender}, ${item.size}</span>
//   </div>
//   `;
// }

// function onButtonClick(event, items){
//   const dataset = event.target.dataset;
//   const key = dataset.key;
//   const value = dataset.value;

//   if(key == null || value == null){
//     return;
//   }

//   const filtered = items.filter(item => item[key]===value);
//   displayItems(filtered);
// }

// function setEventListener(items){
//   const logo = document.querySelector('.logo');
//   const button = document.querySelector('.btn'); //컨테이너에 이벤트리스너 등록해서 handling.
//   logo.addEventListener('click', () => displayItems(items));
//   button.addEventListener('click', event => onButtonClick(event, items));
// }


// loadItems()
// .then(items => {
//   console.log(items);
//   displayItems(items);
//   setEventListener(items);
// })
// .catch(console.log);



function Loaditems(){
  return fetch('data/data.json')
  .then(res => res.json())
  .then(json => json.items)
}

function displayItem(items){
  const data = document.querySelector('.content');
  data.innerHTML = items.map(item => createHTML(item)).join('');
}

function createHTML(item){

  return`
  <div class="item">
    <img src="${item.image}" alt="${item.type}">
    <span>${item.gender}, ${item.size}</span>
  </div>`;
}

function onButtonClick(event, items){
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if(key == null || value == null){
    return;
  }

  const filtered = items.filter(item => item[key] === value);
  displayItem(filtered);
}



function setEventListener(items){
  const logo = document.querySelector('.logo');
  const button = document.querySelector('.btn');
  logo.addEventListener('click', () => displayItem(items));
  button.addEventListener('click', event => onButtonClick(event, items));
}



Loaditems()
.then(items => {
  console.log(items);
  displayItem(items);
  setEventListener(items);
})
.catch(console.log());
