import DeleteModal from "../components/ModalComponents/DeleteModal";
import GenerateModal from "../components/ModalComponents/GenerateModal";
import { ModalType } from "../models/modal";

const config = {
  [ModalType.Delete]: {
    component: (id: string, name: string, closeModal: () => void) => (
      <DeleteModal id={id} name={name} closeModal={closeModal} />
    ),
    title: "Delete File",
  },
  [ModalType.Generate]: {
    component: (id: string, name: string, closeModal: () => void) => (
      <GenerateModal id={id} name={name} closeModal={closeModal} />
    ),
    title: "Generate Link",
  },
};

const getModalConfig = ({
  type,
  id,
  name,
  closeModal,
}: {
  type: string | undefined;
  id: string | undefined;
  name: string;
  closeModal: () => void;
}) => {
  const modalConfig = config[type as keyof typeof config];
  if (!modalConfig || !id) return [];
  return [modalConfig.component(id, name, closeModal), modalConfig.title];
};

export default getModalConfig;
