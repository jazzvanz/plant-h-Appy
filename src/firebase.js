import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCP-g2y9BnVq3VG8g4D6vio0pNr0hAdHv8",
  authDomain: "plant-happy.firebaseapp.com",
  databaseURL: "https://plant-happy.firebaseio.com",
  projectId: "plant-happy",
  storageBucket: "plant-happy.appspot.com",
  messagingSenderId: "831284390463"
};

firebase.initializeApp(config);

export default firebase;
