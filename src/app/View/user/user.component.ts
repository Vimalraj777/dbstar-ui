import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import Swal from 'sweetalert2';
import { SubServiceService } from 'src/app/Service/sub-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  profileForm!: FormGroup;
  id: any;
  data :any;

  constructor(private fb: FormBuilder, private subservice : SubServiceService,private route:Router) { }

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      id: [''],
      username: [''],
      password: [''],
      name: [''],
      age: [''],
      gender: [''],
      fname: [''],
      mname: [''],
      phnumber: ['',[Validators.required,Validators.pattern('(?=.*[0-9]).{10}')]],
      address: ['']

    })

      this.subservice.profile().subscribe((arg : any)=>{
        this.data = arg;
        this.loadData();
      })
  }

  loadData() {
    this.profileForm = this.fb.group({
      id: [this.data.id],
      username: [this.data.username],
      password: [this.data.password],
      name: [this.data.name],
      age: [this.data.age],
      gender: [this.data.gender],
      fname: [this.data.fname],
      mname: [this.data.mname],
      phnumber: [this.data.phnumber],
      address: [this.data.address]
    })
  }
  submit(){
    this.subservice.Post(this.profileForm.value).subscribe((data: any)=>{
      console.log(data);
      this.data=data;
      if(data!=null){
        Swal.fire({
          title:'Saved Successfully',
          icon:'success',
          showConfirmButton:false,
          timer:1500
        })
        // this.route.navigate(['/home'])
      
    }
    })
  }
  cancel(){
    this.route.navigate(['/home'])
  }
  deleted(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subservice.deleted().subscribe((data: any)=>{
          console.log(data);
          this.data=data; 
          
          Swal.fire({
            title:'Deleted!',
            showConfirmButton:false,
            text:'Your file has been deleted.',
            icon:'success',
            timer:1500
        })
          this.route.navigate(['/one'])
        })
      }
    }) 
  }

}
