/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { STORAGE } from '../models/core.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  getItem(storage: STORAGE, key: string): any {
    const item =
      storage === STORAGE.SESSION
        ? sessionStorage.getItem(key)
        : localStorage.getItem(key);

    if (item && item !== 'undefined' && item !== '') {
      return item;
    }

    return null;
  }
  setItem(storage: STORAGE, key: string, value: string): void {
    if (storage === STORAGE.SESSION) sessionStorage.setItem(key, value);
    if (storage === STORAGE.LOCAL) localStorage.setItem(key, value);
  }
  removeItem(storage: STORAGE, key: string): void {
    if (storage === STORAGE.SESSION) sessionStorage.removeItem(key);
    if (storage === STORAGE.LOCAL) localStorage.removeItem(key);
  }
}
