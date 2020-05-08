import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
  <GridWrapper>
    <h2>About Page</h2>
    <a href="https://openweathermap.org/api">API Link</a>
    <p>Current weather is frequently updated based on global models and data from more than 40,000 weather stations</p>
    <p>Data is available in JSON, XML, or HTML format. Available for both Free and paid subscriptions</p>
  </GridWrapper>
)

