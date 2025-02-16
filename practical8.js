const fs = require("fs").promises;

fs.readFile("math.js","utf8")
.then(data => console.log("File data",data))
.catch(err => console.log("Error reading file",err));

//create math.js and put data and then run
