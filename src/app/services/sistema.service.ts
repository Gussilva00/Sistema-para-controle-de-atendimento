import { Injectable } from '@angular/core';

type TipoSenha = 'SP' | 'SG' | 'SE';
interface Senha {
  numero: string;
  tipo: TipoSenha;
  dataHoraEmissao: Date;
  dataHoraAtendimento?: Date;
  guiche?: number;
  atendida: boolean;
}

@Injectable({ providedIn: 'root' })
export class SistemaService {
  private senhas: Senha[] = [];
  private fila: { [K in TipoSenha]: Senha[] } = { SP: [], SG: [], SE: [] };
  private historico: Senha[] = [];
  private ultimoTipo: TipoSenha | null = null;
  private sequencia: { [K in TipoSenha]: number } = { SP: 0, SG: 0, SE: 0 };
  private inicio = new Date();
  private fim = new Date();

  constructor() {
    this.inicio.setHours(7, 0);
    this.fim.setHours(17, 0);
  }

  emitirSenha(tipo: TipoSenha): Senha | null {
    const agora = new Date();
    //if (agora < this.inicio || agora > this.fim) return null;

    const hoje = agora.toISOString().slice(2, 10).replace(/-/g, '');
    this.sequencia[tipo]++;
    const numero = `${hoje}-${tipo}${String(this.sequencia[tipo]).padStart(3, '0')}`;

    const senha: Senha = {
      numero,
      tipo,
      dataHoraEmissao: agora,
      atendida: false,
    };

    this.fila[tipo].push(senha);
    this.senhas.push(senha);
    return senha;
  }

  chamarProximaSenha(guiche: number): Senha | null {
    if (Math.random() < 0.05) return null;
    const tipos: TipoSenha[] = this.ultimoTipo === 'SP' ? ['SE', 'SG'] : ['SP'];

    for (const tipo of tipos) {
      const filaTipo = this.fila[tipo];
      if (filaTipo.length > 0) {
        const senha = filaTipo.shift()!;
        senha.dataHoraAtendimento = new Date();
        senha.guiche = guiche;
        senha.atendida = true;
        this.historico.unshift(senha);
        if (this.historico.length > 5) this.historico.pop();
        this.ultimoTipo = senha.tipo;
        return senha;
      }
    }
    return null;
  }

  getUltimosChamados(): Senha[] {
    return this.historico;
  }

  gerarRelatorio() {
    const emitidas = this.senhas.length;
    const atendidas = this.senhas.filter(s => s.atendida).length;
    const porTipo = (tipo: TipoSenha, atendidas: boolean) =>
      this.senhas.filter(s => s.tipo === tipo && s.atendida === atendidas).length;

    return {
      totalEmitidas: emitidas,
      totalAtendidas: atendidas,
      porTipo: {
        SP: { emitidas: porTipo('SP', false) + porTipo('SP', true), atendidas: porTipo('SP', true) },
        SG: { emitidas: porTipo('SG', false) + porTipo('SG', true), atendidas: porTipo('SG', true) },
        SE: { emitidas: porTipo('SE', false) + porTipo('SE', true), atendidas: porTipo('SE', true) },
      },
      senhasDetalhadas: this.senhas
    };
  }
}