import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItemModel } from '../todolist-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoListItemModel;

  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  @Output() completeItem: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    console.log('delete');
    this.deleteItem.emit(this.todoItem.todoId);
  }

  onMarkComplete() {
    console.log('complete');
    this.completeItem.emit(this.todoItem.todoId);
  }



}
