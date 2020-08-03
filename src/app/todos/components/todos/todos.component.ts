import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todo.service'
import { Todo } from '../../interfaces/todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    //Delete on UI
    // this.todos.splice(todo.id-1, 1);
    this.todos = this.todos.filter(item => item.id !== todo.id);

    //Delete by service on server
    this.todosService.deleteTodos(todo).subscribe();
  }

  addTodo(todo: any) {
    this.todosService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
