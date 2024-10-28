import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, FirstComponent, SecondComponent, ThirdComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

}
