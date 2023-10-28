// Create a custom hook for managing modal state
import { useState } from 'react';

export function useModalState(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
}
