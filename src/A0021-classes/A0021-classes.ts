export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string, 
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '1111111111111');
const colaborador1 = new Colaborador('Victor', 'Emanuel')
const colaborador2 = new Colaborador('Heros', 'Emanuel')
const colaborador3 = new Colaborador('Enzo', 'Hissashi')
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.mostrarColaboradores();