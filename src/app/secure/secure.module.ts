import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { RouterModule } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatPaginatorModule } from "@angular/material/paginator";
import { LinksComponent } from './links/links.component';
import { MatButtonModule } from "@angular/material/button";
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    ProfileComponent,
    UsersComponent,
    LinksComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MatButtonModule,
  ]
})
export class SecureModule { }
