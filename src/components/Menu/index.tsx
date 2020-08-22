import React from 'react';
import {
  FiPieChart,
  FiMap,
  FiUsers,
  FiUploadCloud,
  FiExternalLink,
  FiHeart,
  FiSettings,
  FiUser,
  FiLogOut,
} from 'react-icons/fi';

import logoD1 from '../../assets/images/logotipo.png';

import { Container, Separetor, Tooltip } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <img src={logoD1} alt="logo direct one" />
      <span>
        <FiPieChart size={20} />
        <Tooltip>Análises</Tooltip>
      </span>
      <span>
        <FiMap size={20} />
        <Tooltip>Jornadas</Tooltip>
      </span>
      <span>
        <FiUsers size={20} />
        <Tooltip>Clientes</Tooltip>
      </span>
      <span>
        <FiUploadCloud size={20} />
        <Tooltip>CCM Cloud</Tooltip>
      </span>
      <Separetor />
      <span>
        <FiExternalLink size={20} />
        <Tooltip>Versão 01</Tooltip>
      </span>
      <div>
        <span>
          <FiHeart size={20} />
          <Tooltip>Administração</Tooltip>
        </span>
        <span>
          <FiSettings size={20} />
          <Tooltip>Help Desk</Tooltip>
        </span>
        <span>
          <FiUser size={20} />
          <Tooltip>Trocar Conta</Tooltip>
        </span>
        <span>
          <FiLogOut size={20} />
          <Tooltip>Sair</Tooltip>
        </span>
      </div>
    </Container>
  );
};

export default Menu;
