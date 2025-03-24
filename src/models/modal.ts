export enum ModalType {
  Generate = "generate",
  Delete = "delete",
}

export type ModalProps = {
  id: string;
  name: string;
  closeModal: () => void;
};
