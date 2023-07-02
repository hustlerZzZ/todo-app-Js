const itemsLeftBox = document.querySelector(".todo-main__bottom__item_Left");

export const itemsLeft = (element) => {
    const numOfItem = element.length;
    itemsLeftBox.innerHTML = `<p>${numOfItem - 1} item Left</p>`;
};
