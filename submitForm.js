const pollOne = document.getElementById("pollOne")
const pollTwo = document.getElementById("pollTwo")
const pollThree = document.getElementById("pollThree")
const pollFour = document.getElementById("pollFour")
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
//One
pollOne.addEventListener("submit", function(e) {
    e.preventDefault();
    const pollOneResponse = document.getElementById("pollOneResponse").value;
    const pollOneName = document.getElementById("pollOneName").innerText;
    db.collection("pollOneResponses").add({
        "Poll Name":pollOneName,
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
//Two
pollTwo.addEventListener("submit", function(e) {
    e.preventDefault();
    const pollTwoResponse = document.getElementById("pollTwoResponse").value;
    const pollTwoName = document.getElementById("pollTwoName").innerText;
    db.collection("pollTwoResponses").add({
        "Poll Name":pollTwoName,
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
//Three
pollThree.addEventListener("submit", function(e) {
    e.preventDefault();
    const pollThreeResponse = document.getElementById("pollThreeResponse").value
    const pollThreeName = document.getElementById("pollThreeName").innerText;
    db.collection("pollThreeResponses").add({
            "Poll Name": pollThreeName,
            response: pollThreeResponse,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    document.getElementById("pollThreeResponse").value = ""
    document.getElementById('pollThreeResponse').placeholder = "Submitted!"
    document.getElementById('pollThreeResponse').disabled = true
})
pollFour.addEventListener("submit", function(e) {
    e.preventDefault();
    const pollFourResponse = document.getElementById("pollFourResponse").value;
    const pollFourName = document.getElementById("pollFourName").innerText;
    db.collection("pollFourResponse").add({
            "Poll Name": pollFourName,
            response: pollFourResponse,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    document.getElementById("pollFourResponse").value = ""
    document.getElementById('pollFourResponse').placeholder = "Submitted!"
    document.getElementById('pollFourResopnse').disabled = true
})
