import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  @Output() itemAdded: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTodoFormSubmit(form: NgForm) {
    const todoItem = form.value.todoItem;
    this.itemAdded.emit(todoItem);
    form.reset();
  }

}
