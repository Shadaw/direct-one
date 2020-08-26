import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import FilterItem from '../../components/FilterItem';
import Grid from '../../components/Grid';

import { Container, Content } from './styles';

interface JourneyFilterProps {
  id: number;
  name: string;
  quantity: number;
}
export interface Journey {
  id: string;
  name: string;
  status: number;
  statusInfo: {
    name: string | undefined;
  };
  recipients: string;
  success: string;
}

const Dashboard: React.FC = () => {
  const [journeyFilter, setJourneyFilter] = useState<JourneyFilterProps[]>([]);
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [selectedJourneyFilter, setSelectedJourneyFilter] = useState(0);

  useEffect(() => {
    async function loadJourneyFilter() {
      const { data: response } = await api.get('/filter');

      setJourneyFilter(response);
    }

    loadJourneyFilter();
  }, []);

  useEffect(() => {
    async function loadJourneys() {
      const { data: response } = await api.get(
        `/journey/${selectedJourneyFilter || ''}`,
      );

      const formatedJourneys = response.map((data: Journey) => ({
        ...data,
        statusInfo: journeyFilter[data.status],
      }));

      setJourneys(formatedJourneys);
    }

    loadJourneys();
  }, [journeyFilter, selectedJourneyFilter]);

  return (
    <Container>
      <Menu />
      <Content>
        <Header />
        <aside>
          <div>
            <h1>Jornadas</h1>
            <ul>
              {journeyFilter.map(journey => (
                <FilterItem
                  key={journey.id}
                  status={journey.id}
                  name={journey.name}
                  quantity={journey.quantity}
                  selected={selectedJourneyFilter}
                  setSelected={setSelectedJourneyFilter}
                />
              ))}
            </ul>
          </div>
          <Grid journeys={journeys} />
        </aside>
      </Content>
    </Container>
  );
};

export default Dashboard;
