const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ msg: "hello aws" })
})

app.listen(process.env.PORT, () => {
    console.log(`server started at Port ${process.env.PORT}`)
})