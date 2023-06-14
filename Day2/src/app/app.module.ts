import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HighlightDirective } from './highlight.directive';
import { ButtonClassComponent } from './button-class/button-class.component';
import { RedGreenDirective } from './red-green.directive';
import { SimanKriaaPipe } from './pipes/siman-kriaa.pipe';
import { DayHebPipe } from './pipes/day-heb.pipe';
import { FirstUpperPipe } from './pipes/first-upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HighlightDirective,
    ButtonClassComponent,
    RedGreenDirective,
    SimanKriaaPipe,
    DayHebPipe,
    FirstUpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
