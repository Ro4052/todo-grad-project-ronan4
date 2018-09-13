import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: []
})
export class TitleInputComponent implements OnInit {
  formdata;

  @Input()
  todos;

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
