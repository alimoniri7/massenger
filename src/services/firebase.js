import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";





const firebaseConfig = {
    apiKey: "AIzaSyDV6v-gKCCLSMKzEruv_7QTDoCWtbL9LZ4",
    authDomain: "chitchat-f3e9c.firebaseapp.com",
    projectId: "chitchat-f3e9c",
    storageBucket: "chitchat-f3e9c.appspot.com",
    messagingSenderId: "686454533707",
    appId: "1:686454533707:web:93dd0d2dd43f34c34367ce"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

