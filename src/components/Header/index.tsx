import React, { useState, useCallback } from 'react';

import { FiPlus, FiSearch, FiX } from 'react-icons/fi';

import acmeLogo from '../../assets/images/acme-logo.png';

import { Container, Avatar, Tooltip, Logo, Input } from './styles';

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

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
      <form>
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
        <button type="submit">
          <FiPlus />
          Nova Jornada
        </button>
      </form>
    </Container>
  );
};

export default Header;
