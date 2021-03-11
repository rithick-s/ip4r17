import React from 'react';
import {Box} from '@material-ui/core'
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Section from "./Components/Section"
import Bottom from "./Components/Bottom"


function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <Section />
      <Bottom />
    </Box>
  );
}

export default App;
