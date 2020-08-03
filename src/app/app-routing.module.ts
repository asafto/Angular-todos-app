import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/components/todos/todos.component';
import { AboutTodoComponent } from './todos/components/layouts/about-todo/about-todo.component'

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutTodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
