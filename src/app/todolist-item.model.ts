export class TodoListItemModel {
    constructor(public todoId: number, public name: string, public addedOn: string, public completed: boolean = false) {}
}
