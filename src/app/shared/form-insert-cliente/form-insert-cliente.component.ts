
import { ConnectionService } from '../../service/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-form-insert-cliente',
  templateUrl: './form-insert-cliente.component.html',
  styleUrls: ['./form-insert-cliente.component.scss']
})
export class FormInsertClienteComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {
    this.contactForm = this.fb.group({
      'nome': ['', Validators.required],
      'descricaoPrioridade': ['', Validators.required],

    });
  }
  ngOnInit(): void {
  }

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }
  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      window.location.reload();
      alert('Paciente inserido na fila');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

}
