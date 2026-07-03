import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteUser, getUsers } from "../api/api"
import { Button } from "antd";
import { useState } from "react";
import EditModal from "./modal/EditModal";


const Bottom = () => {
    const { data } = useQuery({
        queryFn:getUsers,
        queryKey:["getUsers"]
    });
    const queryClient = useQueryClient();
    const {mutate:deletingUser} = useMutation({
        mutationFn: deleteUser,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["getUsers"]})
        }
    })

    const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <div className=" flex justify-around flex-wrap gap-10 mt-10">
      {data?.map((el) => (
        <div key={el.id} className="w-100 h-80 bg-neutral-800/70 rounded-2xl">
          <img src={el.img} alt="" className="w-full h-[65%] rounded-2xl" />
          <p className=" text-xl pl-3 pt-2">{el.name}</p>
          <p className="pl-3 text-xs text-white/60 truncate">{el.title}</p>
          <div className="p-3 flex justify-between items-center">
            <Button onClick={()=>setOpenEditModal(true)}>Редактировать</Button>
            <Button type="primary" danger onClick={() => deletingUser(el.id)}>
              Удалить
            </Button>
          </div>
        </div>
      ))}
      <EditModal />
    </div>
  );
}

export default Bottom