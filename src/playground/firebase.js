import * as firebase from 'firebase';

firebase.initializeApp(config);

const database = firebase.database();

database.ref('notes/-LH3Dr4W4GH6SarHsrBD').remove();

database.ref('notes/-LH3Dr4W4GH6SarHsrBD').update({
  body: 'Buy food'
})

database.ref('notes').push({
  title:'To Do',
  body:'Go for a run'
});

const firebaseNotes = {
  notes: {
    1: {
      title: 'First note!',
      body: 'This is my note'
    },
    2: {
      title: 'Another note',
      body: 'This is my note'
    }
  }
}


const sub = database.ref().on('value', (snapshot) => {
  console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`);
})
database.ref('name').set('Mike');

const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(25);
}, 3500);

setTimeout(() => {
  database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(26);
}, 10500);


database.ref()
.once('value')
.then((snapshot) => {
  const val = snapshot.val();
  console.log(val);
})
.catch((e) => {
    console.log('Error fetching data', e);
});

database.ref().set({
  name: 'Jack',
  age: 26,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Mumbai',
    country: 'India'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed', e);
});

database.ref('isSingle').set(null); Another way to remove

database.ref('isSingle').remove().then(() => {
  console.log('Data removed!');
}).catch((e) => {
  console.log('Did not remove data', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});


database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: snapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
});

const sub = database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: snapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
});

database.ref('expenses').push({
  description: 'No',
  note: '',
  amount: 34,
  createdAt: ''
});


// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
