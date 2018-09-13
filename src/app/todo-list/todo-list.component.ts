import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos;

  @Input()
  filterState;

  constructor() { }
  
  ngOnInit() { }

  showTodo(todo) {
    if (this.filterState === 'all' ||
        (this.filterState === 'active' && !todo.isComplete) ||
        (this.filterState === 'completed') && todo.isComplete) {
      return true;
    }
    return false;
  }
}
