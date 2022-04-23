import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public registerForm:any;
public isSubmitted:any;
  constructor(private serv:DataService,private fb:FormBuilder,private route:Router) { 

    this.registerForm = this.fb.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      empId:['',[Validators.required]],
      branch:['',[Validators.required]],
      role:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    
    console.log(this.registerForm.value);
    this.serv.postData(this.registerForm.value).subscribe((res)=>{
      console.log(res);
    });
    this.isSubmitted=true;
    this.route.navigate(['login']);
  }

  get f(){
   return this.registerForm.controls;
  }
}
