const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const items = document.querySelector(".items");
const thumbs = document.querySelector(".thumbs");

let itemsStr = "";
let thumbsStr = "";

images.forEach((curImage) => {
    itemsStr += `
    <div class="item">
    <img src="${curImage.image}" alt="${curImage.title}">
    <h2>${curImage.title}</h2>
    <p>${curImage.text}</p>
    </div>
    `;
    thumbsStr += `
    <div class="thumb">
    <img src="${curImage.image}" alt="">
    </div>
    `
});

items.innerHTML = itemsStr;
thumbs.innerHTML = thumbsStr + `<div class="prev"></div><div class="next"></div>`;

const activeItem = document.querySelectorAll(".item");
const activeThumb = document.querySelectorAll(".thumb");
let index = 0;
activeItem[index].classList.add("active");
activeThumb[index].classList.add("active");

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", nextPic);

let start = setInterval(nextPic, 3000);
items.addEventListener("mouseenter", stopCarousel);
items.addEventListener("mouseleave", autoPlay);

const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", prevPic);


// FUNZIONZIONI
/**
 * Description: Creo una funzione che mi permetta di scorrere alla pic successiva ad ogni click sul bottone
 * @returns {any}
 */
function nextPic () {
    activeItem[index].classList.remove("active");
    activeThumb[index].classList.remove("active");
    if (index < activeItem.length - 1) {
        index++;
    } else {
        index = 0;
    }
    activeItem[index].classList.add("active")
    activeThumb[index].classList.add("active");
}

/**
 * Description: Creo una funzione che mi permetta di scorrere alla pic precedente ad ogni click sul bottone
 * @returns {any}
 */
function prevPic () {
    activeItem[index].classList.remove("active");
    activeThumb[index].classList.remove("active");
    if (index > 0) {
        index--;
    } else {
        index = activeItem.length - 1;
    }
    activeThumb[index].classList.add("active");
    activeItem[index].classList.add("active");
}

function stopCarousel() {
    clearInterval(start);
}

function autoPlay() {
    start = setInterval(nextPic, 3000);
}

