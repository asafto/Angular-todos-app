import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from "./todos/todos.module";
import { TodoHeaderComponent } from './layouts/todo-header/todo-header.component';
import { AboutTodoComponent } from './layouts/about-todo/about-todo.component';
@NgModule({
  declarations: [
    AppComponent, TodoHeaderComponent, AboutTodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
