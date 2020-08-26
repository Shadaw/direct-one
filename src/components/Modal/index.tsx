import React from 'react';

import { useModal } from '../../hooks/modal';

import { Container, Button } from './styles';

interface ModalProps {
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  const { closeModal } = useModal();

  return (
    <Container isOpen={isOpen}>
      <form onSubmit={closeModal}>
        <legend>Nova Jornada</legend>
        <label htmlFor="newJourney">
          Dê um <b>nome</b> para essa Jornada
        </label>
        <input id="newJourney" type="text" />
        <span>Você poderá alterar essa informação depois.</span>
        <div>
          <Button type="submit" primary>
            Continuar
          </Button>
          <Button type="submit">Cancelar</Button>
        </div>
      </form>
    </Container>
  );
};

export default Modal;
