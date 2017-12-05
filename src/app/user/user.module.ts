//import { AuthGuardService } from './auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
//import { AuthenticationService } from './authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { TopicComponent } from '../topic/topic.component';
import { UserComponent } from 'app/user/user.component';
import { UserService } from 'app/user/user.service';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'topic', component: TopicComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  providers: [
    UserService
  ],
  exports: [
  ]
})
export class UserModule { }
