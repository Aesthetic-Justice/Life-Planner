let currentDateEl = $('#currentDay');
let currentDateVar = moment().format("dddd, MMMM, Do");
currentDateEl.text('Today\'s date is: '+ currentDateVar);