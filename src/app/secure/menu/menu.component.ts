import { Component, OnInit } from '@angular/core';
import { faUsers } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  users_icon = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
