export interface Evento {
  _id: string;
  nome: string;
  data: string;
  horario: string;
  maxPessoas: number;
  tipo: string;
  descricao: string;
  local: string;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  complemento?: string;
  imagem?: string;
  criador?: Usuario;
  inscritos?: Usuario[];
}

export interface Usuario {
  _id: string;
  nome: string;
  email: string;
  data_de_nascimento: string;
  senha: string;
  criador: boolean;
  eventos?: Evento[];
  minhasInscricoes?: Evento[];
}

export interface StyledCompartilhar {
  $bgColor: string;
  $color: string;
  $tamanho: number;
  $fontSize: number;
  $padding: string;
  $top: number;
  $right: number;
  $hover: string;
}
