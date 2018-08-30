import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TodoListItemModel } from './todolist-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoListItems: TodoListItemModel[] = [
    new TodoListItemModel('Item 1', new Date().toString(), false),
    new TodoListItemModel('Item 2', new Date().toString(), false)
  ];
  
  title = 'Todo List';
  constructor() {
    
  }

  onTodoFormSubmit(form: NgForm) {
    const todoItemName = form.value.todoItem;
    const newTodoItem = new TodoListItemModel(todoItemName, new Date().toString(), false);
    this.todoListItems.push(newTodoItem);
    form.reset();
    
  }
}
