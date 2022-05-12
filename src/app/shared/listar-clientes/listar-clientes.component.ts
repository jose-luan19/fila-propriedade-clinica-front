import { Component, OnInit } from '@angular/core';

import { ConnectionService } from '../../service/connection.service';
import { Cliente } from 'src/app/models/cliente';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  cliente = {} as Cliente;
  clientes: Cliente[] | undefined;
  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.connectionService.getClientes().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
  }

  deleteCliente(cliente: Cliente) {
    this.connectionService.deleteCliente(cliente).subscribe(() => {
      this.getClientes();
    });
  }

}
