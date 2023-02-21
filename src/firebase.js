import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5OPFxsHr-jNMWtTck-V_tiJyAfKJ00Uk",
  authDomain: "gamezone-e-comemerce.firebaseapp.com",
  databaseURL: "https://gamezone-e-comemerce-default-rtdb.firebaseio.com",
  projectId: "gamezone-e-comemerce",
  storageBucket: "gamezone-e-comemerce.appspot.com",
  messagingSenderId: "470844700571",
  appId: "1:470844700571:web:3f2a71f8c50c2a1fb4933e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export{
    storage
}