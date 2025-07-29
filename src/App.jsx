import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WhyWeAreBest from './sections/WhyWeAreBest';
import SuccessExperience from './sections/SuccessExperience';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <WhyWeAreBest/>
      <SuccessExperience/>
    </div>
  );
}

export default App;
