import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { FooterComponent } from "./view/shared-component/footer/footer.component";
import { NavbarComponent } from './view/shared-component/navbar/navbar.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,
     RouterOutlet, HomeComponent, FooterComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'furnito';
}
