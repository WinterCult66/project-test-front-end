import { Routes } from "@angular/router";


//Components

import { AdidasComponent } from "../app/pages/adidas/adidas.component";
import { FatherandsonComponent } from "../app/pages/fatherandson/fatherandson.component";
import { TwiterComponent } from "../app/pages/twiter/twiter.component";
import { HomeComponent } from "../app/pages/home/home.component";



//Guards
//import { GuardService as AuthGuard } from '../app/services/guard.service';
export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'adidas', component: AdidasComponent },
    { path: 'twitter', component: TwiterComponent },
    { path: 'father-son', component: FatherandsonComponent, },



    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]


