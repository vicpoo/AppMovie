import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'login', component:LoginComponent},
  { path: 'admin', component: AdminComponent},
];

