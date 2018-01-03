import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreakComponent } from 'app/break/break/break.component';
import { NieuwebreakComponent } from 'app/break/nieuwebreak/nieuwebreak.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SnookerDataService } from './snooker-data.service';
import { SnookerResolver } from './snooker-resolver.service';


const routes = [
  { path: 'nieuwebreak', component:  NieuwebreakComponent}
];

@NgModule({
  declarations: [
    BreakComponent,
    NieuwebreakComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SnookerDataService,
    SnookerResolver
  ]
})
export class SnookerModule { }
