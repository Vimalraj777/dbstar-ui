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
  profile(url:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.get(this.baseurl+url, {headers:this.token})
  }

  Post(url:any,data:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.put(this.baseurl+url,data, {headers:this.token});
  }

  po(url:any,data:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.post(this.baseurl+url,data, {headers:this.token});
  }


  profileget(url:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.get(this.baseurl+url, {headers:this.token});
  }


  profileput(url:any,data:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.put(this.baseurl+url,data, {headers:this.token});
  }

  deleted(url:any){
    this.token=new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.delete(this.baseurl+url, {headers:this.token});
  }


forgot(url:any,data:any){
  return this.http.post(this.baseurl+url,data)

}

changepass(url:any,data:any){
  return this.http.post(this.baseurl+url,data)
}





  post(url:any,data:any){
    return this.http.post(this.baseurl+url,data);
  }

  

  gpost(url:any,data:any){
    return this.http.get(this.baseurl+url,data);
  }

  sample(url:any,data:any){
    return this.http.post(this.baseurl+url,data);
  }

 

 

  


  pro(url:any){
    this.token = new HttpHeaders({'Authorization':"bearer "+localStorage.getItem('token')})
    return this.http.get(this.baseurl+url , {headers:this.token})
  }

 

}
