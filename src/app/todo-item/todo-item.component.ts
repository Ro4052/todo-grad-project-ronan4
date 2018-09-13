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

  completeTodo() {
    this.todo.isComplete = !this.todo.isComplete;
    this.todoService.completeTodo(this.todo).subscribe(() => {
      this.todos.find((otherTodo) => 
        otherTodo === this.todo
      ).isComplete = this.todo.isComplete;
    });
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id).subscribe(() =>
      this.todos.splice(this.todos.indexOf(this.todo), 1)
    );
  }
}
