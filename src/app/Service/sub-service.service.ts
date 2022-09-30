import { Injectable } from '@angular/core';
import { MainServiceService } from './main-service.service';


@Injectable({
  providedIn: 'root'
})
export class SubServiceService {

  constructor(private Mainservice:MainServiceService) { }

  register(data:any){
    const url="/register" 
    return this.Mainservice.register(url,data);
  }


  login(data:any){
    const url="/Login"
    return this.Mainservice.login(url,data);
  }

  forgotPassword(data:any){
    const url="/forgotpassword"
    return this.Mainservice.forgotPassword(url,data);
  }
  changepass(data:any){
    const url="/changepassword"
    return this.Mainservice.changepass(url,data);
  }

 // This get Method is for Home Component OnInit method.
  get(){
    const path='/getdata'
    return this.Mainservice.prof(path);
  }


  userget(){
    const path = "/getuser"
    return this.Mainservice.userget(path);

  }


  updateUser(data:any){
    const path="/updateUser" 
    return this.Mainservice.updateUser(path,data);
}

deleteUser(){
  const url="/deleteUser" 
  return this.Mainservice.deleteUser(url);
}



postSchool(data:any){
  const url="/postSchool" 
  return this.Mainservice.postSchool(url,data);
}


getSchool(){
  const path="/getSchool" 
    return this.Mainservice.getSchool(path);
}


updateSchool(data:any){
  const path="/updateSchool" 
  return this.Mainservice.updateSchool(path,data);
}




homepageget(){
  const path="/homepageget" 
    return this.Mainservice.homepageget(path);
}


getSchoolPost(data:any){
  const url="/getSchoolPost/"
  const path=url+data
  return this.Mainservice.getSchoolPost(path);
}

updatePostSchool(data:any){
  const url="/updatePostSchool/"
  const path=url+data.id
  return this.Mainservice.updatePostSchool(path,data)
}
postSchoolPost(data:any){
  const url='/postSchoolPost'
  return this.Mainservice.postSchoolPost(url,data)
}


  

  pro(){  
    const url="/profile"
    this.Mainservice.pro(url);
  }





  // sample(data:any){
  //   const url="/sample"
  //   return this.Mainservice.sample(url,data);
  // }

  // gpost(data:any){
  //   const url="/get" 
  //   const path=url+data.id
  //   return this.Mainservice.gpost(path,data);
  // }

 

}
