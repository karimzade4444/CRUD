import axios from "axios";
import type { ICreateUsers, IDeleteUsers, IGetUsers } from "../types/types";

const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/users";

export const getUsers = async (): Promise<IGetUsers[]> => {
  return (await axios.get(api)).data;
};

export const deleteUser = async (id: number): Promise<IDeleteUsers> => {
  return await axios.delete(`${api}/${id}`);
};

export const createUsers = async (data: ICreateUsers) => {
  return (await axios.post(api, data)).data;
};