import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { GetChecklistDataService } from '../get-checklist-data.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor(private getChecklistService: GetChecklistDataService,private auth: AuthService,private router: Router,) { }

  checklist_status = 0;
  selectedCategories: any[];
  categories: any[];

  ngOnInit(): void {
    this.getCheckListData();
  }

  //save the changes performed by the user
  checkListSave(){
    let uname = localStorage.getItem('LoggedInUser');
    let cid = [];
    this.selectedCategories.forEach(ele => {
      cid.push(ele['cid'])
    });
    this.getChecklistService.saveCheckListData(uname,cid).subscribe(data=>{
      console.log(data)
    })
    this.updateStatus();
  }

  //get data for checklist based on the username of the logged in user
  getCheckListData(){
    let uname = localStorage.getItem('LoggedInUser');
    this.getChecklistService.getCheckListData(uname).subscribe(data=>{
      this.categories = data
      this.selectedCategories = data.filter(x=>x.Status==1)
      console.log(this.selectedCategories)
      this.updateStatus();
    })
  }

  //helper function if we need to perform window refresh
  refresh() {
    window.location.reload();
  }

  //function to update if checklist is completed or not (ICON)
  updateStatus(){
    if(this.selectedCategories && this.selectedCategories.length === this.categories.length){
      this.checklist_status = 1
    }else{
      this.checklist_status = 0
    }
  }

  back(){
    this.router.navigateByUrl('/dashboard')
  }
}
