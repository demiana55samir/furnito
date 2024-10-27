import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sec-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sec-three.component.html',
  styleUrls: ['./sec-three.component.scss']
})
export class SecThreeComponent implements AfterViewInit {

  items = [
    { image: 'path/to/image1.png', title: 'Title 1' },
    { image: 'path/to/image2.png', title: 'Title 2' },
    { image: 'path/to/image3.png', title: 'Title 3' },
    { image: 'path/to/image1.png', title: 'Title 1' },
    { image: 'path/to/image2.png', title: 'Title 2' },
    { image: 'path/to/image3.png', title: 'Title 3' },
    { image: 'path/to/image1.png', title: 'Title 1' },
    { image: 'path/to/image2.png', title: 'Title 2' },
    { image: 'path/to/image3.png', title: 'Title 3' },
    { image: 'path/to/image1.png', title: 'Title 1' },
    { image: 'path/to/image2.png', title: 'Title 2' },
    { image: 'path/to/image3.png', title: 'Title 3' }
  ];
  
  ngAfterViewInit(): void {

    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      dots: true
    });

  }
}

