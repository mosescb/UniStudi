import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetChecklistDataService } from '../get-checklist-data.service';

@Component({
  selector: 'app-fgdashboard',
  templateUrl: './fgdashboard.component.html',
  styleUrls: ['./fgdashboard.component.css']
})
export class FGDashboardComponent implements OnInit {

  constructor(private router: Router,private getChecklistService: GetChecklistDataService) { }

  checklist_status = 0;
  selectedCategories: any[];
  FGgroups: any[] 
  // = [{name: 'FG Informatik', key: '1',link:"https://google.com"},
  //  {name: 'FG Electrotechnik', key: '2',link:"https://yahoo.com"},
  //  {name: 'FG Mechanical', key: '3',link:"https://yahoo.com"},
  //  {name: 'FG Chemie', key: '4',link:"https://yahoo.com"},
  //  {name: 'FG Infotech', key: '5',link:"https://yahoo.com"},
  //  {name: 'FG Mathematik', key: '6',link:"https://yahoo.com"},
  //  {name: 'FG Physics', key: '7',link:"https://yahoo.com"}];

  ngOnInit(): void {
    let uname = localStorage.getItem('LoggedInUser');
    this.getChecklistService.getFGDetails(uname).subscribe(data=>{
      this.FGgroups = data
    })
  }

  openFachgruppePage(key){
    let fg = this.FGgroups.filter(x=>x.fgid===key)
    console.log(fg)
    let fgDetails = {
      'key' : key,
      'name' : fg[0]["name"],
      'link' : fg[0]['link']
    }
    localStorage.setItem('FGDetails', JSON.stringify(fgDetails));
    this.router.navigateByUrl('/fgPage/'+key)
  }

  refresh() {
    window.location.reload();
  }

  back(){
    this.router.navigateByUrl('/dashboard')
  }
}
