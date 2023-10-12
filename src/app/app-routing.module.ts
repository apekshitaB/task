import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  // {path:'login', component:LoginComponent},
  {path:'dashboard',component:TaskListComponent},
  // {path:'',redirectTo:'/login',pathMatch:'full'},
  // {path:'login',redirectTo:'dashboard',pathMatch:'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
