import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-sec-two',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './sec-two.component.html',
  styleUrl: './sec-two.component.scss'
})
export class SecTwoComponent {

}
