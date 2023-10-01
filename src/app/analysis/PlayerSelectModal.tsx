import { Modal } from '@/app/analysis/Modal';

type PlayerSelectModalProps = {
  open: boolean;
  handleChangeModalOpen: (open: boolean) => void;
  playerSelectComponent: React.ReactNode;
};

export function PlayerSelectModal({
  open,
  handleChangeModalOpen,
  playerSelectComponent,
}: PlayerSelectModalProps) {
  return (
    <Modal open={open} handleChange={handleChangeModalOpen}>
      <div>{playerSelectComponent}</div>
    </Modal>
  );
}
