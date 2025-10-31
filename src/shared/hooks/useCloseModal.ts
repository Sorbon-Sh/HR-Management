const useCloseModal = (closeModal: (value: boolean) => void) => {
  const onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    closeModal(false);
  };
    return onClose;
}

export default useCloseModal;