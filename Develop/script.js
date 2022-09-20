//~~~~ Global Variables ~~~~~~~~~~~~~~~~~~~~~
const calendarEl = $('#calendarEl');

//~~~~ Sets the current Date  ~~~~~~~~~~~~~~~
function setCurrentDate() {
    let currentDateEl = $('#currentDay');
    let currentDateVar = moment().format("dddd, MMMM, Do");
    currentDateEl.text('Today\'s date is: ' + currentDateVar);
}

//~~~~ Creates the Calendar ~~~~~~~~~~~~~~~~~~
function createCalendar() {
    const timeArr = [09, 10, 11, 12, 01, 02, 03, 04, 05];
    let currTime = moment().format("H");
    for (let i = 0; i < 9; i++) {
        //Append Row to Grid
        let rowEl = $('<div>');
        rowEl.attr('class', 'time-block row');
        calendarEl.append(rowEl);

        //Append Time Column to Row
        let colEl1 = $('<div>');
        colEl1.attr('class', 'col hour');
        if (i < 4) {
            colEl1.text(timeArr[i] + 'AM');
        }
        else {
            colEl1.text(timeArr[i] + 'PM');
        }
        rowEl.append(colEl1);

        //Append Text Column to Row
        let colEl2 = $('<input>');
        colEl2.attr({ type: 'text' });
        colEl2.addClass('col-9 textarea');
        if (currTime > i + 9) {
            colEl2.addClass('past');
        }
        else if (currTime === i + 9) {
            colEl2.addClass('present');
        }
        else {
            colEl2.addClass('future');
        }
        rowEl.append(colEl2);

        //Append Button Column to Row
        let colEl3 = $('<button>');
        colEl3.attr('class', 'col saveBtn');
        colEl3.text('\u{1F4BE}');
        rowEl.append(colEl3);
    }
}

//~~~~ Fills Calendar using Local Storage data
function updateCalendar() {
    for(let x of calendarEl.children()){
        if(localStorage.getItem(x.firstChild.textContent)){
            x.childNodes[1].value=localStorage.getItem(x.firstChild.textContent);
        }
    }
}

//~~~~ Functions that run on start-up ~~~~~~~~
setCurrentDate();
createCalendar();
updateCalendar();


//~~~~ Event Listeners ~~~~~~~~~~~~~~~~~~~~~~~
calendarEl.on('click','.saveBtn', function(event){
    const eventTime = event.target.previousElementSibling.previousElementSibling.textContent;
    const eventText = event.target.previousElementSibling.value;
    localStorage.setItem(eventTime, eventText);
})