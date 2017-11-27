import { Injectable } from '@angular/core';
import { Topic } from './topic.model';
import { User } from '../user/user.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TopicService {
    private topicsUrl = '/webapptaak/topics';
    private usersUrl = '/webapptaak/users';

    constructor (private http: Http) {}

    // get("/api/contacts")
    getTopics(): Promise<void | Topic[]> {
      console.log(this.topicsUrl);
      return this.http.get(this.topicsUrl)
                 .toPromise()
                 .then(response => response.json() as Topic[])
                 .catch(this.handleError);
    }

    // post("/api/contacts")
    createTopic(newTopic: Topic): Promise<void | Topic> {
      return this.http.post(this.topicsUrl, newTopic)
                 .toPromise()
                 .then(response => response.json() as Topic)
                 .catch(this.handleError);
    }

    // get("/api/contacts/:id") endpoint not used by Angular app
    getUser(username: String): Promise<void | User> {
      return this.http.get(this.usersUrl + '/' + username)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);      
    }

    createUser(newUser: User): Promise<void | User> {
      return this.http.post(this.usersUrl, newUser)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);      
    }
    // delete("/api/contacts/:id")
    /*
    deleteContact(delContactId: String): Promise<void | String> {
      return this.http.delete(this.contactsUrl + '/' + delContactId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/contacts/:id")
    updateContact(putContact: Contact): Promise<void | Contact> {
      var putUrl = this.contactsUrl + '/' + putContact._id;
      return this.http.put(putUrl, putContact)
                 .toPromise()
                 .then(response => response.json() as Contact)
                 .catch(this.handleError);
    }
*/
    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
      console.log(errMsg); // log to console instead
    }
}