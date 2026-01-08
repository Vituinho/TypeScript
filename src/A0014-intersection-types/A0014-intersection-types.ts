type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const teste: Intersecao = 'A';

console.log(teste);

const pessoa: Pessoa = {
  nome: 'Victor',
  sobrenome: 'Emanuel',
  idade: 16,
};

console.log(pessoa);

// Module mode
export { pessoa };
