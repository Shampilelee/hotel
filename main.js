
// COPYRIGTH YEAR
const year_Now = document.getElementById("year");

year_Now.textContent = new Date().getFullYear();



// LOGIN
function move(number) {

  let forms = document.querySelectorAll("form");
  forms[0].classList.toggle("hidden");
  forms[1].classList.toggle("hidden");

  document.querySelector(".card").classList.toggle("active");

  if (number == 1) {
    document.querySelector(".btn").innerHTML =
      'Existing User? <button type="submit" onclick="move(2)">Sign In</button>';
  } else {
    document.querySelector(".btn").innerHTML =
      'New User? <button type="submit" onclick="move(1)">Sign Up</button>';
  }
}

// TOGGLE BETWEEN FORMS
const fm = 0;
const fm1 = document.getElementById("fm1");
const fm2 = document.getElementById("fm2");

function form_Num(fm) {

  if (fm === 1) {
    fm2.style.display = "block";
    fm1.style.display = "none";
  } 
  else if (fm === 2) {
    fm1.style.display = "block";
    fm2.style.display = "none";
  }
  
}



// index.html IMAGE SLIDER
var i = 0;
let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");
var pause = false;

function moveRight() {
  slides[i].className = "slide";
  i = (i + 1) % slides.length;
  slides[i].className = "slide active";

  let Xvalue = -160 * i;
  slider.style.transform = `translateX(${Xvalue}px)`;
}

function moveLeft() {
  slides[i].className = "slide";
  i = (i - 1 + slides.length) % slides.length;
  slides[i].className = "slide active";
  
  let Xvalue = -160 * i;
  slider.style.transform = `translateX(${Xvalue}px)`;
}

const interval = setInterval(() => {
  if (!pause) {
    moveRight();
  }
}, 2000);

function playPause() {
  let state = document.querySelector(".icon");
  if (state.innerHTML == "pause") {
    state.innerHTML = "play_arrow";
    pause = true;
  } else {
    state.innerHTML = "pause";
    pause = false;
  }
}



// BOOKING.html
let items = document.querySelectorAll(".item");
let carousel = document.querySelector(".carousel");

document.addEventListener(
  "scroll", () => {

    let proportion = carousel.getBoundingClientRect().top / window.innerHeight;

    let index = Math.ceil(-1 * (proportion + 0.5));

    items.forEach(

      (item, item_Index) => {
        item.className = "item";
        item.style.visibility = "hidden";

        if (item_Index == index) {
          item.className = "item active";
          item.style.visibility = "visible";
        }
      }

    );

  }
);

const curent_pg_img = document.getElementById("curent_pg_img");
const booking_pg = document.getElementById("booking_pg");

function booking() {
  curent_pg_img.className = "item";
  booking_pg.className = "item active";

  booking_pg.style.visibility = "visible";
}



// MENU BAR
const menu_Btn_Raper = document.querySelector(".menu_btn");
const menu_Btn_Snap = document.querySelector(".menu_btn__burger");

let show_Menu = false;

const nav = document.querySelector(".nav");
const menu_Nav = document.querySelector(".menu_nav");

const nav_Item = document.querySelectorAll(".menu_nav__item");

menu_Btn_Raper.addEventListener("click", toggle_Menu);

function toggle_Menu() {
    
    if (!show_Menu) {
        menu_Btn_Snap.classList.add("open");

        nav.classList.add("open");
        menu_Nav.classList.add("open");

        nav_Item.forEach(item => item.classList.add("open"));

        show_Menu = true;
    } 
    else {
        menu_Btn_Snap.classList.remove("open");

        nav.classList.remove("open");
        menu_Nav.classList.remove("open");

        nav_Item.forEach(item => item.classList.remove("open"));

        show_Menu = false;
    }
}








