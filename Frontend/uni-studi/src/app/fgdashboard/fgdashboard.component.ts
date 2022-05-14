import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fgdashboard',
  templateUrl: './fgdashboard.component.html',
  styleUrls: ['./fgdashboard.component.css']
})
export class FGDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  checklist_status = 0;
  selectedCategories: any[];
  FGgroups: any[] = [{name: 'FG Informatik', key: '1'}, {name: 'FG Electrotechnik', key: '2'}, {name: 'FG Mechanical', key: '3'},
   {name: 'FG Chemie', key: '4'}, {name: 'FG Infotech', key: '5'},
   {name: 'FG Mathematik', key: '6'},{name: 'FG Physics', key: '7'}];

  ngOnInit(): void {
  }

  openFachgruppePage(key){
    console.log(key)
    this.router.navigateByUrl('/fgPage/'+key)
  }

  refresh() {
    window.location.reload();
  }

}
