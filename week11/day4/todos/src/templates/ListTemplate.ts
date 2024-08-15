import TodoList from "../model/todoList";

export interface DOMList {
    list: HTMLUListElement;
    clearItemsButton: HTMLButtonElement;
    newItemEntryForm: HTMLFormElement;
    newItemInput: HTMLInputElement;
    items: NodeListOf<HTMLLIElement>;
    clear(): void;
    render(todoList: TodoList): void;
}

export default class ListTemplate implements DOMList {
    list: HTMLUListElement;
    clearItemsButton: HTMLButtonElement;
    newItemEntryForm: HTMLFormElement;
    newItemInput: HTMLInputElement;
    items: NodeListOf<HTMLLIElement>;

    static instatce: ListTemplate = new ListTemplate();

    constructor() {
        this.list = document.getElementById("listItems") as HTMLUListElement;
        this.clearItemsButton = document.getElementById("clearItemsButton") as HTMLButtonElement;
        this.newItemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
        this.newItemInput = document.getElementById("newItem") as HTMLInputElement;
        this.items = document.querySelectorAll(".item");
    }

    clear(): void {
        this.list.innerHTML = "";
    }

    render(todoList: TodoList): void {
        this.clear();
        todoList.list.forEach((item) => {
            const itemElement = document.importNode(this.list.children[0], true);
            const checkbox = itemElement.querySelector("input") as HTMLInputElement;
            checkbox.id = item.id;
            checkbox.checked = item.done;
            const label = itemElement.querySelector("label") as HTMLLabelElement;
            label.htmlFor = item.id;
            label.textContent = item.content;
            const button = itemElement.querySelector("button") as HTMLButtonElement;
            button.id = item.id;
            this.list.append(itemElement);
        })
    }
}
