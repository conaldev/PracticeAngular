import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownTimerGetSetComponent } from './countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerOnchangesComponent } from './countdown-timer-onchanges/countdown-timer-onchanges.component';
import { CountdownTimerEventAliasComponent } from './countdown-timer-event-alias/countdown-timer-event-alias.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { ViewDefaultComponent } from './view-default/view-default.component';
import { ViewShadowDomComponent } from './view-shadow-dom/view-shadow-dom.component';
import { ViewNoneComponent } from './view-none/view-none.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerOnchangesComponent,
    CountdownTimerEventAliasComponent,
    RatingBarComponent,
    ViewDefaultComponent,
    ViewShadowDomComponent,
    ViewNoneComponent,
    PipeDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
