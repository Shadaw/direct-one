import React, { Dispatch, SetStateAction } from 'react';
import {
  Table,
  PaperPlane,
  PlayCircle,
  Pen,
  Bed,
  Check,
} from '../../assets/icons';

import { Container } from './styles';

interface FilterItemProps {
  status: number;
  name: string;
  quantity: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const FilterItem: React.FC<FilterItemProps> = ({
  status,
  name,
  quantity,
  selected,
  setSelected,
}) => {
  const icons = [
    <Table fill="#D190DD" />,
    <PaperPlane fill="#C1CA4F" />,
    <PlayCircle fill="#35C667" />,
    <Pen fill="#3FA8F4" />,
    <Bed fill="#EBBD3E" />,
    <Check fill="#9FABD5" />,
  ];

  return (
    <Container selected={selected === status}>
      <div>
        {icons[status]}
        <button type="button" onClick={() => setSelected(status)}>
          {name}
          <span>{quantity}</span>
        </button>
      </div>
    </Container>
  );
};

export default FilterItem;
