import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { text } from 'express';
import { SubServiceService } from 'src/app/Service/sub-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  step: any;

  constructor(private route: Router, private subservice: SubServiceService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      alert("session ended");
      this.route.navigate(['/one'])
    }
    this.subservice.get().subscribe(data => {
      this.data = data;
      console.log(data);
      console.log('data id', this.data.id)

    }, error => {
      this.route.navigate(['/one'])
    })

  }

  submit() {

    this.route.navigate(['home/user'])
  }

  school() {

    this.route.navigate(['home/school'])
  }
  viewSchool() {
    this.route.navigate(['home/viewschool'])
  }

  logout() {
    Swal.fire({
      title:'Are You Sure?',
      icon:'question',
      showCancelButton:true,
      showConfirmButton:true,
      cancelButtonText:'Cancel',
      confirmButtonText:'Logout'

    }).then(result=>{
      if(result.isConfirmed){
        localStorage.clear();
        Swal.fire({
          title:'Logged Out Successfully',
          icon:'success',
          showConfirmButton:false,
          timer:1200
        })
        this.route.navigate(['/']);
      }
    })
    
    

  }
  dashboard() {
    this.route.navigateByUrl("home/dashboard")
  }

}
