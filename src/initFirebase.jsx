import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    // apiKey: "AIzaSyBhiHbrO2qUvGDmGN3iX5u-SlpRK_EPlzU",
    // authDomain: "table-app-e64c3.firebaseapp.com",
    // databaseURL: "https://table-app-e64c3-default-rtdb.europe-west1.firebasedatabase.app",
    // projectId: "table-app-e64c3",
    // storageBucket: "table-app-e64c3.appspot.com",
    // messagingSenderId: "102169979497",
    // appId: "1:102169979497:web:c8dc8170bd6ce50f4850f8",
    // measurementId: "G-6RC7ZQ1177"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getDatabase(app)
  
  export { auth, db }