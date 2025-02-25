// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbbMcnRKveU9obPlYNDg393rv5_RBIu6k",
  authDomain: "netflixgpt-c513b.firebaseapp.com",
  projectId: "netflixgpt-c513b",
  storageBucket: "netflixgpt-c513b.firebasestorage.app",
  messagingSenderId: "678322532098",
  appId: "1:678322532098:web:e9123d6ccf6b1699755c1b",
  measurementId: "G-2ZQLRY8Q26"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
