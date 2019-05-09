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

// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// // child_added

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').once('value').then((snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});

// 	console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});

// 	console.log(expenses);
// });
// database.ref('expenses').push({
// 	description: 'dulces',
// 	amount: 12,
// 	note: 'solo paleta',
// 	createdAt: 123
// });

// database.ref('expenses').push({
// 	description: 'papas',
// 	amount: 15,
// 	note: 'calientes',
// 	createdAt: 222
// });

// database.ref('expenses').push({
// 	description: 'metro',
// 	amount: 100,
// 	note: '5 boletos',
// 	createdAt: 333
// });

// database.ref().on('value', (snapshot) => {
// 	const { name, job } = snapshot.val();
// 	console.log(`${name} is a ${job.title}  at ${job.company}`);
// });

// database
// .ref()
// .once('value')
// .then((snapsthot) =>  {
// 	const val =  snapsthot.val();
// 	console.log(val)
// })
// .catch((e) => {
// 	console.log('Error fetching data', e)
// })

// database
// 	.ref()
// 	.set({
// 		name: 'Alvarito',
// 		stressLevel: 6,
// 		job: {
// 			title: 'Software developer',
// 			company: 'Google'
// 		},
// 		age: 29,
// 		location: {
// 			city: 'CDMX',
// 			country: 'México'
// 		}
// 	})
// 	.then(() => {
// 		console.log('Data saved!');
// 	})
// 	.catch((e) => {
// 		console.log('Error saving.', e);
// 	});

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazaon',
// 	'location/city': 'Seattle'
// });

//database.ref('age').remove()
