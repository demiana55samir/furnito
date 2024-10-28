import { Component } from '@angular/core';
import { HeadshopComponent } from "./headshop/headshop.component";
import { SecThreeComponent } from "../home/sec-three/sec-three.component";
import { SecTwoComponent } from "../home/sec-two/sec-two.component";
import { CardsComponent } from "../home/sec-two/cards/cards.component";
import { RewardComponent } from "./reward/reward.component";
import { DetailsComponent } from "./details/details.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeadshopComponent, SecThreeComponent, SecTwoComponent, CardsComponent, RewardComponent, DetailsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
