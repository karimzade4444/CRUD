import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input, Modal } from "antd";
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { type ICreateUsers, type IGetUsers } from "../../types/types";
import { createUsers } from "../../api/api";


interface ICreateModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}

const CreateModal = ({ openCreateModal, setOpenCreateModal }: ICreateModal) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<ICreateUsers>();
  const { mutate } = useMutation({
    mutationFn: createUsers,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ["getUsers"],
      });
      reset();
    },
  });

  const formSubmit = (data: ICreateUsers) => {
    mutate(data);
    setOpenCreateModal(false)
  };
  return (
    <>
      <Modal
        title="Создать материал"
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

export default CreateModal;
