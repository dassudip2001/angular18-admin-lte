import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./views/login/login.component').then(
            mod => mod.LoginComponent
          ),
        data: { breadcrumb: 'Login' },
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./views/register/register.component').then(
            mod => mod.RegisterComponent
          ),
        data: { breadcrumb: 'Permission' },
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import(
            './views/request-new-password/request-new-password.component'
          ).then(mod => mod.RequestNewPasswordComponent),
      },
    ],
  },
];
