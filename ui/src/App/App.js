import React from 'react';
import './App.scss';
import AddCandyForm from '../Components/AddCandyForm/AddCandyForm';
import CandyList from '../Components/CandyList/CandyList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h3>Candy Market</h3>
        <AddCandyForm/>
        <CandyList/>
      </div>
    );
  }
}

export default App;
