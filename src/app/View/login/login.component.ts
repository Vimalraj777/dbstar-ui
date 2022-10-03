import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubServiceService } from 'src/app/Service/sub-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { text } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  data:any;
  id:any;
  form! : FormData;
  step=0;
  pin:any;
  password:any;
  raise:any;
  otp1:any;
  invalid:any;
  logerror:any;
  

  constructor(private fb:FormBuilder,private subService:SubServiceService,private router:Router) { }

  ngOnInit(): void {
    this.next()
    this.loginForm=this.fb.group({
      username:[''],
      password:[''],
      id:[''],
      otp:[''],
    })
  }


  next(){
    this.step+=1;
  }
  previous(){
    this.step-=1;
  }

  login(){

    this.form = new FormData();
    this.form.append('username',this.loginForm.controls['username'].value);
    this.form.append('password',this.loginForm.controls['password'].value);

    console.log("DATA",this.form);
    this.subService.login(this.form).subscribe((data:any)=>{
      console.log("access_token for login as response",data);
      this.data = data;      

      if(this.data.detail==null){
        localStorage.setItem('token',this.data.token);   // Here i am storing the token in a Local Storage.
        Swal.fire({
         icon:'success',
         title:'Logged in Successfully',
         showConfirmButton:false,
         timer:1500
       })
        this.router.navigate(['/home/dashboard'])
      }
     
    },(errors:any)=>{
      // alert("Invalid Credentials");
      this.logerror='Invalid Credentials'
      
    })
   
    }

    forgot(){
      console.log("function calling is correct");
      
      this.subService.forgotPassword(this.loginForm.value).subscribe((arg:any)=>{
        console.log(arg);
        this.pin=arg;
        if(this.pin.detail==null){
          this.otp1=this.pin
          this.next()
        } 
        else{
          console.log(this.pin.detail); 
          this.raise=this.pin.detail
        } 
      })
      
      
    }

    changepass(){
      console.log("change password",this.loginForm.value);
      
      this.subService.changepass(this.loginForm.value).subscribe((arg:any)=>{
        console.log(arg); 
        this.password=arg;
        if(this.password.detail==null){
          Swal.fire({
            title:'Changed Password Successfully!!',
            icon:'success',
            timer:1500,
            showConfirmButton:false

          })
          this.step=1;
        }
        else{
          this.invalid=this.password.detail
        }
        
      })

    }
}
