import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFontSize1Component } from './app-font-size1/app-font-size1.component';
import {FormsModule} from '@angular/forms';
import { PetComponent } from './pet-image/pet-image.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFontSize1Component,
    PetComponent,
    CalculatorComponent,
    HackerNewsComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
