import { AuthenticationService } from '../user/authentication.service';
import { Injectable } from '@angular/core';
import { Break } from './break.model';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SnookerDataService {
  private _appUrl = '/snookerapplicatie';
  private _breaks;

  ///snookerapplicatie/topics/:id

  constructor(private http: Http, private auth: AuthenticationService) {
  }

  breaks(user): Observable<Break[]> {
    return this.http.get(`${this._appUrl}/breaks/${user}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`})})
      .map(response => response.json().map(item => Break.fromJSON(item)));

  }

  getBreak(id): Observable<Break> {
    return this.http.get(`${this._appUrl}/break/${id}`)
      .map(response => response.json()).map(item => Break.fromJSON(item));
  }

  addNewBreak(rec): Observable<Break> {
    return this.http.post(`${this._appUrl}/breaks`, rec, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(res => res.json()).map(item => Break.fromJSON(item));
  }

  updateBreak(rec,id): Promise<Break> {
    //console.log(rec.opmerkingen);
    //console.log(id);
    return this.http.put(`${this._appUrl}/breaks/${id}`, rec, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .toPromise()
    .then(() => rec)
    .catch(this.handleError);    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }

 //removeBreak(rec) {
 // return this.http.delete(`${this._appUrl}/break/${rec.id}`).map(res => res.json()).map(item => Break.fromJSON(item));  
 //}

  removeBreak(id) {
    return this.http.delete(`${this._appUrl}/break/${id}`).map(res => res.json()).map(item => Break.fromJSON(item));
  }
/*
  addOpmerkingToTopic(opmerking: Opmerking, topic: Topic): Observable<Opmerking> {
    return this.http.post(`${this._appUrl}/topic/${topic.id}/opmerkingen`, opmerking)
      .map(res => res.json()).map(item => Opmerking.fromJSON(item));
  }*/

}
