import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup,FormBuilder } from '@angular/forms';
import { SubServiceService } from 'src/app/Service/sub-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-school',
  templateUrl: './view-school.component.html',
  styleUrls: ['./view-school.component.scss']
})
export class ViewSchoolComponent implements OnInit {
homepage!:FormGroup;
data:any;
Data:any;
// allUsers:any;
allUsers: any = [];
  constructor(private fb:FormBuilder, private sub:SubServiceService , private route:Router) { }

  ngOnInit(): void {
   
    this.sub.homepageget().subscribe((arg:any)=>{
      console.log("successful",arg);

      this.allUsers=arg.values;
    })

  }

 Update(data:any){
  this.route.navigate(['/home/postschool',{'id':data}])
 }
 Add(){
  this.route.navigate(['home/postschool'])
 }
}