import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  list = [
    {
    image: '../../../assets/image/KFC-logo.jpg',
    title: 'KFC',
    content: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog.'
    },
    {
      image: '../../../assets/image/centt.jpg',
      title: 'centt',
      content: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog.'
    },
    {
      image: '../../../assets/image/restaurant-logo-4.jpg',
      title: 'Black Dock',
      content: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog.'
    }
    , {
      image: '../../../assets/image/restaurant-logo-4.jpg',
      title: 'Black Dock',
      content: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
