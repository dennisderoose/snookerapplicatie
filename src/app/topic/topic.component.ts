import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic/topic';
import { TopicService } from '../topic/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [TopicService]
})
export class TopicComponent implements OnInit {

  topics: Topic[]
  selectedTopic: Topic

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.topicService
    .getContacts()
    .then((topics: Topic[]) => {
      this.topics = topics.map((topic) => {
        return topic;
      });
    });    
  }

  private getIndexOfContact = (topicId: String) => {
    return this.topics.findIndex((topic) => {
      return topic._id === topicId;
    });
  }

  selectContact(topic: Topic) {
    this.selectedTopic = topic
  }

  createNewContact() {
    var topic: Topic = {
      name: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectContact(topic);
  }  

}
