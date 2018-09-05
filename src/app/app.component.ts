import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TodoListItemModel } from './todolist-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastTodoId = 0;

  todoListItems: TodoListItemModel[] = [
    new TodoListItemModel(++this.lastTodoId, 'Item 1', new Date().toString(), false),
    new TodoListItemModel(++this.lastTodoId, 'Item 2', new Date().toString(), false)
  ];
  title = 'Todo List';

  constructor() {
  }

  onAddItem(todoItem: string) {
    const newTodoItem = new TodoListItemModel(++this.lastTodoId, todoItem, new Date().toString(), false);
    this.todoListItems.push(newTodoItem);
  }

  onDeleteItem(itemId: number) {
    console.log(itemId);
    const updatedList = this.todoListItems.filter(item => (item.todoId !== itemId));
    this.todoListItems = updatedList.slice();
  }

  onMarkComplete(itemId: number) {
    console.log(itemId);
    const updatedItemIndex: number = this.todoListItems.findIndex(item => itemId === item.todoId);
    this.todoListItems[updatedItemIndex].completed = true;
  }


}
