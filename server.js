const express = require('express');
const mongoose = require('./Config/config')
const mainRouter = require('./Route/index')


const port = 4000;
const app = express()

const urlParser = express.json();

app.use(urlParser);
app.use(mainRouter)









app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})