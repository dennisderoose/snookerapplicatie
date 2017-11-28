import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService} from '../user/user.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: User[]  
  selectedUser: User

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.createNewUser();
    this.userService
    .getUsers()
    .then((users: User[]) => {
      this.users = users.map((user) => {
        return user;
      });
    });
  }

  private getIndexOfContact = (userId: String) => {
    return this.users.findIndex((user) => {
      return user._id === userId;
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

  addUser = (user: User) => {
    this.userService
    .getUsers()
    .then((users: User[]) => {
      this.users = users.map((user) => {
        return user;
      });
    }); 
    user = new User();
    user = this.users.pop();
    //user.salt = crypto.randomBytes(32).toString('hex');
    //user.hash = crypto.pbkdf2Sync(user.password, user.salt, 
    //  10000, 64, 'sha512').toString('hex'); 
    this.users.push(user);
    this.selectUser(user);
    return this.users;
  }  
}
