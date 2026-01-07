const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  // chaveC?: string;
  // [key: string]: unknown; // any/unkwown
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// Record<string, unknown>

objetoA.chaveA = 'Outro valor';
// objetoA.chaveC = 'Nova chave';
// objetoA.chaveD = 'Nova chave';

console.log(objetoA);
