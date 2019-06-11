const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://DevLeandroDias:smarapd@cluster0-fp7tq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(require('./routes'))

app.listen(4000)