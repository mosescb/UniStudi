import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  checklist_status = 0;

  selectedCategories: any[];
  categories: any[] = [{name: 'Selfnet (Wi-fi) Setup for Allmandring Students', key: '1'}, {name: 'Enrollment Documents submission at Building 5C', key: '2'}, {name: 'City Registration if you\'re new in Stuttgart', key: '3'}, {name: 'Activate TIK (student account)', key: '4'}, {name: 'Activate SSB Move semesterticket to travel hasslefree', key: '5'},
   {name: 'Select Courses from Campus portal for this semester', key: '6'}];

  uniNews = ["FIUS Hackathon starting on Friday 13.05.2022","Online Career Fair by Stuttgart Informatik info. on 18th May: Talent Fidner",
  "Visit the Campus Beach now at Vaihingen Campus","Participate in Sustainibility Weeks at university from 25th May t 2nd June"]

  ngOnInit() {}

  //Function to redirect user to various sections of the application
  openChecklist(){
    this.router.navigateByUrl('/checklist')
  }

  openFGDashboard(){
    this.router.navigateByUrl('/FGDashboard')
  }

  refresh() {
    window.location.reload();
  }

}
