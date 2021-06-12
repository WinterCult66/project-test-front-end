import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AdidasComponent } from './pages/adidas/adidas.component';
import { TwiterComponent } from './pages/twiter/twiter.component';
import { FatherandsonComponent } from './pages/fatherandson/fatherandson.component';
import { HomeComponent } from './pages/home/home.component';
import { ROUTES } from './router';

@NgModule({
  declarations: [
    AppComponent,
    AdidasComponent,
    TwiterComponent,
    FatherandsonComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
