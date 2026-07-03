import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {Modal } from "antd";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import {  type IEditUser} from "../../types/types";
import {  editUser, getUserByid } from "../../api/api";

interface IEditModal {
  id: number | undefined;
  openEditModal: boolean;
  setOpenEditModal: Dispatch<SetStateAction<boolean>>;
}

const EditModal = ({ openEditModal, setOpenEditModal,id }: IEditModal) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getUsers"],
      });
    },
  });

  const {register, setValue, handleSubmit} = useForm<IEditUser>();
  const {data: User} = useQuery({
    queryKey:["getUserById",id],
    queryFn:()=>{
        return getUserByid(id);
    },
    enabled:!!id,
  })

  useEffect(()=>{
    if(!User) return;
    setValue("img",User.img);
    setValue("name",User.name);
    setValue("title", User.title);
  },[id,setValue,User])

  const onSubmit = (data: IEditUser) => {
    if (!id) return;

    mutate({
      id,
      data,
    });

    setOpenEditModal(false);
  };

 
  return (
    <>
      <Modal
        title="Изменение материала"
        closable={{ "aria-label": "Custom Close Button" }}
        open={openEditModal}
        onOk={handleSubmit(onSubmit)}
        onCancel={() => setOpenEditModal(false)}
      >
        <form>
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
