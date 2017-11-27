import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private usersUrl = '/webapptaak/users';

    constructor (private http: Http) {}
    // get("/api/contacts/:id") endpoint not used by Angular app
    /*
    getUser(username: String): Promise<void | User> {
      return this.http.get(this.usersUrl + '/' + username)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);      
    }*/

    getUsers(): Promise<void | User[]> {
        console.log(this.usersUrl);
        return this.http.get(this.usersUrl)
                   .toPromise()
                   .then(response => response.json() as User[])
                   .catch(this.handleError);
      }


    createUser(newUser: User): Promise<void | User> {
        console.log("gh");
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