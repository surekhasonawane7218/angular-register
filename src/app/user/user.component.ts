import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public Users:any;
public deleteData:any;
  constructor(private serv:DataService,private route:Router) {
this.getData();
   }
getData(){

  this.serv.getMessage().subscribe((res)=>{
    console.log(res);
    console.log('user profile')
    this.Users = res;
    console.log(this.Users);
  })
}
  ngOnInit(): void {
  }

  onEdit(id:any,data:any){
    console.log(id);
    console.log(data);
    this.serv.setMessage(id,data);
    this.route.navigate(['update']);
    // this.serv.updateData(id,data).subscribe((res)=>{
    //   console.log(res);
    // })
  }

  // onDelete(id:any){
  //   console.log(id);
  //   let temp =  confirm('are you sure you want to delete');
  //   console.log(temp);
  //   if(temp === true ){
  //     this.serv.deleteData(id).subscribe((res)=>{
  //     console.log(res);
      
  //        this.route.navigate(['register']);
       
    
  //   })
  //  }else{

  //  }
  // }
}
