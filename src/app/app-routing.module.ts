import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './View/dashboard/dashboard.component';
import { HomeComponent } from './View/home/home.component';
import { LoginComponent } from './View/login/login.component';
import { RegisterComponent } from './View/register/register.component';
import { SchoolPostComponent } from './View/school-post/school-post.component';
import { SchoolComponent } from './View/school/school.component';
import { UserComponent } from './View/user/user.component';
import { ViewSchoolComponent } from './View/view-school/view-school.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,
  children:[ 
    {path:'dashboard',component:DashboardComponent},
    {path:'user',component:UserComponent},
    {path:'school',component:SchoolComponent},
    {path:'viewschool',component:ViewSchoolComponent},
    {path:'postschool',component:SchoolPostComponent},
            ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
