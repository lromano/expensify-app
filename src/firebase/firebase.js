import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
// database.ref('expenses').push({
//     description: 'bla',
//     note: 'do not forget',
//     amount: 10, 
//     createdAt: 222233
// });

// child_removed
// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

// child_changed
// database.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

// child_added
// database.ref('expenses')
//     .on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });
// database.ref('expenses')
//     .on('value', snapshot => {
//         const expenses = [];
//         snapshot.forEach((snapshotChild) => {
//             expenses.push({
//                 id: snapshotChild.key,
//                 ...snapshotChild.val()
//             });
//         });
//         console.log(expenses);
//     });
// database.ref('expenses').push({
//     description: 'bla bla',
//     note: 'do not forget 2',
//     amount: 20, 
//     createdAt: 22133
// });

// database.ref('expenses').push({
//     description: 'bla bla bla vbl',
//     note: 'do not forget 3',
//     amount: 20, 
//     createdAt: 2222
// });
// database.ref('notes/-LZaaF4xZu8_4OkcjPXe').remove();
// database.ref('notes').push({
//     title: 'Test 2',
//     body: 'Go to test'
// });
// const firebaseNotes = {
//     notes: {
//         apdd: {
//             title: 'First note',
//             body: 'this is my note'
//         },
//         xxeee: {
//             title: 'Second note',
//             body: 'this is my second note'
//         }
//     }
// };

// const notes = [
//     { 
//         id: '12',
//         title: 'First note',
//         body: 'this is my note'
//     },
//     { 
//         id: '31',
//         title: 'Second note',
//         body: 'this is my second note'
//     }
// ];

// database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.location.city}`);
//     });

// setTimeout(() => {
//     database.ref().update({
//         'job/title': 'Web developer'
//     });
// }, 4000);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error while fetching data ', e);
//     });

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//       console.log(snapshot.val());
//   }, (e) => {
//       console.log('error with data fetching ', e);
//   });

// setTimeout(() => {
//     database.ref('age').set(93)
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7500);

// setTimeout(() => {
//     database.ref('age').set(33)
// }, 10500);
//   database.ref().set({
//       name: 'Lucas Rom',
//       age: 35,
//       stressLevel: 4,
//       job: {
//           title: 'Software engineer',
//           company: 'Belighted'
//       },
//       location: {
//           city: 'Houdeng',
//           country: 'Belgium'
//       },
//   }).then(() => {
//     console.log('data is saved');
//   }).catch((error) => {
//       console.log('this failed ', error);
//   });

//   database.ref().set('this is my data content');

// database.ref('age').set('36');
// database.ref('location/city').set('Brussels');

// database.ref('attributes').set({
//         height: 175,
//         weight: 64
// }).then(() => {
//     console.log('attributes are saved');
// }).catch((e) => {
//     console.log('this failed ', e);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('is single deletion success');
//     }).catch((e) => {
//         console.log('is single deletion error ', e);
//     })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });