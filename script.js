'use strict'
// import the dom
import * as DOM from './dom.js';

//read random
const getRandom = () => {
    DOM.output.innerHTML = ``;
    axios.get(`http://www.boredapi.com/api/activity/`)
        .then((response) => {
            DOM.output.innerHTML = JSON.stringify(response.data);//write to output
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
}

DOM.buttonRandom.onclick = () => getRandom();

//read by type (drop down menu maybe)
const getByType = (type) => {
    DOM.output.innerHTML = ``;
    axios.get(`http://www.boredapi.com/api/activity?type=${type.toLowerCase()}`)
        .then((response) => {
            DOM.output.innerHTML = JSON.stringify(response.data);//write to output
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
}

DOM.buttonType.onclick = () => getByType(DOM.input.value);

//read by participants
const getByParticipants = (participants) => {
    DOM.output.innerHTML = ``;
    axios.get(`http://www.boredapi.com/api/activity?participants=${parseInt(participants)}`)
        .then((response) => {
            DOM.output.innerHTML = JSON.stringify(response.data);//write to output
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
}

DOM.buttonParticipants.onclick = () => {
    if (Number.isInteger(DOM.input.value)) {
        getByParticipants(DOM.input.value);
    } else {
        DOM.output.innerHTML = "Invalid Input"
        console.log("Input must be Integer");
    }
}

//read by max price
const getByMaxPrice = (MaxPrice) => {
    DOM.output.innerHTML = ``;
    axios.get(`http://www.boredapi.com/api/activity?participants=${parseInt(participants)}`)
        .then((response) => {
            DOM.output.innerHTML = JSON.stringify(response.data);//write to output
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
}