import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  colums = ['id', 'image', 'title', 'description', 'price', 'action'];
  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
  }

}
