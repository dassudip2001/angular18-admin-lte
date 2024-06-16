import { Route } from '@angular/router';

export const LOG_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./views/logs/logs.component').then(m => m.LogsComponent),
  },
];
