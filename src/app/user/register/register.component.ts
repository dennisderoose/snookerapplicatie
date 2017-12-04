import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl } from '@angular/forms';

function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public usertje: FormGroup;

  get passwordControl(): FormControl {
    return <FormControl>this.usertje.get('passwordGroup').get('password');
  }

  @Input()
  user: User;

  @Input()
  createHandler: Function;

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

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

  ngOnInit() {
    this.usertje = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(12)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords })
    });

    this.createHandler = new Function;
    this.createNewUser();
  }
/*
  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authenticationService.checkUserNameAvailability(control.value).map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    };
  }*/

  onSubmit() {
    console.log("klm");
    console.log(this.usertje.value.username);
    var user = new User();
    user.name = 'naam';
    user.username = this.usertje.value.username;
    user.password = this.usertje.value.password;
    user.passwordConfirm = this.usertje.value.password;
    console.log(user);
    this.createUser(user);
  }


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
/*
  onSubmit() {
    console.log("oke");
  }*/

}
