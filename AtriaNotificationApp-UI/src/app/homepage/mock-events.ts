import { Event } from '../model/event.model';

export const mockEvents: Event[] = [
    {
      event_name: 'dexterix',
      event_banner: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      description: '',
      showAsBanner: true,
      announcements: [
        {
          title: 'code sprint',
          img: 'https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2017-01-16',
          content: [
          ]
        },
        {
          title: 'maze builder',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16',
          content: [
            {
              title: 'Winners of maze builder',
              posted: '2017-02-16',
              image: 'https://images.pexels.com/photos/776527/pexels-photo-776527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Lakhan Soren',
                department: 'CSE',
                email: 'lakhansoren@gmail.com',
                pno: 9972172434
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            },
            {
              title: 'Maze builder registration',
              posted: '2017-02-10',
              image: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Vinutha Yadav',
                department: 'CSE',
                email: 'Vinutha@gmail.com',
                pno: 9972172432
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            },
            {
              title: 'Maze builder details',
              posted: '2017-02-10',
              image: 'https://images.pexels.com/photos/771023/pexels-photo-771023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Rakshitha C',
                department: 'CSE',
                email: 'rakshitha@gmail.com',
                pno: 9972172432
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
        {
          title: 'binary coders',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16',
          content: [
            {
              title: 'Winners of binary coders',
              posted: '2017-02-16',
              image: 'https://images.pexels.com/photos/776527/pexels-photo-776527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
        {
          title: 'android workshop',
          img: 'https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Join the workshop. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-10-16',
          content: [
            {
              title: 'Workshop registration details',
              posted: '2017-02-16',
              image: 'https://images.pexels.com/photos/776527/pexels-photo-776527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
      ]
    },
    {
      event_name: 'go green',
      event_banner: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      description: '',
      showAsBanner: false,
      announcements: [
        {
          title: 'stop wasting',
          img: 'https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2017-01-16',
          content: [
            {
              title: 'Winners of stop wasting',
              posted: '2017-05-16',
              image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
        {
          title: 'lets plant',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16',
          content: [
            {
              title: 'Plant for the good',
              posted: '2017-05-16',
              image: 'https://images.pexels.com/photos/776527/pexels-photo-776527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
        {
          title: 'green planet',
          img: 'https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16',
          content: [
            {
              title: 'Planting on wednesday',
              posted: '2017-05-16',
              image: 'https://images.pexels.com/photos/776527/pexels-photo-776527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
        {
          title: 'swatch bharath',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Join the workshop. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-10-16',
          content: [
            {
              title: 'Speech and movement',
              posted: '2017-05-16',
              image: 'https://images.pexels.com/photos/776527/pexels-photo-776527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
      ]
    },
    {
      event_name: 'mechatronics',
      event_banner: 'https://images.pexels.com/photos/239886/pexels-photo-239886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      description: '',
      showAsBanner: true,
      announcements: [
        {
          title: 'stop wasting',
          img: 'https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2017-01-16',
          content: [
            {
              title: 'Winners of stop wasting',
              posted: '2017-05-16',
              image: 'https://images.pexels.com/photos/776527/pexels-photo-776527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
        {
          title: 'lets plant',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16',
          content: [
            {
              title: 'Lets plant registration',
              posted: '2017-05-16',
              image: 'https://images.pexels.com/photos/776527/pexels-photo-776527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
        {
          title: 'green planet',
          img: 'https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-01-16',
          content: [
            {
              title: 'Winners of green planet',
              posted: '2017-05-16',
              image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
        {
          title: 'swatch bharath',
          img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350',
          description: 'Join the workshop. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cupiditate.',
          posted: '2013-10-16',
          content: [
            {
              title: 'Winners of swatch bharath',
              posted: '2017-05-16',
              image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              postedBy: {
                name: 'Yusoof Ali',
                department: 'CSE',
                email: 'yusoofash@gmail.com',
                pno: 9972172483
              },
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum quia quos pos impedit totam!',
              isApproved: true,
              isActive: true
            }
          ]
        },
      ]
    },
  ];
