import React, { useState, useCallback } from 'react';

import { FiPlus, FiSearch, FiX } from 'react-icons/fi';
import { useModal } from '../../hooks/modal';

import acmeLogo from '../../assets/images/acme-logo.png';

import { Container, Avatar, Tooltip, Logo, Input } from './styles';

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { openModal } = useModal();

  const handleCleanSearch = useCallback(() => {
    setSearchValue('');
  }, []);

  return (
    <Container>
      <div>
        <Avatar>
          G<Tooltip>Gustavo Alexandre</Tooltip>
        </Avatar>
        <Logo>
          <img src={acmeLogo} alt="logo acme" />
        </Logo>
      </div>
      <div>
        <Input>
          <FiSearch />
          <input
            type="text"
            value={searchValue}
            onChange={element => setSearchValue(element.target.value)}
            placeholder="Buscar"
          />
          {!!searchValue && <FiX onClick={handleCleanSearch} />}
        </Input>
        <button type="button" onClick={openModal}>
          <FiPlus />
          Nova Jornada
        </button>
      </div>
    </Container>
  );
};

export default Header;
