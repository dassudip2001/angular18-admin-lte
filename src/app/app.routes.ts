import { Routes } from '@angular/router';
import { ContentWrapperComponent } from './shared/content-wrapper/content-wrapper.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.gateway').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'cms',
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
        path: 'logs',
        loadChildren: () =>
          import('./features/log/log.gateway').then(m => m.LOG_ROUTES),
      },
      {
        path: 'contents',
        loadChildren: () =>
          import('./features/content/content.gateway').then(
            m => m.CONTENT_ROUTES
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];
