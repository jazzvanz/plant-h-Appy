import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Header from './Header';
import AccountActions from './AccountActions';
import PlantList from './PlantList';
import AddPlant from './AddPlant';
import PlantActions from './PlantActions';
import Footer from './Footer';

class App extends Component {

  // Storing Plant information from Firebase
  constructor() {
    super();
    this.state = {
      plants: [],
      userPlant:'',
      waterDate:''
    }
  }

  // Adding Plant our Component State each time
  // The input has a change
  valueCollection = (event) => {
    this.setState({ 
      userPlant: event.target.value
    })
  }

  waterDate = (event) => {
    this.setState({
      waterDate: event.target.value
    })
    console.log('this is firing.');
  }


  // Add the updated state to firebase when the button is clicked
  // Then resetting state to be empty
  buttonClick = () => {
    const dbRef = firebase.database().ref();
    dbRef.push({plantName: this.state.userPlant, waterDate: this.state.waterDate});
    this.setState({userPlant: "", waterDate:""})
  }

  render() {
    return (
      <div className="container plantHappy-grid">
        
        <Header />

        <main className="main">
          <PlantList plants={this.state.plants} />
          <PlantActions waterDate={this.waterDate} returnPlant={this.buttonClick} valueCollection={this.valueCollection} />
        </main>
        
        <AccountActions />

        <Footer />
      </div>
    )
  }

    // Firebase Things: After Component is successifully added to the DOM
    // Fetch the our Firebase database
    // 
    // Push key and value into newState,
    // Adding newState to Plants in component state
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
