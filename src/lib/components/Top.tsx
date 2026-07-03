import { useQuery } from "@tanstack/react-query";
import { Button, Input } from "antd";
import { getUsers } from "../api/api";
import CreateModal from "./modal/CreateModal";
import { useState } from "react";


const Top = () => {
  const { data } = useQuery({
    queryFn: getUsers,
    queryKey: ["getUsers"],
  });

  const [openCreateModal, setOpenCreateModal] = useState(false);
  
  return (
    <>
      <div className=" flex justify-between items-center">
        <div>
          <p className=" text-4xl font-bold">Мини CRUD</p>
          <p className=" text-white/60 pt-2">
            Поиск • Модальные окна • Карточки
          </p>
        </div>
        <div className=" flex justify-center items-center gap-7">
          <p className="text-white/60">Всего: {data?.length}</p>
          <Button onClick={() => setOpenCreateModal(true)}>+ Добавить</Button>
        </div>
      </div>
      <Input
        placeholder="Поиск..."
        variant="underlined"
        className="bg-white/0! w-120! text-white! placeholder:text-white/80! mt-15!"
      />
      <CreateModal openCreateModal={openCreateModal} setOpenCreateModal={setOpenCreateModal}/>
    </>
  );
};

export default Top;
