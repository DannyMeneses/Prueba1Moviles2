import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"

export const firebaseConfig = {
  apiKey: "AIzaSyCjrFf4B0BcJyQD63CRV_kxYfairao2Lkc",
  authDomain: "appmov3-17dc5.firebaseapp.com",
  projectId: "appmov3-17dc5",
  storageBucket: "appmov3-17dc5.appspot.com",
  messagingSenderId: "236102509775",
  appId: "1:236102509775:web:5b14413b23f673b10f03ba",
  measurementId: "G-Q0BR1SRF71"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app)