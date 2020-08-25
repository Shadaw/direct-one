import React from 'react';
import {
  Table,
  PaperPlane,
  PlayCircle,
  Pen,
  Bed,
  Check,
} from '../../assets/icons';

import { Journey } from '../../pages/Dashboard';

import { Container } from './styles';

interface GridProps {
  journeys: Journey[];
}

const Grid: React.FC<GridProps> = ({ journeys }) => {
  const icons = [
    <Table fill="#D190DD" />,
    <PaperPlane fill="#C1CA4F" />,
    <PlayCircle fill="#35C667" />,
    <Pen fill="#3FA8F4" />,
    <Bed fill="#EBBD3E" />,
    <Check fill="#9FABD5" />,
  ];

  return (
    <Container>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Destinatarios</th>
          <th>Sucesso</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {journeys.map(journey => (
          <tr key={journey.id}>
            <td>{journey.name}</td>
            <td>{journey.recipients}</td>
            <td>{journey.success}</td>
            <td>{icons[journey.status]}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default Grid;
