const express = require('express')

const app = express()

app.use((req, res, next));

 app.listen(8080, _ => console.log('Server Started'));