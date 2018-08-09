import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAjN3Y4aRAayAPMK8wS7Om-ZyrzsU3uC8Y",
  authDomain: "seatbooking-a4bf5.firebaseapp.com",
  databaseURL: "https://seatbooking-a4bf5.firebaseio.com",
  projectId: "seatbooking-a4bf5",
  storageBucket: "",
  messagingSenderId: "192081897231"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
