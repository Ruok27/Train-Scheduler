//Firebase configs 
const firebaseConfig = {
    apiKey: "AIzaSyAOOo2WNYHdFpGWnqVPF4td7UChSr9ylJU",
    authDomain: "trainscheduler-56f96.firebaseapp.com",
    databaseURL: "https://trainscheduler-56f96.firebaseio.com",
    projectId: "trainscheduler-56f96",
    storageBucket: "trainscheduler-56f96.appspot.com",
    messagingSenderId: "403835699627",
    appId: "1:403835699627:web:76dc1176cf07793c7b52ee"
  };

  firebase.initializeApp(firebaseConfig);

  let database = firebase.database();



















let table = $(".table");

let currentTime = moment().format("HH:mm");

let nameInput;
let destination;
let trainTime;
let frequency;








$("#submitButton").on("click", function (event) {
    event.preventDefault();

    nameInput = $("#TrainName").val().trim();
    destination = $("#Destination").val().trim();
    trainTime = $("#Train-Time").val().trim();
    frequency = $("#Frequency").val().trim();


    currentTime = moment().format("HH:mm");
    let convertedTime = moment(trainTime, "HH:mm").subtract(1, "years");

    let timeDiff = moment().diff(moment(convertedTime), "minutes");



    let tRemainder = timeDiff % frequency;

    let minutesAway = frequency - tRemainder;

    let nextArrival = moment().add(minutesAway, "minutes").format("hh:mm");





// temp object for firebase

    let newSchedule = {

        train: nameInput,
        des: destination,
        freq: frequency,
        nextTime: nextArrival,
        minutesLeft: minutesAway};
        
        database.ref().push(newSchedule);
        



    nameInput = "";
    destination = "";
    trainTime = "";
    frequency = "";
    convertedTime = "";
    minutesAway = "";


    $("#TrainName").val("");
    $("#Destination").val("");
    $("#Train-Time").val("");
    $("#Frequency").val("");










});




database.ref().on("child_added", function(childSnapshot) {


let tName = childSnapshot.val().train;
let dName = childSnapshot.val().des;
let fName = childSnapshot.val().freq;
let nName = childSnapshot.val().nextTime;
let mName = childSnapshot.val().minutesLeft;



let newRow = $("<tr>").append(

    $("<th>").text(tName),
    $("<td>").text(dName),
    $("<td>").text(fName),
    $("<td>").text(nName),
    $("<td>").text(mName));



$(table).append(newRow);





});




