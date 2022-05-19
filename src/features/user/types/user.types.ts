import { RolesEnum } from "./user.enums";

export interface LocationDef {
  id: number;
  userId: number;
  address: string;
  phone: string;
  name: string;
}

export interface UserDef {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  thumbnail: string | null;
  roles: RolesEnum[];
}

export interface UserParams extends Partial<Omit<UserDef, "id">> {
  id: number | string;
  page: number;
  perPage?: number;
}

export type UserRequest = Partial<UserDef>;

export interface UserListResponse {
  currentPage: number;
  list: UserDef[];
  totalItems: number;
  totalPages: number;
}
