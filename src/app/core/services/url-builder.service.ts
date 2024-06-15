import { SERVICE_END_POINT_TYPE } from '../models/core.model';
import { Injectable } from '@angular/core';
import { Constants } from '../models/constants';
import { UrlBuilderHelper } from '../helpers/url-builder.helper';
import { QueryParamsHelper } from '../helpers/query-params.helper';

@Injectable()
export class UrlBuilderService {
  constructor(private constants: Constants) {}

  // URL
  public createUrl(
    action: string,
    endPointType: SERVICE_END_POINT_TYPE = SERVICE_END_POINT_TYPE.SAPI,
    isMockAPI: boolean = false,
  ): string {
    const urlBuilder: UrlBuilderHelper = new UrlBuilderHelper(
      endPointType === SERVICE_END_POINT_TYPE.AUTH
        ? this.constants.AUTH_ENDPOINT
        : isMockAPI
          ? this.constants.API_MOCK_ENDPOINT
          : this.constants.API_ENDPOINT,
      action,
    );
    return urlBuilder.toString();
  }

  // URL WITH QUERY PARAMS
  public createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryParamsHelper: QueryParamsHelper) => void,
    endPointType: SERVICE_END_POINT_TYPE = SERVICE_END_POINT_TYPE.SAPI,
    isMockAPI: boolean = false,
  ): string {
    const urlBuilder: UrlBuilderHelper = new UrlBuilderHelper(
      endPointType === SERVICE_END_POINT_TYPE.AUTH
        ? this.constants.AUTH_ENDPOINT
        : isMockAPI
          ? this.constants.API_MOCK_ENDPOINT
          : this.constants.API_ENDPOINT,
      action,
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  public createUrlWithPathVariables(
    action: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pathVariables: any[] = [],
    queryStringHandler?: (queryParamsHelper: QueryParamsHelper) => void,
    endPointType: SERVICE_END_POINT_TYPE = SERVICE_END_POINT_TYPE.SAPI,
    isMockAPI: boolean = false,
  ): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null && pathVariable !== undefined) {
        encodedPathVariablesUrl += `/${encodeURIComponent(
          pathVariable.toString(),
        )}`;
      }
    }

    const urlBuilder: UrlBuilderHelper = new UrlBuilderHelper(
      endPointType === SERVICE_END_POINT_TYPE.AUTH
        ? this.constants.AUTH_ENDPOINT
        : isMockAPI
          ? this.constants.API_MOCK_ENDPOINT
          : this.constants.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`,
    );
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }
}
