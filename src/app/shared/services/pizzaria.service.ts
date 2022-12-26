import { UltimosPedidos } from './../../models/ultimos-pedidos.model';
import { environment } from './../../../environments/environment';
import { IRequest } from './../../models/request.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzariaService {

  constructor(private httpClient: HttpClient) { }

    obterUltimosPedidos(): Observable<any> {
    const request = this.httpClient.get(`${ environment.urlApi }/ultimos_pedidos`);
    return request;

  }

  // obterUltimosPedidos(): Observable<any[]> {
  //   const request = this.criarRequest('/ultimos_pedidos');
  //   return this.httpClient.get(request).pipe(map(this.extrairData))

  // }

  // criarRequest(url: string, payload: any = null){
  //   const request: IRequest = {
  //     path: environment.urlApi + url,
  //     body: payload ?? '',
  //     observe: 'response'
  //   }
  //   return request;
  // }

  // extrairData(response: any) {
  //   if (response.body !== null) {
  //     return response?.body?.data ?? response;
  //   } else {
  //     return null;
  //   }
  // }
}
