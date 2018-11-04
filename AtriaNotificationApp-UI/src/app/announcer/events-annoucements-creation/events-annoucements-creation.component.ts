import { Component, OnInit } from '@angular/core';
import{Event} from '../../models/event.model';
import{Announcement} from '../../models/announcement.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-events-annoucements-creation',
  templateUrl: './events-annoucements-creation.component.html',
  styleUrls: ['./events-annoucements-creation.component.css']
})
export class EventsAnnoucementsCreationComponent implements OnInit {

  

  eventDetail: Event={
    event_name: '',
    event_banner: '',
  

    announcements:[ 
    ],
    description: '',
    showAsBanner: false
  }
  eventValidationMessage:string;
  eventSubmitted:boolean=false;
  descriptionSubmitted:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  back(e){
    this.eventSubmitted=!e;
  }
  eventSubmit(){
  
   if(this.eventDetail.event_name.length<=0 && this.eventDetail.event_banner.length<=0 && this.eventDetail.description.length<=0)
   {
    this.eventValidationMessage='fillout all details';
    //console.log(this.eventValidationMessage);
    
   }
   else if(this.eventDetail.event_name.length<=0)
   {
    this.eventValidationMessage='fillout event name details';
    //console.log(this.eventValidationMessage);
    
   }
   else if(this.eventDetail.showAsBanner===true)
   {
    if(this.eventDetail.event_banner.length<=0)
   {
    this.eventValidationMessage='banner not selected';
    //console.log(this.eventValidationMessage);
    
   }
  }
   else if(this.eventDetail.description.length<=0)
   {
    this.eventValidationMessage='fillout description';
    //console.log(this.eventValidationMessage);
    
   }
   else{
    this.eventValidationMessage='';
    this.eventSubmitted=true;
   }

  }

   
}