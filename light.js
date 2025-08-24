document.addEventListener("DOMContentLoaded", () => {
    let isOpen = false;
    let btn = document.querySelector(".switch");
    let bulbTop = document.querySelector(".bulb-top");
    let bulbBottom = document.querySelector(".bulb-bottom");

    btn.addEventListener("click", function () {
        if (isOpen) {
            // turn OFF
            btn.classList.remove("on");
            bulbTop.classList.remove("bulbon");
            bulbBottom.classList.remove("bulbon");
        } else {
            // turn ON
            btn.classList.add("on");
            bulbTop.classList.add("bulbon");
            bulbBottom.classList.add("bulbon");
        }
        isOpen = !isOpen; // toggle state
    });
});
