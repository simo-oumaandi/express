const express = require('express')

const app = express()

app.use((req, res, next) => {
    res.send('Hello In My First Server With E');
});

 app.listen(8080, _ => console.log('Server Started'));