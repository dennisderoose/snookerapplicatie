import { TopicDataService } from '../topic-data.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Topic } from '../topic.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  private _topics: Topic[];
  public topictoevoegen: FormGroup;
  
    constructor(private fb: FormBuilder, private _topicDataService: TopicDataService, private _router: Router) {
    }
  
    ngOnInit() {
      this.topictoevoegen = this.fb.group({});      
      this._topicDataService.topics.subscribe(items => this._topics = items);
    }
    get topics() {
      return this._topics;
    }
  
    removeTopic(topic: Topic) {
      this._topicDataService.removeTopic(topic).subscribe(item =>
        this._topics = this._topics.filter(val => item.id !== val.id)
      );
    }

    onSubmit() {
          this._router.navigate(['topic-details']);
    }

}
