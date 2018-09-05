import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // No. of featured events to be shown
  no_of_feat_events = 3;

  events: Array<Object> = [
    {
      title: 'dexterix event',
      img: 'https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&h=350',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
      posted: '2017-01-16',
      type: 'event'
    },
    {
      title: 'dexterix event',
      img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
      posted: '2013-01-16',
      type: 'event'
    },
    {
      title: 'android workshop',
      img: 'https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?auto=compress&cs=tinysrgb&h=350',
      description: 'Join the workshop. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
      posted: '2013-10-16',
      type: 'event'
    },
    {
      title: 'tech vistara',
      img: 'http://anthillonline.com/wp-content/uploads/2015/09/technology.png',
      description: 'Show case your talent in embedded projects',
      posted: '2019-01-01',
      type: 'event'
    },
    {
      title: "Aptitude test tomorrow",
      description: 'Be prepared for the aptitude tomorrow',
      posted: '2019-5-1',
      type: 'annoucement'
    },
    {
      title: 'some event',
      img: 'http://www.youthincmag.com/wp-content/uploads/2018/01/technology.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      posted: '2018-7-05',
      type: 'event'
    },
    {
      title: "",
      description: 'Tomorrow is a holiday, due to holiday',
      posted: '2015-5-1',
      type: 'annoucement'
    },
    {
      title: "holiday",
      description: 'Tomorrow is a holiday, on account of placements',
      posted: '2018-8-1',
      type: 'annoucement'
    }
  ];

  // sort by recent date
  sortRecent() {
    return this.events.sort(function (a, b) {
      let date1 = new Date(a['posted']);
      let date2 = new Date(b['posted']);
      if (date1 > date2)
        return -1;
      else if (date1 === date2)
        return 0;
      else return 1;
    })
  }

  // show featured events
  feat_events() {
    let fevents = this.sortRecent();
    fevents = fevents.filter(val => val['type'] === 'event')
    fevents = fevents.slice(0, this.no_of_feat_events)
      .map((val, i) => {
        let cssClass = 'feat-'+(i+1);
        val['css'] = { [cssClass]: true };
        return val
      });
    return fevents;
  }

  // show all events
  all_events() {
    return this.events.filter(val => val['type'] === 'event');
  }

  // show annoucements
  annoucements() {
    return this.events.filter(val => val['type'] === 'annoucement');
  }
}
