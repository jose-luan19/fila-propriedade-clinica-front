import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url: string = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  sendMessage(messageContent: any) {
    return this.http.post(this.url + '/novo',
    JSON.stringify(messageContent),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }

  // Obtem todos os clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

   // deleta um carro
   deleteCliente(cliente: Cliente) {
    return this.http.delete<Cliente>(this.url + '/' + cliente.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
