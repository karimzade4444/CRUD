export interface IGetUsers {
  id: number;
  name: string;
  title: string;
  img: string;
}

export interface IDeleteUsers {
  id: number;
}

export interface ICreateUsers {
  name: string;
  title: string;
  category: string;
}