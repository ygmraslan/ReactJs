import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDxNKHnNfytLZDl_Obwh9uQMPZFOSRpEgI",
    authDomain: "fir-console-70930.firebaseapp.com",
    projectId: "fir-console-70930",
    storageBucket: "fir-console-70930.firebasestorage.app",
    messagingSenderId: "813262389591",
    appId: "1:813262389591:web:bf83ad0ae93c1c2e5afe12"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);