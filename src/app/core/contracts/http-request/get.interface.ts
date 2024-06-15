import { Observable } from 'rxjs';
export interface IGet {
  /**
   * GET Contract request
   * @param query If any QueryParams available to replace with
   */
  get(query?: object | any): Observable<any>;
}
