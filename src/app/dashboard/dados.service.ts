import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 351],
    ['Fevereiro', 124],
    ['Março', 257],
    ['Abril', 672],
    ['Maio', 423],
    ['Junho', 511]
  ];

  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(obs => {
      obs.next(this.dados);
      obs.complete();
    })
  }
}
