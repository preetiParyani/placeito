const express = require('express')
const app = express()
const homeRoute = require('./routes/home')
const adminRoute = require('./routes/admin')


//Set the view engine
app.set('view engine', 'ejs')

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Express automatically making route for static files in public directory
app.use(express.static('public'));

// Using the following routes
app.use('/', homeRoute)
app.use('/admin', adminRoute)

app.listen(3000, ()=>{
    console.log(`Server running on port 3000`)
})
