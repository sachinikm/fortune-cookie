// Require the Express module
const express = require('express');
const child_process = require('child_process');
// Create an Express web application
const app = express();
// Specify how to respond to GET /, // Set handler for the index of the website
app.get('/', (req, res) => {
// Get the current date and time
const currentDate = new Date().toLocaleString();
// Run the system `fortune` command and respond with the message
child_process.exec('fortune', (error, message) => {
if(error === null) {
//const response = `Current Date and Time: ${currentDate}\nFortune Message: ${message}`;
//            res.send(response);
const response = 'Current Date and Time: ' + currentDate +'<br>'+ 'Fortune Message: ' + message;
            res.send(response);
} else {
res.send('Error: ' + error);
}
})
});
// Start listening for HTTP requests on port 3000, // Start web application server
app.listen(80, () => {
console.log('Server started');
});
