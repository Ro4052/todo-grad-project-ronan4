import { Component } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : any = [];
  filterState = 'all';
  title = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos) =>
      this.todos = todos
    );
  }

  titleSubmit(title) {
    const todo = { id: '', title: title, isComplete: false };
    this.todoService.createTodo(todo).subscribe((id) => {
      todo.id = id;
      this.todos.push(todo);
    });
  }
 }
