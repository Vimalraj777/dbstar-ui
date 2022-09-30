import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubServiceService } from 'src/app/Service/sub-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any;
  step:any;

  constructor(private route:Router , private subservice:SubServiceService) { }

  ngOnInit(): void {
     if(localStorage.getItem('token')==null){
      alert("session ended");
      this.route.navigate(['/one'])
    }
    this.subservice.get().subscribe(data=>{
      this.data=data;
      console.log(data);
      console.log('data id',this.data.id)

      // this.step=0;
      // if(this.data.id==19297){
      //   this.step=1;
      // }
      
    },error=>{
      this.route.navigate(['/one'])
    })

  }

  submit(){
    // this.id=[this.data,this.data.id];
   
    this.route.navigate(['home/user'])
  }

  school(){
    // this.id=[this.data,this.data.id];
   
    this.route.navigate(['home/school'])
  }
  viewSchool(){
    this.route.navigate(['home/viewschool'])
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/']);

  }
  dashboard(){
    this.route.navigateByUrl("home/dashboard")
  }

}
