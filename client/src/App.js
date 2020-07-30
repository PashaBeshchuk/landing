import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import ImageBlock from './component/ImageBlock'
import OurAdvantages from './component/OurAdvantages';
import OurEmployees from './component/OurEmployees';
import RegistContainer from './component/RegistContainer';



function App() {
  return (
    <div>
      <Header/>
      <ImageBlock/>
      <OurAdvantages/>
      <OurEmployees/>
      <RegistContainer/>
    </div>
  );
}

export default App;
