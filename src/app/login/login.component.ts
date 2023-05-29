import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { emailValidator } from '../email-validator.directive';



interface IUser {
  email:string;
  password:string;
  showPassword: boolean;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail="";
  userPassword="";
  reactiveForm!: FormGroup;
  user: IUser;
  
  constructor(
    private router: Router,
    public _router: Router
    ) { 
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }
  get password() {
    return this.reactiveForm.get('password')!;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.reactiveForm.value;
    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);

};
login() {
  if(this.userEmail == "admin@gmail.com" && this.userPassword == "admin"){
    this.router.navigateByUrl('/dashboard');
  }else{
    this.router.navigateByUrl('/home');
  }
}
}
