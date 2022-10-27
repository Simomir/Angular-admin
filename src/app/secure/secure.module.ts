import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { RouterModule } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SecureModule { }
