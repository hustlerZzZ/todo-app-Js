import { itemsLeft } from "./itemsLeft.js";
import { completeBtnFunction } from "./completed.js";

export const checkbox = () => {
    const todoBox = document.querySelector(".todo-main__box").children;

    for (const element of todoBox) {
        element.addEventListener("click", (e) => {
            const input = element.querySelector("input");
            const label = element.querySelector("label");
            if (
                input.checked &&
                label.style.textDecoration === "line-through"
            ) {
                element.classList.remove("checked");
                input.checked = false;
                label.style.textDecoration = "none";
            } else {
                element.classList.add("checked");
                input.checked = true;
                label.style.textDecoration = "line-through";
            }
        });
    }

    itemsLeft(todoBox);
    completeBtnFunction();
};
