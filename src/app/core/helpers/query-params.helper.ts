export class QueryParamsHelper {
  private paramsAndValues: string[];
  constructor() {
    this.paramsAndValues = [];
  }
  public push(key: string, value: string): void {
    if (!value) {
      return;
    }

    value = encodeURIComponent(value.toString());
    this.paramsAndValues.push([key, value].join('='));
  }
  public toString = (): string => this.paramsAndValues.join('&');
}
