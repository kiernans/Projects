let clickTarget = document.getElementById("button");        //obtain button
let wMessage = document.getElementById("errorPlace");       //obtain element where error message will go (under login)
function myCallback() {
    event.preventDefault();                                 //allow error message to go through
    let input = document.getElementById("frm1");            //obtain element where input is
    let output = input[0].value;                            //get first element of input (which would be email input)
    let content = `Welcome ${output}. This site is currently under construction.`
    errMes = document.createElement("div");                 
    errMes.innerHTML = content;                             //put error message into div
    wMessage.appendChild(errMes);
    clickTarget.removeEventListener('click', myCallback);   //stop event after one use
};
clickTarget.addEventListener('click', myCallback);   