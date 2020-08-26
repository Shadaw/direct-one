import React from 'react';
import {
  ChartPie,
  Rocket,
  UserFriends,
  CcmCloud,
  ExternalLink,
  Gem,
  Tools,
  Exchange,
  SignOut,
} from '../../assets/icons';

import logoD1 from '../../assets/images/logotipo-branco.png';

import { Container, Separetor, Tooltip } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <img src={logoD1} alt="logo direct one" />
      <span>
        <ChartPie />
        <Tooltip>Análises</Tooltip>
      </span>
      <span>
        <Rocket />
        <Tooltip>Jornadas</Tooltip>
      </span>
      <span>
        <UserFriends />
        <Tooltip>Clientes</Tooltip>
      </span>
      <span>
        <CcmCloud />
        <Tooltip>CCM Cloud</Tooltip>
      </span>
      <Separetor />
      <span>
        <ExternalLink />
        <Tooltip>Versão 01</Tooltip>
      </span>
      <div>
        <span>
          <Gem />
          <Tooltip>Administração</Tooltip>
        </span>
        <span>
          <Tools />
          <Tooltip>Help Desk</Tooltip>
        </span>
        <span>
          <Exchange />
          <Tooltip>Trocar Conta</Tooltip>
        </span>
        <span>
          <SignOut />
          <Tooltip>Sair</Tooltip>
        </span>
      </div>
    </Container>
  );
};

export default Menu;
