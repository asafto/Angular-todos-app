import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  todosLimit: string = '?_limit=10';

  constructor(private http: HttpClient) { }

  //Fetch todos from jsonplaceholder, with limited records
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //Toggle todo on server
  toggleCompleted(todo: Todo): Observable<any> {
    const url: string = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  //Delete todo on server
  deleteTodos(todo: Todo): Observable<Todo> {
    const url: string = `${this.todosUrl}/${todo.id}`;
    // console.log(`todo id ${todo.id} deleted on server successfuly`)
    return this.http.delete<Todo>(url, httpOptions);
  }

  //Add Todo

  addTodo(todo: any):Observable<any> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
  }
}
