import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  
  apiKey: "AIzaSyD5JIsT8jpsLB8SuwCoH9b8kIhaWCiEN9g",
  authDomain: "pathfide.firebaseapp.com",
  projectId: "pathfide", 
  storageBucket: "pathfide.appspot.com",
  messagingSenderId: "914346132615",
  appId: "1:914346132615:android:8cbf3aadbf113e69d22422",
  measurementId: "G-LF4F9P3YJR"
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db = getFirestore(app);
export default app;

