export interface IRequest {
  path?: string;
  queryParam?: any;
  body?: any;
  header?: any;
  observe?:any;
}

export declare type IRequestType = 'json' | 'form-data';
