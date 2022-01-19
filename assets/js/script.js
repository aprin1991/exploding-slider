
let container = document.querySelector(".container");

const next = document.querySelector(".arrow-next")
const prev = document.querySelector(".arrow-prev")
const images = ["../images/1.jpg", "../images/2.jpg", "../images/3.jpg", "../images/4.jpg"]
class Slider {
    #block;
    #animation
    constructor() {
        this._createElements();
    }
    _createElements() {
        for (let i = 0; i < 400; i++) {
            let block = document.createElement("div");
            block.classList.add("block");
            block.style.setProperty("--bg", `url(${images[0]})`)
            container.appendChild(block);
        }
        this.#block = document.querySelectorAll(".block");

    }
    _animation() {
        this.#animation = anime.timeline({
            targets: this.#block,
            easing: "easeInOutExpo",
            loop: false,
            // delay: anime.stagger(10, { start: 50 }),
        });
    }
    slideIn() {
        const animation = anime.timeline({
            targets: this.#block,
            easing: "easeInOutExpo",
            loop: false,
            delay: anime.stagger(4, { start: 50 }),
        });
        animation
            .add({
                scale: 0,
                translateX: () => anime.random(360, 1500),
                translateY: () => anime.random(360, 1500),
                rotate: () => anime.random(-360, 360),
                duration: () => anime.random(500, 2000),
            })
            .add({
                scale: 1,
                translateX: 0,
                translateY: 0,
                rotate: 0,
                duration: () => anime.random(500, 3000),
            })

    }
    slideOut() {
        this.#animation

    }
}

const slider = new Slider();
let blocks = document.querySelectorAll(".block");

let index = 0;
next.addEventListener("click", function () {
    if (index < 3) {
        index++;
    } else {
        index = 0;

    }
    changeSlider(index)
})
prev.addEventListener("click", function () {
    if (index > 0) {
        index--;
    } else {
        index = images?.length - 1;

    }
    changeSlider(index)
})
const changeSlider = index => {
    slider.slideIn();
    setTimeout(() => {
        blocks.forEach(el => {
            el.style.setProperty("--bg", `url(${images[index]})`)
        })
        // slider.slideIn();
    }, 3000);
}



