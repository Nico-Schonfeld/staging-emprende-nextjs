export type userRegister = {
  email: string;
  name: string;
  nameShop: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export type userLogin = {
  email: string;
  password: string;
};

export type user = {
  id?: number | string;
  name: string;
  nameShop: string;
  logo?: string;
  location?: string;
  timeShop?: string;
  phone?: string;
  shipping?: boolean;
  categoryId?: number;
  igURL?: string;
  fbURL?: string;
  tkURL?: string;
  xURL?: string;
  webURL?: string;
  otherURL?: string;
  messageWp?: string;
  category?: category[];
  role?: string;
  createdAt?: string;
  updatedAt?: string;
};

type category = {
  id: number | string;
  title: string;
  titleSlug: string;
  order: number;
  Users: user[];
  createdAt: string;
  updatedAt: string;
};
