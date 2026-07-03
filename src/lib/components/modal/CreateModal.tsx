import { Modal } from "antd"


const CreateModal = () => {
  return (
    <>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
}

export default CreateModal;