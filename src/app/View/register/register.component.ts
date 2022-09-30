import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { SubServiceService } from 'src/app/Service/sub-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  data:any;


  constructor(private fb:FormBuilder , private subService:SubServiceService,private router:Router , private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      id:[''],
      username:[''],
      password:[''],
      name:[''],
      age:[''],
      gender:[''],
      fname:[''],
      mname:[''],
      phnumber:[''],
      address:['']

    })
  }

  register(){
    console.log("data",this.registerForm.value);
    this.subService.register(this.registerForm.value).subscribe(data=>{
      this.data=data;
      console.log("okregister",this.data);
      if(this.data!=null){
        Swal.fire({
          'title':'Registered Successfully!',
          'icon':'success',
          'timer':1500,
          'showConfirmButton':false
      })
        this.router.navigate(['/'])
      }
  
    },error=>{
      alert('Required Fields are Empty!')
    })
  }

}
