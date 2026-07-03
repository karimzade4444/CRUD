import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd"
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import {  type ICreateUsers, type IGetUsers } from "../../types/types";
import { createUsers } from "../../api/api";

interface ICreateModal{
  openCreateModal: boolean;
  setOpenCreateModal:Dispatch<SetStateAction<boolean>>;
}


const CreateModal = ({openCreateModal,setOpenCreateModal}: ICreateModal) => {
  const queryClient = useQueryClient();
  const {register,handleSubmit,reset} = useForm<IGetUsers>();
  const { mutate } = useMutation({
    mutationFn:  createUsers,
    onSuccess:()=>{
      void queryClient.invalidateQueries({
        queryKey:["getUsers"]
      });
      reset()
    }
  }) 


  const formSubmit = (data: ICreateUsers)=>{
    mutate(data);
  }
  return (
    <>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={openCreateModal}
        
        onCancel={()=>setOpenCreateModal(false)}
      ></Modal>
    </>
  );
}

export default CreateModal;