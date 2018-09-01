import { Component, OnInit, Input } from '@angular/core';
import { TodoListItemModel } from '../todolist-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoListItemModel;

  constructor() { }

  ngOnInit() {
  }

}
