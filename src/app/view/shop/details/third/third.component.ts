import { Component } from '@angular/core';
import { CardsComponent } from "../../../home/sec-two/cards/cards.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CardsComponent,CommonModule],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss'
})
export class ThirdComponent {
  card 
  = [
    {
      title: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      originalPrice: 'Rp 2.500.000',
      image: 'Images-1.png',
      discount: '-30%',
    },
    {
      title: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      image: 'Images.png',
      new: true,
    },
    {
      title: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      image: 'image 7.png',
    },
    {
      title: 'Potty',
      description: 'Minimalist flower pot',
      price: 'Rp 500.000',
      originalPrice: 'Rp 1.000.000',
      image: 'Images-2.png',
      discount: '-10%',
    },
  ];
}
