// Arif Haque

const express = require('express'); 
const app = express();
const {cars} = require('./index'); //curly brackets gives you default export 

app.get('/', (request, response) => {
    response.send('Hello from Express!')
});

app.get("/api", (request, response) => {
    const data = {cars};
    response.status(201).send({data});
});

const PORT = 4000;
app.listen(4000, () => console.log(`Listening on port ${PORT}...`));
