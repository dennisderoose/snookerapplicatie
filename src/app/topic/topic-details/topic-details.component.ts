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

  @Input()
  topicje: Topic
  
  topics: Topic[];
  selectedTopic: Topic;

  constructor(private topicService: TopicService) { }

  createTopic(topic: Topic) {
    console.log(this.selectedTopic.name);
    topic = new Topic();
    topic.name = this.selectedTopic.name;
    this.topicje = topic;
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
    this.selectedTopic = topic
  }

  createNewTopic(): void {
    var topic: Topic = {
      name: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectTopic(topic);
  } 

  addTopi() : Topic {
    console.log(this.topicje);
    return this.topicje;
  }

  addTopics = (topicje: Topic) => {
    console.log(this.topicje.name);
    return this.topicje === topicje;
  }

  addTopic = (topic: Topic) => {
    console.log("dennis");
    this.topics.push(topic);
    this.selectTopic(topic);
    return this.topics;
  }


}
