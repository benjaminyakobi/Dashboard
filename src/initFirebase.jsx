import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"

  const firebaseConfig = {
    apiKey: "AIzaSyBhiHbrO2qUvGDmGN3iX5u-SlpRK_EPlzU",
    authDomain: "table-app-e64c3.firebaseapp.com",
    databaseURL: "https://table-app-e64c3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "table-app-e64c3",
    storageBucket: "table-app-e64c3.appspot.com",
    messagingSenderId: "102169979497",
    appId: "1:102169979497:web:c8dc8170bd6ce50f4850f8",
    measurementId: "G-6RC7ZQ1177"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getDatabase(app)
  
  export { auth, db }