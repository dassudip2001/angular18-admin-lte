import { Route } from '@angular/router';

export const CONTENT_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./views/contents/contents.component').then(
        m => m.ContentsComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./views/create-content/create-content.component').then(
        m => m.CreateContentComponent
      ),
  },
];
