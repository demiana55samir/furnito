import { Component } from '@angular/core';
import { NavbarComponent } from "../home/navbar/navbar.component";
import { HeadshopComponent } from "./headshop/headshop.component";
import { SecThreeComponent } from "../home/sec-three/sec-three.component";
import { SecTwoComponent } from "../home/sec-two/sec-two.component";
import { FooterComponent } from "../home/footer/footer.component";
import { CardsComponent } from "../home/sec-two/cards/cards.component";
import { RewardComponent } from "./reward/reward.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NavbarComponent, HeadshopComponent, SecThreeComponent, SecTwoComponent, FooterComponent, CardsComponent, RewardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
