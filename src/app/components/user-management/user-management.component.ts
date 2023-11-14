import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'emailNotification', 'actions'];
  userId = Number(localStorage.getItem('userId'));

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users.filter(user => user.id != this.userId);
    });
  }

  selectUser(user: User | null): void {
    this.selectedUser = user ? { ...user } : null;
  }

  editUser(user: User | null): void {
    let url = "/user/"+user?.id
    this.router.navigate([url]);
  }

  createUser(newUser: User): void {
    this.userService.createUser(newUser).subscribe(createdUser => {
      this.users.push(createdUser);
      this.selectedUser = null;
    });
  }

  updateUser(updatedUser: User | null): void {
    if (this.selectedUser && updatedUser) {
      this.userService.updateUser(this.selectedUser.id, updatedUser).subscribe(updated => {
        const index = this.users.findIndex(user => user.id === updated.id);
        if (index !== -1) {
          this.users[index] = updated;
        }
        this.selectedUser = null;
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
      this.selectedUser = null;
    });
  }
}
