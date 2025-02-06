export interface Evento {
  _id?: string;
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
  criadorId?: string;
}

export interface Usuario {
  _id?: string;
  nome: string;
  dataNascimento: string;
  email: string;
  senha: string;
  role: string;
  eventos: Evento[];
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
