// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9nWTspSRpXsauiSqsmFoRkr7IAyV8r4c",
  authDomain: "careerspark-823bb.firebaseapp.com",
  projectId: "careerspark-823bb",
  storageBucket: "careerspark-823bb.firebasestorage.app",
  messagingSenderId: "527235549440",
  appId: "1:527235549440:web:f5ba258efcbfb2e0934be5",
  measurementId: "G-1FNN8B1R54"
};

// Initialize Firebase using the global namespace (Compatibility Mode)
firebase.initializeApp(firebaseConfig);

// Create global variables for easier access
const auth = firebase.auth();
const db = firebase.firestore();
