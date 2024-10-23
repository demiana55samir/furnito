import { Routes } from '@angular/router';
import { HomeComponent } from '../view/home/home.component';
import { ShopComponent } from '../view/shop/shop.component';
import { AboutComponent } from '../view/about/about.component';
import { ContactComponent } from '../view/contact/contact.component';
import { NotfoundComponent } from '../view/notfound/notfound.component';

export const routes: Routes = [
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'shop', component: ShopComponent },
    {path: 'about', component: AboutComponent },
    {path: 'contact', component:ContactComponent },
    {path:'**',component: NotfoundComponent}
];
 