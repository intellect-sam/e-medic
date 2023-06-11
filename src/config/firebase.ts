import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBZwgVDrrV8GRLn8r4hSNP0KXA6jMIda9g",
  authDomain: "auth-development-11460.firebaseapp.com",
  projectId: "auth-development-11460",
  storageBucket: "auth-development-11460.appspot.com",
  messagingSenderId: "660287405544",
  appId: "1:660287405544:web:0e1a50c224f5a993b2385d"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)