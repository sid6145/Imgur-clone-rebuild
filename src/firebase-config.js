import firebase  from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDJbdjMKGLWJXRtHQr5hM0D42VZ_YhhsrM",
    authDomain: "imgur-601aa.firebaseapp.com",
    projectId: "imgur-601aa",
    storageBucket: "imgur-601aa.appspot.com",
    messagingSenderId: "912838965326",
    appId: "1:912838965326:web:5524c3a5e792d435572b1f"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export const storage = firebase.storage()
  export const db = firebase.firestore()

  export default firebase