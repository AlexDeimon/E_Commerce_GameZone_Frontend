import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBmLPqr8cO6zKz5d1QSwdM9kEz39lF8kbg",
    authDomain: "project-ing-web.firebaseapp.com",
    databaseURL: "https://project-ing-web-default-rtdb.firebaseio.com",
    projectId: "project-ing-web",
    storageBucket: "project-ing-web.appspot.com",
    messagingSenderId: "457873148937",
    appId: "1:457873148937:web:8394be3a50345888ddbcd8",
    measurementId: "G-0JCR01HL96"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export{
    auth,
    storage
}