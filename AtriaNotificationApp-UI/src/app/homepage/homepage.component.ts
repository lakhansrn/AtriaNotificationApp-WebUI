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

  events: Array<Object> = [
    {
      event: 'dexterix',
      annoucements: [
        {
          title: 'code sprint',
          img: 'https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2017-01-16',
        },
        {
          title: 'maze builder',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16'          
        },
        {
          title: 'binary coders',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16',          
        },
        {
          title: 'android workshop',
          img: 'https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Join the workshop. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-10-16',          
        },
      ]
    },
    {
      event: 'go green',
      annoucements: [
        {
          title: 'stop wasting',
          img: 'https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?auto=compress&cs=tinysrgb&h=350',                    
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2017-01-16',
        },
        {
          title: 'lets plant',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16'          
        },
        {
          title: 'green planet',
          img: 'https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16',          
        },
        {
          title: 'swatch bharath',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Join the workshop. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-10-16',          
        },
      ]
    },
  ];
}
