import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoHeaderComponent } from './components/layouts/todo-header/todo-header.component';
import { AboutTodoComponent } from './components/layouts/about-todo/about-todo.component';



@NgModule({
  declarations: [TodoItemComponent, AddTodoComponent, TodosComponent, TodoHeaderComponent, AboutTodoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
