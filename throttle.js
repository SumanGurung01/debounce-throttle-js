const input = document.querySelector(".input");
const paragraph = document.querySelector(".paragraph");

// throttle code
function throttle(callback, delay) {
    var wait = false;

    return (e) => {
        if (wait) return;

        callback(e);
        wait = true;
        setTimeout(() => {
            wait = false;
        }, delay);
    };
}

function handleChange(e) {
    paragraph.innerText = e.target.value;
}

const throttleFn = throttle(handleChange, 1000);

input.addEventListener("input", throttleFn);
