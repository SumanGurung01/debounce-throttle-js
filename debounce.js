const input = document.querySelector(".input");
const paragraph = document.querySelector(".paragraph");

// debounce code
function debounce(callback, delay) {
    var timer;

    return (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(e);
        }, delay);
    };
}

function handleChange(e) {
    paragraph.innerText = e.target.value;
}

const debouncedFn = debounce(handleChange, 1000);

input.addEventListener("input", debouncedFn);
