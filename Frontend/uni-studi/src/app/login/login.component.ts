import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder,private auth: AuthService) { }

  loginForm: FormGroup;
  uname : any;
  password: any;

  ngOnInit(): void {
    if(this.auth.isLoggednIn()) {
      this.router.navigateByUrl('/')  
    } else {
      this.loginForm = this.formBuilder.group({
        uname: ['', Validators.required],
        password: ['', Validators.required]
      },
      err => {
        window.alert("Something really went wrong !");
      });  
    }
  }

  get formValidation() { return this.loginForm.controls; }

  invalidpwd = "";
  invaliduname = "";
  submitted = false;
  data = "login"
  onSubmit() {
    this.invalidpwd = "";
    this.invaliduname = "";
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.auth.login(this.uname,this.password).subscribe(
        (data) => {
          console.log(data)
          if (data === 'correct') {
            this.auth.sendToken(this.loginForm.value.uname)
            this.router.navigateByUrl('/dashboard')
          } else {
            this.invaliduname = ("username/password are incorrect")
          }
        },
        err => {
          window.alert("Something really went wrong !");
        }
      )
    }
  }

}
