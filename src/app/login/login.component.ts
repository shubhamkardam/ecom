import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  error=false;
  user:string;
  username:string;
  password:string;


  @ViewChild('test', {static:true}) something:ElementRef;

  constructor(
      private router:Router,
      public globalService: GlobalService
    ) { 
    

  }

  ngOnInit(): void {
    this.globalService.userName = 'Vidisha';
  }

  login(){
    if (this.username == "shubham" && this.password=="1234"){
      this.globalService.userName = this.something.nativeElement.value;
      sessionStorage.setItem('user', this.globalService.userName);
      this.router.navigate(['/landing/home']);
    }else{
      this.error=true;
    }
  }
}
