import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-top-row',
  templateUrl: './top-row.component.html',
  styleUrls: ['./top-row.component.css']
})
export class TopRowComponent implements OnInit {
  todosValue;
  filterStateValue;

  @Input()
  get filterState() {
    return this.filterStateValue;
  }

  set filterState(val) {
    this.filterStateValue = val;
    this.filterStateChange.emit(this.filterStateValue);
  }

  @Output()
  filterStateChange = new EventEmitter();

  @Input()
  get todos() {
    return this.todosValue;
  }
  
  set todos(val) {
    this.todosValue = val;
    this.todosChange.emit(this.todosValue);
  }

  @Output()
  todosChange = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  numCompleted() {
    return [...this.todos].filter((todo) => todo.isComplete).length;
  }

  changeFilter(state) {
    this.filterState = state;
  }

  deleteCompleted() {
    this.todoService.deleteCompleted().subscribe(() => {
      this.todos = this.todos.filter((todo) => !todo.isComplete);
    });
  }
}
