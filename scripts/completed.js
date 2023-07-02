export const completeBtnFunction = () => {
    const completeBtn = document.getElementById(
        "todo-main__bottom__item_sortBtn-completed"
    );
    const todoBox = document.querySelector(".todo-main__box").children;

    completeBtn.addEventListener("click", () => {
        const completedItems = [];
        for (const element of todoBox) {
            if (element.classList.contains("checked")) {
                completedItems.push(element);

                todoBox.removeChild(element);
            }
        }

        console.log(completedItems);
    });
};
