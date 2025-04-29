import { Component } from '@angular/core';
import { SistemaService } from '../services/sistema.service';

@Component({
    standalone: false,
  selector: 'app-painel',
  templateUrl: 'painel.component.html',
})
export class PainelComponent {
  chamadas = this.sistema.getUltimosChamados();

  constructor(public sistema: SistemaService) {}
}