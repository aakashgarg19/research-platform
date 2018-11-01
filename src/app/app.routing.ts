import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './core/components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './core/components/home/home.component';
import { UserDashboardComponent } from './core/components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
   },
   {
     path: 'dashboard/user',
     component: UserDashboardComponent
   },
   {
     path: 'dashboard/admin',
     component: AdminDashboardComponent
   }
];

export const AppRoutes = RouterModule.forRoot(routes);
