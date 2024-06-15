import { Observable } from 'rxjs';

export interface IDelete {
  /**
   * DELETE Contract Request
   * @param id The record identification
   * @param query If any QueryParams available to replace with
   */
  delete(id: number | string, query?: object | any): Observable<any>;
}
