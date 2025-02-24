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

export interface PropEventoStore {
  eventos: Evento[];
  copyEventos: Evento[];
  getEventos: () => void;
  getCriadorEventos: (id: string) => void;
  deleteEvento: (id: string) => void;
  filtrarEventos: (filtros: {}) => void;
}

export interface Usuario {
  _id: string;
  nome: string;
  email: string;
  dataNascimento: string;
  senha: string;
  criador: boolean;
  fotoPerfil?: string;
  eventos?: Evento[];
  minhasInscricoes?: Evento[];
}

export interface CardProps {
  evento: Evento;
  bgColor: string;
  color: string;
  hover: string;
  getUsuario?: () => void;
}

export interface FiltroModalProps {
  evento?: Evento;
  showModal: boolean;
  toggleModal: () => void;
  getUsuario?: () => void;
  getEvento?: () => void;
}

export interface IndiceProps {
  titulo: string;
  indice: number;
}

export interface CheckboxProps {
  id: string;
  htmlFor: string;
  label: string;
  color: string;
  onChange: () => void;
}

export interface PaginacaoProps {
  handlePageClick: (page: number) => void;
  currentPage: number;
  totalPages: number;
  color: string;
  colorHover: string;
}

export interface TituloProps {
  titulo: string;
  border: string;
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
  $evento?: Evento;
}

export interface StyledCard {
  $bgColor: string;
  $color: string;
  $hover: string;
}

export interface StyledBorderProps {
  $color: string;
}

export interface StyledPaginacao {
  $color: string;
  $colorHover: string;
}
