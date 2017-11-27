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
    console.log(this.selectedUser);
  }

  createNewUser(): void {
    console.log("j");
    var user: User = {
      username: '',
      password: '',
    };

    // By default, a newly-created contact will have the selected state.
    this.selectUser(user);
  }  

  addUser = (user: User) => {
    console.log("k");
    this.userService
    .getUsers()
    .then((users: User[]) => {
      this.users = users.map((user) => {
        return user;
      });
    }); 
    user = new User();
    user = this.users.pop();   
    this.users.push(user);
    this.selectUser(user);
    return this.users;
  }  
}
