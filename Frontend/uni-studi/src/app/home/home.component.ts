import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService,private route: Router) { }

  ngOnInit(): void {
  }

  //navigate to login page when user clicks on "Get Started"
  login(){
    this.route.navigateByUrl("/login")
  }
}
