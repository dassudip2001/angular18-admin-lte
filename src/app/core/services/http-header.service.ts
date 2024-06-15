import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpHeaderService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  httpOptions: any = {};
  constructor() {
    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }
}
