import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todosValue : [any];

  @Output()
  todosChange = new EventEmitter();

  @Input()
  get todos() {
    return this.todosValue;
  }
  
  constructor(private todoService: TodoService) { }

  set todos(val) {
    this.todosValue = val;
    this.todosChange.emit(this.todosValue);
  }
  
  ngOnInit() { }

  completeTodo(todo) {
    todo.isComplete = !todo.isComplete;
    this.todoService.completeTodo(todo).subscribe(() => {
      this.todos.find((otherTodo) => otherTodo === todo).isComplete = todo.isComplete;
    });
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo.id).subscribe(() =>
      this.todos.splice(this.todos.indexOf(todo), 1)
    );
  }
}
