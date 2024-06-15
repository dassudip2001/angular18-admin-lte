import { Observable } from 'rxjs';
export interface IPost {
  /**
   * POST Contract request
   * @param data The content to replace with.
   */
  post(data: object | any): Observable<any>;
}
