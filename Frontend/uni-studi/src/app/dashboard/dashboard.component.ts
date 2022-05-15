import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  uniNews = [{title:"FIUS Hackathon starting on Friday 13.05.2022",link:"https://fius.de/index.php/studierende/hackathon/"},
  {title:"Online Career Fair by Stuttgart Informatik info. on 18th May: Talent Finder",link:"https://www.informatik-forum.org/kontaktmesse"},
  {title:"Visit the Campus Beach now at Vaihingen Campus",link:"https://campusbeach.stuvus.uni-stuttgart.de/"},
  {title:"Participate in Sustainibility Weeks at university from 25th May to 2nd June",link:"https://hochschule-n-bw.de/en/"}]

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

  openStuvusPage(){
    window.open("https://stuvus.uni-stuttgart.de/en/",'_blank');
  }

}
