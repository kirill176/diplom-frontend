export enum ModalType {
  Generate = "generate",
  Delete = "delete",
}

export type GenerateProps = {
  id: string;
  closeModal: () => void;
};

export type ModalProps = {
  id: string;
  closeModal: () => void;
  name: string;
};
