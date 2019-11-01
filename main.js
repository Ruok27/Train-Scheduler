const tBody = $("<tbody>");
const tRow = $("<tr>");
const tHeader = $("<th>");
const tData = $("<td>");

let table = $(".table");






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

    let convertedTime = moment(trainTime, "HH:mm");
    let minutesAway = convertedTime.add(frequency, 'minutes').format('HH:mm');



    let newRow = $("<tr>").append(

        $("<th>").text(nameInput),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(trainTime),
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




