import { Component } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => this.todos = todos);
  }
 }
