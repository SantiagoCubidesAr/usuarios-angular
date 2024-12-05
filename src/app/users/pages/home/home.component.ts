import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users.interfaces';
@Component({
  selector: 'users-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users: User[] = [];
  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }
  searchUsers(text: string): void {
    this.usersService.getUsers().subscribe((response: User[]) => {
      this.users = response.filter(user => user.name.includes(text) || user.email.includes(text) || user.address.city.includes(text));
    });
  }
}
