import { Component } from '@angular/core';
import { SenhaService } from '../services/senha.service';
import { Senha } from '../models/senha.model';

@Component({
  selector: 'app-totem',
  templateUrl: './totem.page.html',
  styleUrls: ['./totem.page.scss'],
})
export class TotemPage {

  constructor(private senhaService: SenhaService) {}

  emitirSenha(tipo: 'SP' | 'SG' | 'SE') {
    this.senhaService.emitirSenha(tipo).subscribe({
      next: (senha: Senha) => {
        alert(`Senha emitida: ${senha.numero}`);
      },
      error: (err) => {
        console.error('Erro ao emitir senha', err);
      }
    });
  }
}