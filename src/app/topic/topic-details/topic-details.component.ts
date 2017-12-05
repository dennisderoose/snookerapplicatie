import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic.model';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {
  @Input()
  topic: Topic;

  @Input()
  createHandler: Function;

  topics: Topic[];
  selectedTopic: Topic;

  constructor(private topicService: TopicService) { }

  createTopic(topic: Topic) {
    topic = new Topic();
    topic.name = this.selectedTopic.name;
    this.topicService.createTopic(topic).then((newTopic: Topic) => {
      this.createHandler(newTopic);
    });
    this.router.navigate(['../topic']);
  }

  ngOnInit() {
    this.createHandler = new Function;
    this.topic = new Topic();
    this.createNewTopic();
  }

  private getIndexOfContact = (topicId: String) => {
    return this.topics.findIndex((topic) => {
      return topic._id === topicId;
    });
  }

  selectTopic(topic: Topic) {
    this.selectedTopic = topic
  }

  createNewTopic(): void {
    var topic: Topic = {
      name: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectTopic(topic);
  } 
}
