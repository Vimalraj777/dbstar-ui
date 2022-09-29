import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './View/dashboard/dashboard.component';
import { HomeComponent } from './View/home/home.component';
import { LoginComponent } from './View/login/login.component';
import { RegisterComponent } from './View/register/register.component';
import { SchoolComponent } from './View/school/school.component';
import { UserComponent } from './View/user/user.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,
  children:[ 
    {path:'dashboard',component:DashboardComponent},
    {path:'user',component:UserComponent},
    {path:'school',component:SchoolComponent},
            ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
