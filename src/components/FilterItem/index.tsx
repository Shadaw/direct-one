import React from 'react';

import { Container } from './styles';

interface FilterItemProps {
  name: string;
  quantity: number;
}

const FilterItem: React.FC<FilterItemProps> = ({ name, quantity }) => {
  return (
    <Container>
      <div>
        <button type="button">
          {name}
          <span>{quantity}</span>
        </button>
      </div>
    </Container>
  );
};

export default FilterItem;
