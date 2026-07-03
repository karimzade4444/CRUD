import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input, Modal } from "antd";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { type ICreateUsers, type IEditUser, type IGetUsers } from "../../types/types";
import { createUsers, editUser } from "../../api/api";

interface IEditModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}

const EditModal = ({ openEditModal, setOpenEditModal }: IEditModal) => {
  const queryClient = useQueryClient();
  const { register, setValue} = useForm<IEditUser>();
  const { mutate } = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getUsers"],
      });
    },
  });

  useEffect(()=>{
    if(!mutate) return;
    setValue("img",mutate.img)
  })

  const formSubmit = (data: ICreateUsers) => {
    mutate(data);
    setOpenCreateModal(false);
  };
  return (
    <>
      <Modal
        title="Изменение материала"
        closable={{ "aria-label": "Custom Close Button" }}
        open={openCreateModal}
        onOk={handleSubmit(formSubmit)}
        onCancel={() => setOpenCreateModal(false)}
      >
        <form onSubmit={handleSubmit(formSubmit)}>
          <p>Изоброжение</p>
          <input
            placeholder="https://..."
            {...register("img")}
            className="w-full border border-blue-400 p-2 rounded-xl"
          />
          <p>Название</p>
          <input
            placeholder="Введите название..."
            {...register("name")}
            className="w-full border border-blue-400 p-2 rounded-xl"
          />
          <p>Описание</p>
          <input
            placeholder="Введите описание..."
            {...register("title")}
            className="w-full border border-blue-400 p-2 rounded-xl"
          />
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
