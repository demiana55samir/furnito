import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-sect-one',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './sect-one.component.html',
  styleUrl: './sect-one.component.scss'
})
export class SectOneComponent {

}
