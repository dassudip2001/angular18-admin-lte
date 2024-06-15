import { Routes } from '@angular/router';
import { ContentWrapperComponent } from './shared/content-wrapper/content-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentWrapperComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            mod => mod.DashboardComponent
          ),
        data: { breadcrumb: 'Dashboard' },
      },
      {
        path: 'configuration',
        loadChildren: () =>
          import('./features/configuration/configuration.gateway').then(
            m => m.CONFIGURATION_ROUTES
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
