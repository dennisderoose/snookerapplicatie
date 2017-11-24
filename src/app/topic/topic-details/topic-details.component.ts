import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic.model';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {
  @Input() name: string;
  /*@Input() name: string;
  @Input()
  topic: Topic;

  @Input()
  createHandler: Function;

  constructor(private topicService: TopicService) { }

  createTopic(topic: Topic) {
    this.topicService.createTopic(topic).then((newTopic: Topic) => {
      this.createHandler(newTopic);
    });
  }

  ngOnInit() {
  }
*/
  name = 'Angular 5';
  selectedTopic: Topic;

  ngOnInit(): void {
    this.createNewTopic();
  }

  onBtnClick() {
    console.log(this.selectedTopic.name)
  }

  selectTopic(topic: Topic): void {
    this.selectedTopic = topic;
  }

  createNewTopic(): void {
    var topic: Topic = {
      name: ''
    };

    this.selectTopic(topic);
  }


}
