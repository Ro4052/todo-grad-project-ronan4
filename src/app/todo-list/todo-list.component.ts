import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../todo.service';

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

  constructor(private todoService: TodoService) { }
  
  ngOnInit() { }

  showTodo(todo) {
    if (this.filterState === 'all' ||
        (this.filterState === 'active' && !todo.isComplete) ||
        (this.filterState === 'completed') && todo.isComplete) {
      return true;
    }
    return false;
  }

  getTitleStyle(todo) {
    return todo.isComplete ? "completed-todo" : "";
  }

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
