
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDD1biikIpQ33zk0d0tFm1YesAeTFPxrFg",
  authDomain: "women-safety-b0b0a.firebaseapp.com",
  databaseURL: "https://women-safety-b0b0a-default-rtdb.firebaseio.com",
  projectId: "women-safety-b0b0a",
  storageBucket: "women-safety-b0b0a.appspot.com",
  messagingSenderId: "306609752691",
  appId: "1:306609752691:web:bd604d2ad796e20c25f806",
  measurementId: "G-S1J106VZE4"
};
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
const auth = getAuth(app)

export {auth,db}