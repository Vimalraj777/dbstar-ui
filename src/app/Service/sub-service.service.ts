import { Injectable } from '@angular/core';
import { MainServiceService } from './main-service.service';


@Injectable({
  providedIn: 'root'
})
export class SubServiceService {

  constructor(private Mainservice:MainServiceService) { }

  login(data:any){
    const url="/Login"
    return this.Mainservice.login(url,data);
  }

 // This get Method is for Home Component OnInit method.
  get(){
    const path='/getdata'
    return this.Mainservice.prof(path);
  }


  profile(){
    const path = "/profile"
    return this.Mainservice.profile(path);

  }


  Post(data:any){
    const path="/sqlalchemy" 
    return this.Mainservice.Post(path,data);
}



po(data:any){
  const url="/post" 
  return this.Mainservice.po(url,data);
}


profileget(){
  const path="/profileget" 
    return this.Mainservice.profileget(path);
}


profileput(data:any){
  const path="/profileput" 
  return this.Mainservice.profileput(path,data);
}

deleted(){
  const url="/deleted" 
  return this.Mainservice.deleted(url);
}
forgot(data:any){
  const url="/forgot"
  return this.Mainservice.forgot(url,data);
}
changepass(data:any){
  const url="/change"
  return this.Mainservice.changepass(url,data);
}








  post(data:any){
    const url="/sqlalchemy" 
    return this.Mainservice.post(url,data);
  }


  sample(data:any){
    const url="/sample"
    return this.Mainservice.sample(url,data);
  }

 

  gpost(data:any){
    const url="/get" 
    const path=url+data.id
    return this.Mainservice.gpost(path,data);
  }


 
  

  pro(){
    const url="/profile"
    this.Mainservice.pro(url);
  }

 




}
