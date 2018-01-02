import { AuthGuardService } from './auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { BreakComponent } from './../break/break/break.component';
import { NieuwebreakComponent } from './../break/nieuwebreak/nieuwebreak.component';
import { SnookerDataService } from './../break/snooker-data.service';
import { SnookerResolver } from './../break/snooker-resolver.service';
//import { TopicDetailsComponent } from './../topic/topic-details/topic-details.component';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'break', component: BreakComponent},
  { path: 'nieuwebreak', component: NieuwebreakComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    BreakComponent,
    NieuwebreakComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    SnookerDataService,
    SnookerResolver
  ],
  exports: [
  ]
})
export class UserModule { }
