import React from 'react';

import bed from '../../assets/icons/bed.svg';
import check from '../../assets/icons/check.svg';
import paperPlane from '../../assets/icons/paper-plane.svg';
import pen from '../../assets/icons/pen.svg';
import playCircle from '../../assets/icons/play-circle.svg';
import table from '../../assets/icons/table.svg';

import { Container } from './styles';

interface FilterItemProps {
  index: number;
  name: string;
  quantity: number;
  selected?: boolean;
}

const FilterItem: React.FC<FilterItemProps> = ({
  index,
  name,
  quantity,
  selected,
}) => {
  const icons = [table, paperPlane, playCircle, pen, bed, check];

  return (
    <Container selected={selected}>
      <div>
        <img src={icons[index]} alt={name} />
        <button type="button">
          {name}
          <span>{quantity}</span>
        </button>
      </div>
    </Container>
  );
};

export default FilterItem;
