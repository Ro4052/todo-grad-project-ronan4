import { Component, OnInit, Input, HostListener } from '@angular/core';

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

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    if ((event.srcElement.id !== 'title-input-Update') &&
        (event.srcElement.id !== 'todo-title')) {
      this.showInput = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  escPress(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.showInput = false;
    }
  }

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
    this.todo.title = title;
    this.updateTodo();
    this.showInput = false;
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
