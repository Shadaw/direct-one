import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import FilterItem from '../../components/FilterItem';

import { Container, Content } from './styles';

interface JourneyProps {
  id: number;
  name: string;
  quantity: number;
}

const Dashboard: React.FC = () => {
  const [journeys, setJourneys] = useState<JourneyProps[]>([]);

  useEffect(() => {
    async function loadJourneys() {
      const { data } = await api.get('/filter');

      console.log(data);
      setJourneys(data);
    }

    loadJourneys();
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <Header />
        <aside>
          <h1>Jornadas</h1>
          <ul>
            {journeys.map(journey => (
              <FilterItem
                key={journey.id}
                name={journey.name}
                quantity={journey.quantity}
              />
            ))}
          </ul>
        </aside>
      </Content>
    </Container>
  );
};

export default Dashboard;
