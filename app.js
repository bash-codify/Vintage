/** @format */
const swiper = new Swiper(".swiper", {
  // AutoPlay

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

// Nav Bar Section

const hamburgerBtn = document.querySelector(".hamburger-btn");
const scrollLink = document.querySelectorAll('.scroll-link')
const navBar = document.querySelector(".nav-link");
const body = document.querySelector("#body");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("toggle");
  navBar.classList.toggle("active");
  body.classList.toggle('fixed-body');
});


scrollLink.forEach((scroll)=>{
  scroll.addEventListener('click', ()=>{
     navBar.classList.remove("active");
  })
})


// Footer Reserved Date Section

const reserve = document.getElementById("date");
const scrollUp = document.querySelector(".scroll-up");

reserve.innerHTML = new Date().getFullYear();





// Flash Sale Count Down Section
const months = [
  "Jabuary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wedneday",
  "Thurday",
  "Friday",
  "Saturday",
];

const saleDetail = document.querySelector('.sales-date');

// let tempYear = new Date().getFullYear();
// let tempMonth = new Date().getMonth();
// let tempDay = new Date().getDay();
// let tempDate = new Date().getDate();
let setDate = new Date(2022, 7, 30, 0, 0, 0);

  const year = setDate.getFullYear();
  const month = months[setDate.getMonth()];
  const week = weekdays[setDate.getDay()];
  const date = setDate.getDate();

  // saleDetail.textContent = `Start On ${week}, ${date}, ${month}, ${year}.`;


const deadline = document.querySelector(".dead-line");
const deadlineFormats = document.querySelectorAll(".deadline-format h2");

const setTime = setDate.getTime();

function CountDownTime() {
  const currentTime = new Date().getTime();
  let time = setTime - currentTime;

  const Oneday = 24 * 60 * 60 * 1000;
  const Onehour = 60 * 60 * 1000;
  const Oneminute = 60 * 1000;

  let days = time / Oneday;
  days = Math.floor(days);
  const hours = Math.floor((time % Oneday) / Onehour);
  const minutes = Math.floor((time % Onehour) / Oneminute);
  const seconds = Math.floor((time % Oneminute) / 1000);

  const value = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = ` 0${item} `);
    }
    return item;
  }

  deadlineFormats.forEach(function (item, index) {
    item.innerHTML = format(value[index]);
  });

  if (time < 0) {
    clearInterval(countDown);
    deadline.innerHTML = ` <h2 class="expire">Flash Sales Has Expired, Till Next Time</h2> `;
  }
}
let countDown = setInterval(CountDownTime, 1000);
CountDownTime();


// Search Button Section
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', ()=>{
  searchInput.classList.toggle('active1');
  console.log('hello');
});


// Wish List Section
const wishList = document.querySelectorAll('.wishlist');

wishList.forEach((wish)=>{
  wish.addEventListener('click', ()=>{
    wish.classList.toggle('active5');
  });
});


// IMg Section

const largeImg = document.querySelector('.largeimg');
const SmallImg = document.querySelectorAll('.smallimg');

SmallImg.forEach((image)=>{
  image.addEventListener('click', ()=>{
    largeImg.src = image.src;
    image.style.backgroundColor = 'red'
  })
})

// for(i = 0; i < SmallImg.length; i++ ){
//   SmallImg[i].addEventListener('click', ()=>{
//     largeImg.src = SmallImg.src;
//   })
// }


// size button

const sizes = document.querySelectorAll('#size');
sizes.forEach((size)=>{
  size.addEventListener('click', ()=>{

    sizes.forEach((size)=> size.classList.remove('active1'))
    size.classList.add('active1');
  
  });
  
});


// Quaunlity Count Section

const value = document.querySelector('.value');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');

let count = 1;

plus.addEventListener('click', ()=>{
  count++;
  value.textContent = count;
});
minus.addEventListener('click', ()=>{
    count--;
  if(count = count){
    count = 1;
  }

   value.textContent = count;
});
// description section


const btns = document.querySelectorAll('.question');
btns.forEach((question)=>{
const btn = question.querySelector('.buttn');
btn.addEventListener('click', ()=>{
btns.forEach((item)=>{
  if(item !== question){
    item.classList.remove('active2')

  }
});

question.classList.toggle('active2')
});

});




const proContainer = document.querySelector('.prod-contain');
const clickBtn = document.querySelectorAll('.click');
const singleContent = document.querySelectorAll('.content-single');


proContainer.addEventListener('click', (e)=>{
  const el = e.target.dataset.id;
 
  if(el){

    clickBtn.forEach((click)=>{
      click.classList.remove('active3');
      e.target.classList.add('active3');
    });
    singleContent.forEach((content)=>{
      console.log(content);
      content.classList.remove('active4')
    })
  }
  const element = document.getElementById(el);
  element.classList.add('active4')
})

// Shopping Cart

const promoBtn = document.querySelector('.promo-btn');
const promoContent = document.querySelector('.promo-content');

promoBtn.addEventListener('click', ()=>{
  promoBtn.classList.toggle('active7')
  promoContent.classList.toggle('active8')
})













