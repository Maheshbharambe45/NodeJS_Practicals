//create DateTime.js file
module.exports.getDateTime=()=>{
    return new Date().toDateString();
};

//create index.js file
const dateTime = require("./DateTime");
console.log("Date and time is ",dateTime.getDateTime());


//note
// DateTime.js file and index.js file both different files but in same folder