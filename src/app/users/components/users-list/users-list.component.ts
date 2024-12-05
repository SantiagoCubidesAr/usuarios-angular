import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/users.interfaces';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[] = [];
  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response: any) => {
      this.users = response.data;
    });
  }
}
