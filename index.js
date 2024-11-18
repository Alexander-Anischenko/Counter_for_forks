const counter = document.querySelector(".counter");
const minus = document.querySelector("#minus-button");
const plus = document.querySelector("#plus-button");

let count = 0;

const changeCount = () => {
    counter.textContent = count;
};

const onMinus = (event) => {
    event.preventDefault();

    if (count > -100) {
        count -= 1;
        changeCount();
    }
};

const onPlus = (event) => {
    event.preventDefault();

    if (count < 100) {
        count += 1;
        changeCount();
    }
};

minus.addEventListener("click", onMinus);
plus.addEventListener("click", onPlus);
