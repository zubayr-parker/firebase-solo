// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOXI2kYF_CQsEuqP8qiaZQ5vwl1N9MBpE",
  authDomain: "fir-solo-5eac2.firebaseapp.com",
  projectId: "fir-solo-5eac2",
  storageBucket: "fir-solo-5eac2.appspot.com",
  messagingSenderId: "678615320028",
  appId: "1:678615320028:web:8299ca64187ca01ce67b19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()