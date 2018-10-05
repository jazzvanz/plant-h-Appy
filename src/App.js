import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import firebase from './firebase';
import Header from './Header';
import AccountActions from './AccountActions';
import PlantList from './PlantList';
import PlantActions from './PlantActions';
import Footer from './Footer';

class App extends Component {

  // Storing our Plant info from firebase
  constructor() {
    super();
    this.state = {
      plants: [],
      userPlant: ''
    }
  }

  // Adding Data to Firebase
  valueCollection = (event) => {
    this.setState({userPlant: event.target.value })
  }

  buttonClick = () => {
    // Do I need to restate this twice? likely not.
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userPlant);
    this.setState({userPlant: ""})
  }

  removePlant = (plantId) => {
    const dbRef = firebase.database().ref(plantId);
    dbRef.remove();
  }

  render() {
    return (
      <div className="container plantHappy-grid">
        
        <Header />

        <main className="main">
          <PlantList />
          <PlantActions />
        </main>

        {this.state.plants.map((plant, i) => {
          return (
            <React.Fragment>
              <li key={i}>
                {plant.name} - {plant.key}
              </li>

              <button onClick={() => this.removePlant(plant.key)}>remove this plant</button>
            </React.Fragment>
          )
        })}

        <input type="text" onChange={this.valueCollection} id="plantName" name="plantName" placeholder="Plant Name" />
        <button onClick={this.buttonClick} className="plant-actions__action">Add Plant</button>
        
        <AccountActions />

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
        newState.push({key: key, name: data[key]});
      }

      this.setState({
        plants: newState
      });
      console.log(response.val());
    });
  }
}

export default App;
