import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public usertje: FormGroup;
  public errorMsg: string;
/*
  @Input()
  user: User;

  @Input()
  createHandler: Function;

  users: User[];
  selectedUser: User;
*/
  constructor(private router: Router, private fb: FormBuilder) { }
/*
  createUser(user: User) {
    console.log("f");
    user = new User();
    user.name = 'naam';
    user.username = this.selectedUser.username;
    user.password = this.selectedUser.password;
    user.passwordConfirm = this.selectedUser.passwordConfirm;
    this.userService.createUser(user).then((newUser: User) => {
      this.createHandler(newUser);
    });
  }
*/
  ngOnInit() {
    //this.createNewUser();
    this.usertje = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });    
  }
/*
  private getIndexOfContact = (topicId: String) => {
    return this.users.findIndex((topic) => {
      return topic._id === topicId;
    });
  }

  selectUser(user: User) {
    this.selectedUser = user
  }

  createNewUser(): void {
    var user: User = {
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
      hash: '',
      salt: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectUser(user);
  }
*/
  onSubmit() {
    console.log("oke");
  }

}
