import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AccountActions from './AccountActions';
import PlantList from './PlantList';
import PlantActions from './PlantActions';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div className="container plantHappy-grid">
        
        <Header />

        <main className="main">
          <PlantList />
          <PlantActions />
        </main>
        
        <AccountActions />

        <Footer />
      </div>
    )
  }
}

export default App;
