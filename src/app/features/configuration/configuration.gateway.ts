import { Route } from '@angular/router';

export const CONFIGURATION_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: 'roles',
        loadComponent: () =>
          import('./views/role/role.component').then(mod => mod.RoleComponent),
        data: { breadcrumb: 'Role' },
      },
      {
        path: 'permissions',
        loadComponent: () =>
          import('./views/permission/permission.component').then(
            mod => mod.PermissionComponent
          ),
        data: { breadcrumb: 'Permission' },
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./views/user/user.component').then(mod => mod.UserComponent),
      },
    ],
  },
];
