import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.css']
})
export class TitleInputComponent implements OnInit {
  formdata;
  todosValue : [Object];

  @Output()
  todosChange = new EventEmitter<Object>();

  @Input()
  get todos() {
    return this.todosValue;
  }

  set todos(val) {
    this.todosValue = val;
    this.todosChange.emit(this.todosValue);
  }

  constructor(private todoService: TodoService) { }

  onSubmit(formControls) {
    const todo = { id: '', title: formControls.newTitle.value, isComplete: false };
    this.todoService.createTodo(todo).subscribe((id) => {
      todo.id = id;
      this.todos.push(todo);
    });
    this.resetInput();
  };

  resetInput() {
    this.formdata = new FormGroup({
      newTitle: new FormControl()
    });
  }

  ngOnInit() {
    this.resetInput();
  }

}
