import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  columns = ['ID', 'Name', 'Email', 'Actions'];
  dataSource = new MatTableDataSource();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.all().subscribe({
      next: users => { this.dataSource.data = users; }
    });
  }

}
