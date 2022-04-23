import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public admin:any
  constructor(private serv:DataService ,private route:Router) { 
   this.getData();
  }
 getData(){
  this.serv.getAllData().subscribe((res)=>{
    console.log(res);
    this.admin = res;
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

  onDelete(id:any){
    let temp =confirm('Are you sure you want to delete:');
    if(temp === true){
      this.serv.deleteData(id).subscribe((res)=>{
        console.log(res);

        if(this.admin.length>0){
          this.getData();
        }
      })

     
    }
  }
}
