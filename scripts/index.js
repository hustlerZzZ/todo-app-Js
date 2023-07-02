import { RenderUI } from "./render.js";

const inputBox = document.getElementById("todo-input__boxItem");

const i = 1;

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const text = e.target.value;
        const item = new RenderUI(text, i, i);
        item.renderUI(item);

        e.target.value = "";
    }
});
