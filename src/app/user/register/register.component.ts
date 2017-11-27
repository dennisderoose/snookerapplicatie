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
    user = new User();
    user.username = this.selectedUser.username;
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

  selectTopic(user: User) {
    this.selectedUser = user
  }

  createNewUser(): void {
    var user: User = {
      username: '',
      password: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectTopic(user);
  }
}
