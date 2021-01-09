const pollOne = document.getElementById("pollOne")
const pollTwo = document.getElementById("pollTwo")
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCjF717IJYekSCZp2rc98rmRLlZ41nXaew",
    authDomain: "beaver-polling.firebaseapp.com",
    projectId: "beaver-polling",
    storageBucket: "beaver-polling.appspot.com",
    messagingSenderId: "142925772954",
    appId: "1:142925772954:web:91d3956f39ee6b10fbc723",
    measurementId: "G-KE5MKMCSCX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
pollOne.addEventListener("submit", function(e) {
    e.preventDefault();
    const pollOneResponse = document.getElementById("pollOneResponse").value
    db.collection("pollOneResponses").add({
            response: pollOneResponse,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    document.getElementById("pollOneResponse").value = ""
    document.getElementById('pollOneResponse').placeholder = "Submitted!"
    document.getElementById('pollOneResponse').disabled = true
})
pollTwo.addEventListener("submit", function(e) {
    e.preventDefault();
    const pollTwoResponse = document.getElementById("pollTwoResponse").value
    db.collection("pollTwoResponses").add({
            response: pollTwoResponse,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    document.getElementById("pollTwoResponse").value = ""
    document.getElementById('pollTwoResponse').placeholder = "Submitted!"
    document.getElementById('pollTwoResponse').disabled = true
})