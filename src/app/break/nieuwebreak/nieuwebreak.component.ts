import { ActivatedRoute, Router } from '@angular/router';
import { SnookerDataService } from './../snooker-data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Break } from '../break.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-nieuwebreak',
  templateUrl: './nieuwebreak.component.html',
  styleUrls: ['./nieuwebreak.component.css']
})
export class NieuwebreakComponent implements OnInit {
  @Output() public newBreak = new EventEmitter<Break>();
  public break: FormGroup;
  private sub: any;
  private user: string;


  constructor(private fb: FormBuilder, private _snookerDataService: SnookerDataService, private route: ActivatedRoute,  private _router: Router) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.user = params['user'] || "";
    });
    console.log(this.user);
    this.break = this.fb.group({
      aantalpunten: ['', [Validators.required, Validators.minLength(1)]]
    });    
  }

  onSubmit() {
    let datum = new Date().getDate()+"/"+new Date().getMonth()+1+"/"+new Date().getFullYear();
    const brek = new Break(parseInt(this.break.value.aantalpunten), datum.toString(), this.user);
    console.log(brek);
    this._snookerDataService.addNewBreak(brek).subscribe(item => {
    });
    setTimeout((router: Router) => {
      this._router.navigate(['break'], { queryParams: { user: this.user} });
  }, 1000); 
    
  }


}
