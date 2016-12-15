import * as firebase from "firebase"
let database;
export const init = (user) => {
	let config = {
    apiKey: "AIzaSyDIfZb970hczMMrPRPBGmUWibKlx9_F4ac",
    authDomain: "iron-axon-100014.firebaseapp.com",
    databaseURL: "https://iron-axon-100014.firebaseio.com",
    storageBucket: "iron-axon-100014.appspot.com",
    messagingSenderId: "503545191107"
	};
	firebase.initializeApp(config);
	// firebase.auth().signInWithEmailAndPassword("taweesoft@gmail.com", "somesome").catch(function(error) {
	// 	// Handle Errors here.
	// 	var errorCode = error.code;
	// 	var errorMessage = error.message;
  //   console.log(errorMessage);
	// 	// ...
	// });
	database = firebase.database()
}

export const listenFood = () => {
	let users = database.ref('food')
	users.on('value', (val) => {
		console.log(val.val());
	})
}

// retrieve from firebase
// return promise object
export const getFood = () => {
  return database.ref('food').once('value')
}
