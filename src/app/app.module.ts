import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AdidasComponent } from './pages/adidas/adidas.component';
import { TwiterComponent } from './pages/twiter/twiter.component';
import { FatherandsonComponent } from './pages/fatherandson/fatherandson.component';
import { HomeComponent } from './pages/home/home.component';
import { ROUTES } from './router';
import { MagicpipePipe } from './pipes/magicpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdidasComponent,
    TwiterComponent,
    FatherandsonComponent,
    HomeComponent,
    MagicpipePipe
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
