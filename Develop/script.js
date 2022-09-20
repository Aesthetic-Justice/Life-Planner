//~~~ Sets the current Date  ~~~~~~
let currentDateEl = $('#currentDay');
let currentDateVar = moment().format("dddd, MMMM, Do");
currentDateEl.text('Today\'s date is: ' + currentDateVar);


//~~~~ Creates the Calendar ~~~~~~~
const calendarEl = $('#calendarEl');
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
    let colEl2 = $('<div>');
    colEl2.addClass('col-10, textarea');
    if(currTime<i+9){
        colEl2.addClass('past');
    }
    else if(currTime===i+9){
        colEl2.addClass('present');
    }
    else{
        colEl2.addClass('future');
    }
    colEl2.text('Test');
    rowEl.append(colEl2);

    //Append Button Column to Row
    let colEl3 = $('<button>');
    colEl3.attr('class', 'col saveBtn');
    colEl3.text('Test');
    rowEl.append(colEl3);
}