import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TopicComponent } from 'app/topic/topic.component';
import { TopicDetailsComponent } from 'app/topic/topic-details/topic-details.component';
import { TopicService } from 'app/topic/topic.service';


const routes = [
  { path: 'topic-details', component:  TopicDetailsComponent}
];

@NgModule({
  declarations: [
    TopicComponent,
    TopicDetailsComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
      TopicService
  ]
})
export class TopicModule { }