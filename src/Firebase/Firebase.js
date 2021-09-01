import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAv-yPe8IDtIGh1D-uJHzU62UshoEejGMA',
	authDomain: 'weform-9ecab.firebaseapp.com',
	projectId: 'weform-9ecab',
	storageBucket: 'weform-9ecab.appspot.com',
	messagingSenderId: '15113147439',
	appId: '1:15113147439:web:9cfb0a0b2dbc2018eae2da',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
