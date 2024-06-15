import { Inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { IGet } from '../contracts/http-request/get.interface';
// import { IFind } from '../contracts/http-request/find.interface';
// import { IPost } from '../contracts/http-request/post.interface';
// import { IPut } from '../contracts/http-request/put.interface';
// import { IDelete } from '../contracts/http-request/delete.interface';

@Injectable()
export class ApiEndpointsService {
  constructor(@Inject('path') public path: string) {}

  // abstract get(query?: unknown): Observable<unknown>;
  // abstract find(id: string | number, query?: unknown): Observable<unknown>;
  // abstract post(data: unknown): Observable<unknown>;
  // abstract put(id: string | number, data: unknown): Observable<unknown>;
  // abstract delete(id: string | number, query?: unknown): Observable<unknown>;
}
