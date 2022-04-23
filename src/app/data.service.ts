import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
public id=new BehaviorSubject(4);
public data =new BehaviorSubject('');
public currentId =this.id.asObservable();
public currentData = this.data.asObservable();


  setMessage(id1:any,data1:any){
   this.id.next(id1);
   this.data.next(data1);
  }

  getMessage(){
    // console.log(this.currentId);
    return this.currentId,this.currentData;
  }
  getAllData(){
    return this.http.get('http://localhost:3000/api/getAllCourses');
  }

  postData(data:any){
    return this.http.post('http://localhost:3000/api/insertCourses',data);
  }

  updateData(id:any,data:any){
   return this.http.put('http://localhost:3000/api/updateCourses/'+id,data);
  }

  deleteData(id:any){
    return this.http.delete('http://localhost:3000/api/deleteCourses/'+id);
  }
}
