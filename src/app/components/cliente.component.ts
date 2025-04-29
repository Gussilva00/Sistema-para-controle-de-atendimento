import { Component } from '@angular/core';
import { SistemaService } from '../services/sistema.service';
import { IonHeader, IonButton } from "@ionic/angular/standalone";

@Component({
  standalone: false,
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent {
  senha: string | null = null;

  constructor(private sistema: SistemaService) {}

  emitir(tipo: 'SP' | 'SG' | 'SE') {
    const s = this.sistema.emitirSenha(tipo);
    this.senha = s ? s.numero : 'Fora do expediente';
  }
}