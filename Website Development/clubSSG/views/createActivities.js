let eventSection = document.getElementById("EventList");
function createRow(eventObj)
{
    let newRow = `<th scope="row">${eventObj.name}</th><td>${eventObj.dates}</td><td>${eventObj.times}</td><td>${eventObj.description}</td>`; //Take portions of event object and set up as table data
    return newRow;
};

myEvents.forEach(function(myEvents)         //For each element of object
{
    rowInfo = createRow(myEvents);          //Get item from object, put in table data format
    newRow = document.createElement("tr");  //Create table row
    eventSection.appendChild(newRow);       //Append table row to existing table
    newRow.outerHTML = rowInfo;             //Put object info into newly created row
});