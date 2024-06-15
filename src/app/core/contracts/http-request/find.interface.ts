import { Observable } from 'rxjs';

export interface IFind {
  /**
   * GET BY ID Contract request
   * @param id The record identification
   * @param query If any QueryParams available to replace with
   */
  find(id: number | string, query?: object | any): Observable<any>;
}
