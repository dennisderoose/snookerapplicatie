import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input()
  user: User;

  @Input()
  createHandler: Function;

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  createUser(user: User) {
    console.log("f");
    user = new User();
    user.name = 'naam';
    user.username = this.selectedUser.username;
    user.pasword = this.selectedUser.pasword;
    user.paswordConfirm = this.selectedUser.paswordConfirm;
    this.userService.createUser(user).then((newUser: User) => {
      this.createHandler(newUser);
    });
  }

  ngOnInit() {
    this.createNewUser();
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
      pasword: '',
      paswordConfirm: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectUser(user);
  }
}
