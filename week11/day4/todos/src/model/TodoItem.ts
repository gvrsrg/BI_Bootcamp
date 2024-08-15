export interface Item {
    id: string;
    content: string;
    done: boolean;
}

export default class TodoItem implements Item{
    private _id: string;
    private _content: string;
    private _done: boolean;
    constructor(id: string, content: string, done: boolean = false) {
        this._id = id;
        this._content = content;
        this._done = done;
    }
    get id(): string {
        return this._id;
    }
    get content(): string {
        return this._content;
    }
    get done(): boolean {
        return this._done;
    }
    set done(done: boolean) {
        this._done = done;
    }
}