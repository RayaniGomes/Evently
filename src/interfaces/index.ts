import { createDataEvento } from "@/schema/event.schema";

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
  criador?: {
    _id: string;
    nome: string;
    email: string;
  };
  createdAt?: string;
}

export interface PropEventoStore {
  eventos: Evento[];
  isLoading: boolean;
  getEventos: () => void;
  getEventoId: (id: string) => void;
  getCriadorEventos: (id: string) => void;
  postEvento: (data: createDataEvento, reset?: () => void) => void;
  patchEvento: (id: string, data: any) => Promise<void>;
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

export interface PropUsuarioStore {
  usuarios: Usuario[];
  isLoading: boolean;
  getUsuario: (email: string) => void;
  getUsuariosLista: () => void;
  postUsuario: (data: any, reset?: () => void) => void;
  patchUsuario: (id: string, data: any) => void;
  deleteUsuario: (id: string) => void;
}

export interface CardProps {
  evento: Evento;
  bgColor: string;
  color: string;
  hover: string;
  getUsuario?: () => void;
}

export interface CardInscricoesProps {
  inscricao: MinhasInscricoes;
  bgColor: string;
  color: string;
  hover: string;
  getInscricoes?: (email: string) => void;
}

export interface BtnInscricaoProps {
  evento: Evento;
  color: string;
  bgColor: string;
  hover: string;
}

export interface MinhasInscricoes {
  _id?: string;
  evento: {
    id: {
      _id: string;
    };
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
    criador?: {
      _id: string;
      nome: string;
      email: string;
    };
  };
  inscritos: {
    _id: string;
    nome: string;
    email: string;
  };
  createdAt?: string;
}

export interface PropInscritosStore {
  inscricoes: MinhasInscricoes[];
  isLoading: boolean;
  getListaInscricoes: () => void;
  getInscricoes: (nome: string) => void;
  postInscricao: (inscricao: MinhasInscricoes) => void;
  cancelarInscricao: (id: string) => void;
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
  $url?: string;
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
