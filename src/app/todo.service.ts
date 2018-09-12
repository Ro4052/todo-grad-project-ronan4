import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos() {
    return this.http.get<[]>('/api/todo');
  }

  createTodo(todo) {
    return this.http.post<string>('/api/todo', todo, httpOptions);
  }
}
