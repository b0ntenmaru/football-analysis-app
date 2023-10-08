import { Modal } from '@/app/analysis/Modal';

type PlayerSelectModalProps = {
  open: boolean;
  handleChangeModalOpen: (open: boolean) => void;
  handleSubmitModal: () => void;
  playerSelectComponent: React.ReactNode;
};

export function PlayerSelectModal({
  open,
  handleChangeModalOpen,
  handleSubmitModal,
  playerSelectComponent,
}: PlayerSelectModalProps) {
  return (
    <Modal open={open} handleChange={handleChangeModalOpen} handleSubmit={handleSubmitModal}>
      <div>{playerSelectComponent}</div>
    </Modal>
  );
}
