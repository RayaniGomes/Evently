import { createDataEvent } from "@/schema/event.schema";

export interface User {
  _id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  password: string;
  profilePhoto?: string;
  creator: boolean;
  createdAt?: string;
}

export interface Event {
  _id: string;
  name: string;
  date: string;
  time: string;
  maxPeople: number;
  category: string;
  description: string;
  location: string;
  address: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement?: string;
  image?: string;
  creator?: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt?: string;
}

export interface Enrollment {
  _id?: string;
  event: {
    id: string;
    name: string;
    date: string;
    time: string;
    maxPeople: number;
    category: string;
    description: string;
    location: string;
    address: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    complement?: string;
    image?: string;
    creator?: {
      name: string;
      email: string;
    };
  };
  enrollment: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt?: string;
}

export interface PropUserStore {
  users: User[];
  isLoading: boolean;
  getUser: (email: string) => void;
  getUsersList: () => void;
  postUser: (date: any, reset?: () => void) => void;
  patchUser: (id: string, date: any) => void;
  deleteUser: (id: string) => void;
}

export interface PropEventStore {
  events: Event[];
  isLoading: boolean;
  getEvents: () => void;
  getEventId: (id: string) => void;
  getCreatorEvents: (email: string) => void;
  postEvent: (date: createDataEvent, reset?: () => void) => void;
  patchEvent: (id: string, date: any) => Promise<void>;
  deleteEvent: (id: string) => void;
  filterEvents: (filter: {}) => void;
}

export interface PropEnrollmentStore {
  enrollments: Enrollment[];
  isLoading: boolean;
  getListEnrollments: () => void;
  getEnrollments: (name: string) => void;
  postEnrollment: (enrollment: Enrollment) => void;
  deleteEnrollment: (id: string) => void;
}

export interface PropsForm {
  user: User | null;
}

export interface CardProps {
  event: Event;
  bgColor: string;
  color: string;
  hover: string;
  getUser?: () => void;
}

export interface CardEnrollmentProps {
  enrollment: Enrollment;
  bgColor: string;
  color: string;
  hover: string;
  getEnrollments?: (email: string) => void;
}

export interface StyledCard {
  $bgColor: string;
  $color: string;
  $hover: string;
  $width?: number;
}

export interface BtnEnrollmentProps {
  event: Event;
  color: string;
  bgColor: string;
  hover: string;
  width?: number;
}

export interface FilterModalProps {
  event?: Event;
  showModal: boolean;
  toggleModal: () => void;
  getUser?: () => void;
  getEvent?: () => void;
}

export interface IndiceProps {
  title: string;
  indice: number;
}

export interface CheckboxProps {
  id: string;
  htmlFor: string;
  label: string;
  color: string;
  onChange: () => void;
}

export interface PaginationProps {
  handlePageClick: (page: number) => void;
  currentPage: number;
  totalPages: number;
  color: string;
  colorHover: string;
}

export interface TitleProps {
  title: string;
  border: string;
}

export interface StyledBorderProps {
  $color: string;
}

export interface StyledShare {
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

export interface StyledPagination {
  $color: string;
  $colorHover: string;
}
