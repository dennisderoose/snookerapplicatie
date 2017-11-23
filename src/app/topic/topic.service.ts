import { Injectable } from '@angular/core';
import { Topic } from './topic';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TopicService {
    private topicsUrl = '/webapptaak/collections/topics';

    constructor (private http: Http) {}

    // get("/api/contacts")
    getContacts(): Promise<void | Topic[]> {
      return this.http.get(this.topicsUrl)
                 .toPromise()
                 .then(response => response.json() as Topic[])
                 .catch(this.handleError);
    }

    // post("/api/contacts")
    createContact(newContact: Topic): Promise<void | Topic> {
      return this.http.post(this.topicsUrl, newContact)
                 .toPromise()
                 .then(response => response.json() as Topic)
                 .catch(this.handleError);
    }

    // get("/api/contacts/:id") endpoint not used by Angular app

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
      console.error(errMsg); // log to console instead
    }
}