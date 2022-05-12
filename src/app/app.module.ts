import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInsertClienteComponent } from './shared/form-insert-cliente/form-insert-cliente.component';
import { LegendaPrioridadeComponent } from './shared/legenda-prioridade/legenda-prioridade.component';
import { ListarClientesComponent } from './shared/listar-clientes/listar-clientes.component';
import { ConnectionService } from './service/connection.service';

@NgModule({
  declarations: [
    AppComponent,
    FormInsertClienteComponent,
    LegendaPrioridadeComponent,
    ListarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
