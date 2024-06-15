// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Injectable } from '@angular/core';
// import { StorageService } from '../services/storage.service';
// import { STORAGE } from '../models/core.model';
// import { Permission } from '../../features/configuration/models/permission.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class PermissionChecker {
//   constructor(private readonly _storage: StorageService) {}

//   has(permission: string): boolean {
//     const permissions = this._storage.getItem(STORAGE.SESSION, 'ims_authz');
//     const perms: Permission[] = JSON.parse(permissions);
//     if (perms.length > 0)
//       return perms.find((perm: any) => perm.name === permission) !== undefined;
//     else return false;
//   }
// }
