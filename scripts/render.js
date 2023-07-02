import { Task } from "./app.js";
import { checkbox } from "./checkbox.js";

const template = document.getElementById("todo-main__box__template");
const todoBox = document.querySelector(".todo-main__box");

export class RenderUI extends Task {
    constructor(text, id, value) {
        super(text, id, value);
    }

    renderUI(element) {
        const newElement = document.importNode(template.content, true);
        const text = newElement.querySelector("label");

        text.textContent = element.text;

        todoBox.appendChild(newElement);
        checkbox();
    }
}
