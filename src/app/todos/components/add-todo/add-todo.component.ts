import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  title: string;

  @Output() addTodo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.title) {
      const todo = {
        title: this.title,
        completed: false
      };
      return this.addTodo.emit(todo);
    }
    alert('You must fill in a todo in order to submit');
  }

}
