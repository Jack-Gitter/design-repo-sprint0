// example firebase db setup
// // Import the functions you need from the SDKs you need

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');


const serviceAccount = require('./fir-tutorial-e5a27-firebase-adminsdk-b59s1-a0b258009e.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();


// const snapshot = db.collection('cafes').get().then(data => data.forEach((doc) => {
// 		console.log(doc.id, '=>', doc.data());
// }))


export default db;

