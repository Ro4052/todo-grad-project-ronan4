import { Component } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : any = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  numCompleted() {
    return [...this.todos].filter((todo) => todo.isComplete).length;
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos) =>
      this.todos = todos
    );
  }
 }
