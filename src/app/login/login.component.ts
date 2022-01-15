import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  error=false;
  username:string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.username == "shubham" && this.password=="1234"){
      this.router.navigate(['/landing/home']);
    }else{
      this.error=true;
    }
    
  }

}
