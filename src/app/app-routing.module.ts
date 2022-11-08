import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from "./secure/profile/profile.component";
import { UsersComponent } from "./secure/users/users.component";
import { LinksComponent } from "./secure/links/links.component";
import { ProductsComponent } from "./secure/products/products.component";
import { ProductsFormComponent } from "./secure/products/products-form/products-form.component";

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'users' },
      { path: 'profile', component: ProfileComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id/links', component: LinksComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: ProductsFormComponent},
      { path: 'products/:id/edit', component: ProductsFormComponent},
    ]
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
