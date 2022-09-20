//~~~ Sets the current Date  ~~~~~~
let currentDateEl = $('#currentDay');
let currentDateVar = moment().format("dddd, MMMM, Do");
currentDateEl.text('Today\'s date is: ' + currentDateVar);


//~~~~ Creates the Calendar ~~~~~~~
let calendarEl = $('#calendarEl');
let timeArr = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (let i = 0; i < 9; i++) {
    //Append Row to Grid
    let rowEl = $('<div>');
    rowEl.attr('class', 'row');
    calendarEl.append(rowEl);

    //Append Time Column to Row
    let colEl1 = $('<div>');
    colEl1.attr('class', 'col, hour');
    if (i < 4) {
        colEl1.text(timeArr[i] + 'AM');
    }
    else {
        colEl1.text(timeArr[i] + 'PM');
    }
    rowEl.append(colEl1);

    //Append Text Column to Row
    let colEl2 = $('<div>');
    colEl2.attr('class', 'col-10, past');
    colEl2.text('Test');
    rowEl.append(colEl2);

    //Append Button Column to Row
    let colEl3 = $('<div>');
    colEl3.attr('class', 'col, saveBtn');
    colEl3.text('Test');
    rowEl.append(colEl3);
}