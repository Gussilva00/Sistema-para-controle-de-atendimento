import { Component } from '@angular/core';
import { SistemaService } from '../services/sistema.service';

@Component({
    standalone: false,
  selector: 'app-atendente',
  templateUrl: './atendente.component.html',
})
export class AtendenteComponent {
  senha: string | null = null;
  guiche = 1;

  constructor(private sistema: SistemaService) {}

  chamar() {
    const s = this.sistema.chamarProximaSenha(this.guiche);
    this.senha = s ? `${s.numero} - Guichê ${s.guiche}` : 'Nenhuma senha disponível';
  }
}