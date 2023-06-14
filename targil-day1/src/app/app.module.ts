import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume/resume.component';
import { HeaderComponent } from './components/resume/header/header.component';
import { DetailsComponent } from './components/resume/details/details.component';
import { WorksComponent } from './components/resume/works/works.component';
import { ListComponent } from './components/numbers/list/list.component';
import { MainComponent } from './components/gallery/main/main.component';
import { ImageBigComponent } from './components/gallery/image-big/image-big.component';
import { ImageSmallComponent } from './components/gallery/image-small/image-small.component';
import { ImageListComponent } from './components/gallery/image-list/image-list.component';
import { ButtonsComponent } from './components/gallery/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HeaderComponent,
    DetailsComponent,
    WorksComponent,
    ListComponent,
    MainComponent,
    ImageBigComponent,
    ImageSmallComponent,
    ImageListComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
