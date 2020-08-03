import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from '../../services/todo.service'
import { Todo } from '../../interfaces/todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    console.log(this.todo);
  }

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    };
    return classes;
  }

  //Toggle completed
  onToggle(todo) {
    //Toggle on UI
    todo.completed = !todo.completed;

    //Toggle by Service on server
    this.todosService.toggleCompleted(todo).subscribe(todo => {
      // console.log(todo);
    });
  }

  //Delete todo item - emitter
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
