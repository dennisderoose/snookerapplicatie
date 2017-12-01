import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopicDetailsComponent } from './topic/topic-details/topic-details.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RegisterComponent } from './user/register/register.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { TopicModule } from 'app/topic/topic.module';
import { UserModule } from './user/user.module';
/*
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'topic-details', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];*/


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    TopicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
