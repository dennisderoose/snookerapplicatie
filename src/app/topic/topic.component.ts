import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic/topic.model';
import { TopicDetailsComponent } from '../topic/topic-details/topic-details.component';
import { TopicService } from '../topic/topic.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [TopicService,TopicDetailsComponent]
})
export class TopicComponent implements OnInit {
  name = 'test'
  topics: Topic[]
  selectedTopic: Topic

  constructor(private topicService: TopicService, private topicDetailsComponent: TopicDetailsComponent) { }

  ngOnInit(): void {
    this.createNewTopic();
    this.topicService
    .getTopics()
    .then((topics: Topic[]) => {
      this.topics = topics.map((topic) => {
        return topic;
      });
    });    
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
    console.log("B");
    this.selectedTopic = topic
    console.log(this.selectedTopic);
  }

  createNewTopic(): void {
    var topic: Topic = {
      name: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectTopic(topic);
  }  

  addTopic = (topic: Topic) => {
    //this.topics.push(this.topicDetailsComponent.addTopics);
    topic = new Topic();
    console.log(this.topicDetailsComponent.addTopics);
    topic = this.topicDetailsComponent.addTopics
    console.log(this.topics.length);
    console.log("length");    
    //console.log(this.topics.pop);
    topic.name = 'klm';
    console.log(topic.name);
    this.topics.push(topic);
    this.selectTopic(topic);
    return this.topics;
  }

}
