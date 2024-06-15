/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from './api-http.service';
import { HttpHeaders } from '@angular/common/http';
import { IPost } from '../contracts/http-request/post.interface';
import { ApiEndpointsService } from './api-endpoints.service';
import { UrlBuilderService } from './url-builder.service';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService extends ApiEndpointsService implements IPost {
  constructor(
    protected _es: UrlBuilderService,
    protected _ahs: ApiHttpService,
  ) {
    super('file');
  }

  private getHeaders() {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  post(formData: FormData): Observable<any> {
    return this._ahs.post(
      this._es.createUrlWithQueryParameters(this.path),
      formData,
      { headers: this.getHeaders(), reportProgress: true, observe: 'events' },
    );
  }
}
