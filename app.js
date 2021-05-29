const firebaseConfig = {
    apiKey: "AIzaSyDlfzXyjbCWlvDEJ1mkyJvKwA1pSzfMMNY",
    authDomain: "database-connectivity-c3126.firebaseapp.com",
    projectId: "database-connectivity-c3126",
    storageBucket: "database-connectivity-c3126.appspot.com",
    messagingSenderId: "144742028885",
    appId: "1:144742028885:web:4bc88f5a37ee1a08c726dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});
const form = document.querySelector('#f1');
// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('data base').add({
        name: form.name.value,
        phno: form.phno.value,
        email: form.email.value,
        age: form.age.value,
        occupation: form.occu.value,
        fee: form.fee.value
    });
    form.name.value = '';
    form.phno.value = '';
    form.email.value = '';
    form.age.value = '';
    form.occu.value = '';
    form.fee.value = '';
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('data base').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
});