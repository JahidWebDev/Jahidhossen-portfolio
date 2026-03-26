import { useState } from 'react';

const useNavModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
  };
};

export default useNavModal;