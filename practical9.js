const fs = require('fs'); 

fs.writeFileSync('demo.txt', 'Hello, this is a Node.js File System example!');

const data = fs.readFileSync('demo.txt', 'utf8');
console.log("File Content:", data)
