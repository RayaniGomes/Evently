export interface Evento {
  _id: string;
  name: string;
  data: string;
  horario: string;
  qtd_max_pessoa: number;
  tipo_evento: string;
  descricao: string;
  local: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento: string;
  imagem: string;
}

export interface Usuario {
  id?: string;
  name?: string;
  email: string;
  password: string;
  dataNascimento: string;
  criador: boolean;
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
