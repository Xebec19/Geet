import firebase from "firebase";
const firebaseConfig = {
apiKey: "AIzaSyAcgNc8IyMoDirOygHic2VE-qlNIJx4GGM",
authDomain: "geet-de67a.firebaseapp.com",
projectId: "geet-de67a",
storageBucket: "geet-de67a.appspot.com",
messagingSenderId: "837485372919",
databaseURL: "https://geet-de67a-default-rtdb.firebaseio.com/",
appId: "1:837485372919:web:4ad1f560d8072fe928faf2"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export const auth = fireDb.auth();
export const db = fireDb.database().ref();