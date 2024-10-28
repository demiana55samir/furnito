import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Card } from '../../../core/models/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: Card;

  @Input() image: string='';
  @Input() title: string='';
  @Input() description: string='';
  @Input() price: string='';
  @Input() originalPrice: string='';
  @Input() discount: string='';

}
