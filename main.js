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



    let newRow = $("<tr>").append(

        $("<th>").text(nameInput),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextArrival),
        $("<td>").text(minutesAway));



    $(table).append(newRow);

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




})




