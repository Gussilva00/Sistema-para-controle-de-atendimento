export interface Senha {
    numero: string; // Exemplo de número da senha gerada, que segue o formato YYMMDD-PPSQ
    tipo: 'SP' | 'SG' | 'SE'; // Tipo da senha
    dataEmissao: Date; // Data de emissão da senha
    }