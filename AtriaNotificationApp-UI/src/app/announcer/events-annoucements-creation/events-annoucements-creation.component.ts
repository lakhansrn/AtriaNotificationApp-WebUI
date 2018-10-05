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
    
    announcements: [{
      title:'',
      img:'',
      description:'',
      posted:''}
    ],
    description: '',
    showAsBanner: false
  }
  constructor() { }

  ngOnInit() {
  }

}
