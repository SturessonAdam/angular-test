import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PicturesComponent } from './pictures/pictures.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pictures', component: PicturesComponent},
];


