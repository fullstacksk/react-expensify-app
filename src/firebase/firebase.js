import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STRONG_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider, database as default }

// const onValueChange = database.ref('expanses')
//     .on('value', (snapshot) => {
//         const expanses = []
//         snapshot.forEach((childSnapshot) => {
//             expanses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expanses)
//     })

// database.ref('expanses')
//     .on("child_removed", (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })

// database.ref('expanses')
//     .on("child_changed", (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })

// database.ref('expanses')
//     .on("child_added", (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })




// database.ref('expanses')
//     .once('value')
//     .then((snapshot) => {
//         const expanses = []
//         snapshot.forEach((childSnapshot) => {
//             expanses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expanses)
//     })

// database.ref('expanses').push({
//     description: "Internet Banking Bill",
//     note: "We have the paid last bill of internet",
//     amount: 345.67,
//     createdAt: 34567890
// })

// database.ref('expanses').push({
//     description: "Gas Bill",
//     note: "We have the paid last bill of gas",
//     amount: 34566.67,
//     createdAt: 345678905678
// })

// database.ref('expanses').push({
//     description: "DishTV Bill",
//     note: "We have the paid last bill of tataSky yesterday",
//     amount: 34775.67,
//     createdAt: 34567890456
// })

// database.ref('notes/-M6IHL4nszz-dkf6qFRN').remove()

// database.ref('notes').push({
//     title: "Learn Angular Js",
//     body: "Make an Angular web app!"
// })

// firebase.database().ref().set({
//     name: "s k sahil",
//     attribute: {
//         height: 168,
//         weight: 58
//     },
//     isSingle: true,
//     school: {
//         school_name: "Navketan High School, Begusarai",
//         class: 10,
//         roll_no: 123
//     },
//     address: {
//         city: "Begusarai",
//         country: "India"
//     },
//     job: {
//         company: "Amazon",
//         title: "React Developer"
//     }
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is ${data.job.title} at ${data.job.company}, ${data.address.city} in ${data.address.country} !`);
// }, (e) => {
//     console.log("Data fetching error has been occured!", e)
// })

// setTimeout(() => {
//     database.ref('job/company').set('Google')
// }, 3000)
// setTimeout(() => {
//     database.ref('job/company').set('Facebook')
// }, 6000)
// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 9000)
// setTimeout(() => {
//     database.ref('job/company').set('Infosys')
// }, 12000)


// database.ref('isSingled')
//     .remove()
//     .then(() => {
//         console.log("isSingle has been removed!");
//     })
//     .catch((e) => {
//         console.log("isSingle not removed", e);
//     })

// firebase.database().ref('address/city').set('Patna').then(() => {
//     console.log("City has been changed!")
// }).catch((e) => {
//     console.log("City change fails", e)
// })
// firebase.database().ref('attribute/weight').set("70").then(() => {
//     console.log("Weight has been changed!")
// }).catch((e) => {
//     console.log("Weight change failed!", e)
// })

// database.ref()