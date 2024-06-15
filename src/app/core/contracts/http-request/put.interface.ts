import { Observable } from 'rxjs';
export interface IPut {
  /**
   * PUT|PATCH Contract request
   * @param id The record identification
   * @param data The content to replace with.
   */
  put(id: number | string, data: object | any): Observable<any>;
}
