import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  token:any;

  constructor(private http:HttpClient) { }

  baseurl="http://127.0.0.1:8000"
  // baseurl="https://fastapi-edustarpro.herokuapp.com"

  login(url:any,data:any){
    return this.http.post(this.baseurl+url,data)
  }


  prof(url:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.get(this.baseurl+url , {headers:this.token})
  }

  // This is profile component oninit get method
  userget(url:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.get(this.baseurl+url, {headers:this.token})
  }

  updateUser(url:any,data:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.put(this.baseurl+url,data, {headers:this.token});
  }

  postSchool(url:any,data:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.post(this.baseurl+url,data, {headers:this.token});
  }


  getSchool(url:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.get(this.baseurl+url, {headers:this.token});
  }


  updateSchool(url:any,data:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.put(this.baseurl+url,data, {headers:this.token});
  }

  deleteUser(url:any){
    this.token=new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.delete(this.baseurl+url, {headers:this.token});
  }


  pro(url:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.get(this.baseurl+url , {headers:this.token})
  }


forgotPassword(url:any,data:any){
  return this.http.post(this.baseurl+url,data)

}

changepass(url:any,data:any){
  return this.http.post(this.baseurl+url,data)
}


  register(url:any,data:any){
    return this.http.post(this.baseurl+url,data);
  }


  homepageget(url:any){
    // this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.get(this.baseurl+url);
  }

  getSchoolPost(path:any){
    return this.http.get(this.baseurl+path);
  }
  updatePostSchool(path:any,data:any){
    return this.http.put(this.baseurl+path,data);
  }

  postSchoolPost(url:any,data:any){
    return this.http.post(this.baseurl+url,data)

  }

  DeleteSchool(url:any){
    return this.http.delete(this.baseurl+url)
  }


  // gpost(url:any,data:any){
  //   return this.http.get(this.baseurl+url,data);
  // }

  // sample(url:any,data:any){
  //   return this.http.post(this.baseurl+url,data);
  // }

  

 

  


 

 

}
