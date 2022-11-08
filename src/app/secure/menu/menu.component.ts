import { Component, OnInit } from '@angular/core';
import { faBagShopping, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  users_icon = faUsers;
  productsIcon = faBagShopping;
  orderIcon = faLayerGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
