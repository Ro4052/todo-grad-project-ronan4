import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todos;

  @Input()
  todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

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
