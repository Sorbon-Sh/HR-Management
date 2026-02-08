const useCloseModal = (
  closeModal: (value: boolean) => void,
  reset: () => void,
) => {
  //? Как это сделано?
  const onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    closeModal(false);
    reset();
  };

  return onClose;
};

export default useCloseModal;
