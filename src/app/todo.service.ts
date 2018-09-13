import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos() {
    return this.http.get<any>('/api/todo');
  }

  createTodo(todo) {
    return this.http.post<string>('/api/todo', todo, { headers: headers });
  }

  completeTodo(todo) {
    return this.http.put(`/api/todo/${todo.id}`, todo, { headers: headers, responseType: 'text' });
  }

  deleteTodo(id) {
    return this.http.delete(`/api/todo/${id}`, { responseType: 'text' });
  }

  deleteCompleted() {
    return this.http.delete('/api/todo', { responseType: 'text' });
  }
}
