import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatfactsComponent } from './catfacts/catfacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CatfactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
