import { AuthenticationService } from '../user/authentication.service';
import { Injectable } from '@angular/core';
import { Topic } from './topic.model';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TopicDataService {
  private _appUrl = '/webapptaak';
  private _topics;

  constructor(private http: Http, private auth: AuthenticationService) {
  }

  get topics(): Observable<Topic[]> {
    return this.http.get(`${this._appUrl}/topics`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(response => response.json().map(item => Topic.fromJSON(item)));

  }

  getTopic(id): Observable<Topic> {
    return this.http.get(`${this._appUrl}/topic/${id}`)
      .map(response => response.json()).map(item => Topic.fromJSON(item));
  }

  addNewTopic(rec): Observable<Topic> {
    return this.http.post(`${this._appUrl}/topics`, rec, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.json()).map(item => Topic.fromJSON(item));
  }

  removeTopic(rec) {
    return this.http.delete(`${this._appUrl}/topic/${rec.id}`).map(res => res.json()).map(item => Topic.fromJSON(item));
  }

}
