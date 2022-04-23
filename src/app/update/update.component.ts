import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
public registerForm:any;
public isSubmitted:boolean=false
public temp:any
public oldData:any;
  constructor(private fb:FormBuilder,private serv:DataService,private route:Router) { 
    this.serv.getMessage().subscribe((res)=>{
      console.log(res);
      this.oldData = res;

     console.log(this.oldData.id);
    })
// console.log();
    this.registerForm = fb.group({
      name:[this.oldData.name,[Validators.required]],
      age:[this.oldData.age,[Validators.required]],
      empId:[this.oldData.empId,[Validators.required]],
      branch:[this.oldData.branch,[Validators.required]],
      role:[this.oldData.role,[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    
    console.log(this.registerForm.value);
    // console.log(this.oldData.id);
    this.serv.updateData( this.oldData.id,this.registerForm.value).subscribe((res)=>{
      console.log(res);
// this.temp =res;
    });
    this.isSubmitted=true; 

    if(this.registerForm.value.role == 'user' && this.oldData.role == 'user'){

       this.route.navigate(['login']);

    }else if((this.registerForm.value.role == 'admin' || this.registerForm.value.role == 'user') && (this.oldData.role == 'user' || this.oldData.role == 'admin')){
      this.route.navigate(['admin']);
    }
    
   
  }

  get f(){
   return this.registerForm.controls;
  }
}
