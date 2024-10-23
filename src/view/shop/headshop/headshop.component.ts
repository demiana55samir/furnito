import { Component } from '@angular/core';
import { NavbarComponent } from "../../home/navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headshop',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './headshop.component.html',
  styleUrl: './headshop.component.scss'
})
export class HeadshopComponent {

}
