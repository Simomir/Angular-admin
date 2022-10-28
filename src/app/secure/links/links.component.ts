import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  columns: string[] = ['ID', 'code', 'count', 'revenue'];
  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
  }

}
