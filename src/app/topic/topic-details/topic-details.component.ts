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
    console.log("hln");
    console.log(topic);
    this.topicService.createTopic(topic).then((newTopic: Topic) => {
      this.createHandler(newTopic);
    });
  }

  ngOnInit() {
    this.createNewTopic();
  }

  onBtnClick() {
    console.log(this.selectedTopic.name)
  }

  private getIndexOfContact = (topicId: String) => {
    return this.topics.findIndex((topic) => {
      return topic._id === topicId;
    });
  }

  selectTopic(topic: Topic) {
    console.log("P");
    this.selectedTopic = topic
  }

  createNewTopic(): void {
    var topic: Topic = {
      name: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectTopic(topic);
  } 

  addTopic = (topic: Topic) => {
    console.log("K");
    this.topics.push(topic);
    this.selectTopic(topic);
    return this.topics;
  }


}
