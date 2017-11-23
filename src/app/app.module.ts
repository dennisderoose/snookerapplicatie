import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { TopicDetailsComponent } from './topic/topic-details/topic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    TopicDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
