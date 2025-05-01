const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.send("hello wordl sads")
})

app.listen(process.env.PORT, () => {
    console.log(`server started at Port ${process.env.PORT}`)
})