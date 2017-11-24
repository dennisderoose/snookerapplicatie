import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic/topic.model';
import { TopicService } from '../topic/topic.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [TopicService]
})
export class TopicComponent implements OnInit {
  name = 'test'
  topics: Topic[]
  selectedTopic: Topic

  constructor(private topicService: TopicService) { }

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
    console.log("k");
    this.topics.push(topic);
    this.selectTopic(topic);
    return this.topics;
  }

}
