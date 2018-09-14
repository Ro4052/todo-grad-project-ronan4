import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  showInput = false;

  @Input()
  todos;

  @Input()
  todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  openInput() {
    this.showInput = true;
  }
  
  completeTodo() {
    this.todo.isComplete = !this.todo.isComplete;
    this.updateTodo();
  }
  
  updateTitle(title) {
    this.showInput = false;
    this.todo.title = title;
    this.updateTodo();
  }

  updateTodo() {
    this.todoService.updateTodo(this.todo).subscribe(() => {
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
