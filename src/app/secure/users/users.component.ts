import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from "../../services/user.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  columns: string[] = ['ID', 'Name', 'Email', 'Actions'];
  dataSource = new MatTableDataSource();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.all().subscribe({
      next: users => { this.dataSource.data = users; }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
