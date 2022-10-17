window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab_item");
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            if (!elem.classList.contains("tab_item_active")) {
                elem.classList.add("tab_item_active");
            }
            else  elem.classList.remove("tab_item_active");
        });
    });
});