import axios from "axios";
import type { ICreateUsers, IDeleteUsers, IEditUser, IGetUser, IGetUsers } from "../types/types";

const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/users";

export const getUsers = async (search?:string): Promise<IGetUsers[]> => {
  return (await axios.get(api, {
    params: search?{search}:{},
  })).data;
};

export const deleteUser = async (id: number): Promise<IDeleteUsers> => {
  return await axios.delete(`${api}/${id}`);
};

export const createUsers = async (data: ICreateUsers) => {
  return (await axios.post(api, data)).data;
};

export const getUserByid = async (
  id: number | undefined,
): Promise<IGetUser> => {
  return (await axios.get(`${api}/${id}`)).data;
};

export const editUser = async ({
  id,
  data,
}: {
  id: number;
  data: IEditUser;
}): Promise<IEditUser> => {
  return (await axios.put(`${api}/${id}`, data)).data;
};