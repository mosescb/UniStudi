import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(public auth: AuthService,private route : Router) {
  }

  login(){
    this.route.navigateByUrl("/login")
  }

  dashboard(){
    this.route.navigateByUrl("/dashboard")
  }

  logout(){
    this.auth.logout();
    this.route.navigateByUrl("/")
  }

}
