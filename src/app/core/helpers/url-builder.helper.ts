import { QueryParamsHelper } from './query-params.helper';

export class UrlBuilderHelper {
  public url: string;
  public queryString: QueryParamsHelper;
  /**
   * URL builder for HTTP client
   * @param baseUrl base api path
   * @param action path of the api
   * @param queryString any queryParams will be replace with
   */
  constructor(
    private baseUrl: string,
    private action: string,
    queryString?: QueryParamsHelper,
  ) {
    this.url = [baseUrl, action].join('/');
    this.queryString = queryString || new QueryParamsHelper();
  }
  public toString(): string {
    const qs: string = this.queryString ? this.queryString.toString() : '';
    return qs ? `${this.url}?${qs}` : this.url;
  }
}
