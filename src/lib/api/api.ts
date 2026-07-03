import axios from "axios";
import type { IGetUsers } from "../types/types";



const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/users";


export const getUsers = async ():Promise<IGetUsers[]>=>{
    return (await axios.get(api)).data;
};