let firebaseConfig = {
    apiKey: "AIzaSyD3cImFbRhG-arJj3yWsr75Hv7eO2dLibk",
  authDomain: "blogwebsite-1ea4c.firebaseapp.com",
  projectId: "blogwebsite-1ea4c",
  storageBucket: "blogwebsite-1ea4c.appspot.com",
  messagingSenderId: "1005314826656",
  appId: "1:1005314826656:web:9cc55589f8c811100484c5",
  measurementId: "G-J8VYT2Z2Q8"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();