import { Injectable } from '@angular/core';
import { environment } from '../../../config/environments/environment';

@Injectable()
export class Constants {
  public readonly API_ENDPOINT: string = `${environment.SERVICE_END_POINT.RESOURCE.SAPI.PATH}`;
  public readonly API_MOCK_ENDPOINT: string = `${environment.SERVICE_END_POINT.RESOURCE.SAPI.PATH}`;
  public readonly AUTH_ENDPOINT: string = `${environment.SERVICE_END_POINT.RESOURCE.AUTH.PATH}`;
}
