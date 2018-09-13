import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-top-row',
  templateUrl: './top-row.component.html',
  styleUrls: ['./top-row.component.css']
})
export class TopRowComponent implements OnInit {
  todosValue : any;

  @Output()
  todosChange = new EventEmitter();

  @Input()
  get todos() {
    return this.todosValue;
  }
  
  set todos(val) {
    this.todosValue = val;
    this.todosChange.emit(this.todosValue);
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  numCompleted() {
    return [...this.todos].filter((todo) => todo.isComplete).length;
  }

  deleteCompleted() {
    this.todoService.deleteCompleted().subscribe(() => {
      this.todos = this.todos.filter((todo) => !todo.isComplete);
    });
  }
}
