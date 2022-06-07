import React from 'react';
import Container from './components/Container';
import ContainerFluid from './components/ContainerFluid';
import Footer from './components/Footer';
import Lists from './components/Lists';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Container />
      <ContainerFluid />
      <Lists />
      <Footer/>
    </div>
  );
}

export default App;