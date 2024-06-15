/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable, map } from 'rxjs';
import { HttpHeaderService } from './http-header.service';

@Injectable()
export class ApiHttpService extends HttpService {
  constructor(
    private http: HttpClient,
    private _options: HttpHeaderService,
  ) {
    super();
  }

  override get<T>(
    url: string,
    options: any = this._options.httpOptions,
  ): Observable<T> {
    return this.http.get(url, options).pipe(
      map((res) => {
        return res as T;
      }),
    );
  }

  override post<T>(
    url: string,
    data: any,
    options: any = this._options.httpOptions,
  ): Observable<T> {
    return this.http.post(url, data, options).pipe(
      map((res) => {
        return res as T;
      }),
    );
  }

  override put<T>(
    url: string,
    data: any,
    options: any = this._options.httpOptions,
  ): Observable<T> {
    return this.http.put(url, data, options).pipe(
      map((res) => {
        return res as T;
      }),
    );
  }

  override delete<T>(
    url: string,
    options: any = this._options.httpOptions,
  ): Observable<T> {
    return this.http.delete(url, options).pipe(
      map((res) => {
        return res as T;
      }),
    );
  }
}
