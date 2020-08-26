import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  FormEvent,
} from 'react';

import Modal from '../components/Modal';

interface ModalContextData {
  openModal: () => void;
  closeModal: (element: FormEvent<HTMLFormElement>) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback((element: FormEvent<HTMLFormElement>) => {
    element.preventDefault();
    setModalIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <Modal isOpen={modalIsOpen} />
      {children}
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}
