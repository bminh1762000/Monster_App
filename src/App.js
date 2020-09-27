import React, { useState, useEffect } from 'react'

import FormInput from './components/form-input/form-input.component';
import CardList from './components/card-list/card-list.component';

import './App.css';
import robots from './robots';

const App = () => {
  const [data, setData] = useState(robots);
  const [searchedRobot, setSearchedRobot] = useState("");


  useEffect(() => {
    const dataFunc = () => {
      const dataFilter = robots.filter(robot => robot.name.toLowerCase().includes(searchedRobot));
      console.log(searchedRobot);
      setData(dataFilter);
    };
    dataFunc();
  }, [searchedRobot]);

  return (
    <div className="App">
      <h1>Monster App</h1>
      <FormInput searchedRobot={searchedRobot} setSearchedRobot={setSearchedRobot} />
      <CardList robots={data} />
    </div>
  );
};

export default App;
