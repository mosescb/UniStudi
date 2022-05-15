import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GetChecklistDataService } from '../get-checklist-data.service';

@Component({
  selector: 'app-fgpage',
  templateUrl: './fgpage.component.html',
  styleUrls: ['./fgpage.component.css']
})
export class FGPageComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private getChecklistService: GetChecklistDataService) { }

  fgNews = ["FIUS Hackathon starting on Friday 13.05.2022","Online Career Fair by Stuttgart Informatik info. on 18th May: Talent Finder",
  "Plan your studies with our Semester Planner @Mensa","Fachgruppe weekly meetings on every Tuesday @S0.108 Universitat 38"]
  fglink: string;

  chat = [{msg:"Hi",reply:"Hello, How may I help you?"},{msg:"Hey",reply:"Hello, How may I help you?"},
  {msg:"I want old exam papers",reply:"Sure, which subject?"},{msg:"Hello",reply:"Hello, How may I help you?"},
  {msg:"Machine Learning",reply:"Ok, we'll email it to you soon!"},{msg:"Thank you",reply:"You're Welcome!"},
  {msg:"Bye",reply:"Tschüss"}]

  userMsg = "";
  msgArr = [];
  replyArr = [];

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.fglink = JSON.parse(localStorage.getItem('FGDetails'))['link']
    console.log(this.fglink);

    this.getChecklistService.getFGNewsDetails(id).subscribe(data=>{
      this.fgNews = data
      console.log(this.fgNews)
    })
  }

  back(){
    this.router.navigateByUrl('/FGDashboard')
  }

  visitWebsite(){
    window.open(this.fglink,'_blank');
  }

  sendMsg(){
    let reply = ""

    this.chat.forEach(element => {
      if(element.msg.toLowerCase() === this.userMsg.toLowerCase())
        reply = element.reply
    });

    if(reply === "")
      reply = "Sorry I'm not an expert right now but I'll get back to you soon :)"
    
    this.replyArr.push(reply)
    this.msgArr.push(this.userMsg)
  }

}
