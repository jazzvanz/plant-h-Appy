import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import firebase from './firebase';
import Header from './Header';
import PlantList from './PlantList';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: []
    }
  }

  render() {
    return (
      <div className="App">
        
          <div>
            {this.state.plants.map((plant) => {
              return(
                <h1>{plant}</h1>
              )
            })}
          </div>
        
        <Header />
        <PlantList />
        <Footer />
      </div>
    )
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();

      for (let key in data) {
        newState.push(data[key]);
      }

      this.setState({
        plants: newState
      });
      console.log(response.val());
    });
  }
}

export default App;
