import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: []
})
export class TodoListComponent implements OnInit {
  todosValue : [];

  @Output()
  todosChange = new EventEmitter<[]>();

  @Input()
  get todos() {
    return this.todosValue;
  }

  set todos(val) {
    this.todosValue = val;
    this.todosChange.emit(this.todosValue);
  }

  ngOnInit() { }
}
