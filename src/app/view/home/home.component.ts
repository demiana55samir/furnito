import { Component } from '@angular/core';
import { SectOneComponent } from "./sect-one/sect-one.component";
import { SecTwoComponent } from "./sec-two/sec-two.component";
import { SecThreeComponent } from "./sec-three/sec-three.component";
import { SecFourComponent } from "./sec-four/sec-four.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectOneComponent, SecTwoComponent, SecThreeComponent, SecFourComponent, RouterOutlet,
    HeaderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
