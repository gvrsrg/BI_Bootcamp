import TodoItem, { Item } from "./TodoItem.ts";

interface List {
    list: TodoItem[];
    addItem(item: TodoItem): void;
    removeItem(id:string): void;
    clearList(): void;
    save(): void;
    load(): void;

}

export default class TodoList implements List {
    private _list: TodoItem[] = [];
    static instance: TodoList = new TodoList()  //singleton

    constructor(list: TodoItem[] = []){
        this._list = list;
    }

    get list() : TodoItem[] {
        return this._list
    }

    addItem(item: TodoItem): void {
        this._list.push(item);
        this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter((item) => item.id !== id);
        this.save();
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    save(): void {
        localStorage.setItem('todoList', JSON.stringify(this._list));
    }

    load(): void {
        const storedItems = JSON.parse(localStorage.getItem('todoList') || '[]');

        storedItems.forEach((item: Item) => {
            const newItem = new TodoItem(item.id, item.content, item.done);
            this._list.push(newItem);
        });
    }
}
