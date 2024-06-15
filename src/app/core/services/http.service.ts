import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class HttpService {
  abstract get<T>(url: string, options?: unknown): Observable<T>;
  abstract post<T>(
    url: string,
    data: unknown,
    options?: unknown,
  ): Observable<T>;
  abstract put<T>(url: string, data: unknown, options?: unknown): Observable<T>;
  abstract delete<T>(url: string, options?: unknown): Observable<T>;
}
