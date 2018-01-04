import { SnookerDataService } from '../snooker-data.service';
import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Break } from '../break.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ViewChildren } from '@angular/core/src/metadata/di';
import { QueryList } from '@angular/core/src/linker/query_list';

import { DataTableModule } from 'angular-2-data-table';


@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {
  @Output() model;

  @ViewChildren("title") 
  private elTitle : QueryList<any>; 

  private sub: any;
  private user: string;

  private _breaks: Break[];
  public breaktoevoegen: FormGroup;
  public uitloggenSnookerApplicatie: FormGroup;

  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  //public opmerkingtoevoegen: FormGroup;
  
    constructor(private fb: FormBuilder, private _snookerDataService: SnookerDataService, private route: ActivatedRoute, private _router: Router) {
    }

  
    ngOnInit() {
      this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.user = params['user'] || "";
      });



      this.breaktoevoegen = this.fb.group({}); 
      this.uitloggenSnookerApplicatie = this.fb.group({});     
      /*this.opmerkingtoevoegen = this.fb.group({
        opmerkingname: ['', [Validators.required, Validators.minLength(3)]],
        topic: ['', [Validators.required, Validators.minLength(3)]]
      }); */ 
      this._snookerDataService.breaks.subscribe(items => this._breaks = items);
    }
    get breaks() {
      return this._breaks;
    }
  
    removeBreak(brek: Break) {
      this._snookerDataService.removeBreak(brek).subscribe(item =>
        this._breaks = this._breaks.filter(val => item.id !== val.id)
      );
    }

    onSubmit() {
      this._router.navigate(['nieuwebreak'], { queryParams: { user: this.user} });
    }
    uitloggen() {
      this._router.navigate(['logout']);
    } 

    sort(property){
      this.isDesc = !this.isDesc; //change the direction    
      this.column = property;
      let direction = this.isDesc ? 1 : -1;
  
      this.records.sort(function(a, b){
          if(a[property] < b[property]){
              return -1 * direction;
          }
          else if( a[property] > b[property]){
              return 1 * direction;
          }
          else{
              return 0;
          }
      });
  };

/*
    opmerking(evnt) {
      //console.log(this.elTitle.toArray); 
      let teller = 0;
      let value = "";
      let name = "";
      this.elTitle.forEach(function(element) {
        if(element.nativeElement.value != "") {
          value = element.nativeElement.value
          name = element.nativeElement.name          
          teller ++;
        }

      });
      //updaten van json object
      if(teller == 1) {
        console.log(value);
        console.log(name);

        let topic;

        
        this._topics.forEach(function(element) {          
          if(element.name == name) {
            element.opmerkingen.push(new Opmerking(element.id,value));
            topic = element;
          }
        });
        console.log(topic);
        
        this._topicDataService.updateTopic(topic,topic.id);


      }*/
      /*for(var i=0; i<this.elTitle.length; i++) {7
        
      }*/
      //console.log(this.elTitle.nativeElement.name);
      /*console.log(this.opmerkingtoevoegen.value.opmerkingname);    
      let nextArray = [];
      /*const topic = new Topic("kop","hln");
      const opmerking = new Opmerking("klm");
      nextArray.push(opmerking);
      topic.opmerkingen = nextArray;
      this._topicDataService.addNewTopic(topic).subscribe(item => {
        const opmerking = topic.opmerkingen.map(opmerking =>
          this._topicDataService.addOpmerkingToTopic(opmerking, item));   
          
          Observable.forkJoin(...opmerking).subscribe( (opmerkingen: Opmerking[]) => {
            for (const ing of opmerkingen) {
              item.addIngredient(ing);
            }          
          });
      });*/  
    //}   
}
