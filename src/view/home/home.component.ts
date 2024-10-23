import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SectOneComponent } from "./sect-one/sect-one.component";
import { SecTwoComponent } from "./sec-two/sec-two.component";
import { SecThreeComponent } from "./sec-three/sec-three.component";
import { SecFourComponent } from "./sec-four/sec-four.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
     FooterComponent,
      SectOneComponent, SecTwoComponent, SecThreeComponent, SecFourComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
