'use strict'
// import the dom
import * as DOM from './dom.js';

//read random
const getRandom = () => {
    DOM.output.innerHTML = ``;
    axios.get(`http://www.boredapi.com/api/activity/`)
        .then((response) => {
            let data = response.data;//write to output
            let str = `Activity: ${data.activity}<br>Type: ${data.type}<br>
            Participants: ${data.participants}<br>Price: £${data.price}<br>Link: ${data.link || "No link available"}`;
            DOM.output.innerHTML = str;
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
}

DOM.buttonRandom.onclick = () => getRandom();

//read by type
const getByType = (type) => {
    DOM.output.innerHTML = ``;
    axios.get(`http://www.boredapi.com/api/activity?type=${type.toLowerCase()}`)
        .then((response) => {
            let data = response.data;//write to output
            let str = `Activity: ${data.activity}<br>Type: ${data.type}<br>
            Participants: ${data.participants}<br>Price: £${data.price}<br>Link: ${data.link || "No link available"}`;
            DOM.output.innerHTML = str;
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
}

DOM.buttonType.onclick = () => getByType(DOM.type.value);