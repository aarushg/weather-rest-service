import React from 'react';
import WeatherApp from './Page/WeatherPage';
import styled from 'styled-components';
import Center from 'react-center';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  display: 'flex';
  alignItems: 'center';
  justifyContent: 'center';
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <GridWrapper>
    <WeatherApp />
  </GridWrapper>
)