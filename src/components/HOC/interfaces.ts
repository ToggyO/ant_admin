export interface WithModalProps {
  openModal?: (key: string) => Record<string, any>;
  closeModal?: (key: string) => Record<string, any>;
}

export interface WithModalStateProps extends WithModalProps {
  modalKeys?: string[];
}
