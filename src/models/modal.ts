export enum ModalType {
  Generate = "generate",
  Delete = "delete",
}

export type ModalProps = {
  id: string;
  closeModal: () => void;
  name?: string;
};
