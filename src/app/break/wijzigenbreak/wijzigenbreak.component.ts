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
  selector: 'app-wijzigenbreak',
  templateUrl: './wijzigenbreak.component.html',
  styleUrls: ['./wijzigenbreak.component.css']
})
export class WijzigenbreakComponent implements OnInit {

  public loading = false;
  private sub: any;
  private break: Break;
  private naam: String;

  public breakwijzigen: FormGroup;

  constructor(private fb: FormBuilder, private _snookerDataService: SnookerDataService, private route: ActivatedRoute, private _router: Router, private location: Location) { }

  ngOnInit() {
    this.naam = "tennis"
    this.loading = true;

    this.breakwijzigen = this.fb.group({
      aantalpunten: ['', [Validators.required, Validators.minLength(1)]],
      typeGemaakt: ['', [Validators.required, Validators.minLength(1)]],
      datumGemaakt: ['', [Validators.required, Validators.minLength(1)]],
      tegenstander: ['', [Validators.required, Validators.minLength(1)]]
    }); 


    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.break = params['brak'] || "";
    });


  }

}
