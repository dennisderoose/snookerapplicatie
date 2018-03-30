import { SnookerDataService } from '../snooker-data.service';
import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Break } from '../break.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Location} from '@angular/common';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';

import { DataTableModule } from 'angular-4-data-table';
import { LoadingModule } from 'ngx-loading';
declare var $;

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

  public loading = false;

  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  //public opmerkingtoevoegen: FormGroup;
  
    constructor(private fb: FormBuilder, private _snookerDataService: SnookerDataService, private route: ActivatedRoute, private _router: Router, private location: Location) {
    }

  
    ngOnInit() {
      this.loading = true;

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
      console.log(this.loading); 
      this._snookerDataService.breaks(this.user).subscribe(items => this._breaks = items);
      //3 seconden wachten
      setTimeout(() => {
        $(function(){
          $('#dt').DataTable();
        });
        this.loading = false;     
        console.log(this.loading); 
      }, 3000); 
      
    }
    get breaks() {
      return this._breaks;
    }
  /*
    stoploading() {
      console.log("werkt");
      this.loading = false;
    }
*/
    removeBreak(brek: Break) {
      this._snookerDataService.removeBreak(brek).subscribe(item =>
        this._breaks = this._breaks.filter(val => item.id !== val.id)
      );
    }

    onSubmit() {
      this._router.navigate(['nieuwebreak'], { queryParams: { user: this.user} });
    }
    uitloggen() {
      this.location.replaceState('/');
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

    public verwijderen(brak) {
      console.log(brak._id);
      this._snookerDataService.removeBreak(brak._id).subscribe();
      window.location.reload();
      this._router.navigate(['break'], { queryParams: { user: this.user} });
    }

    public wijzigen(brak: Break) {    
      this._router.navigate(['nieuwebreak'], { queryParams: { user: this.user} });
    }

}
