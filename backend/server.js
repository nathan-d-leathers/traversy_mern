// import statements. express makes the app, dotenv controls api keys (use the .config to use a dotenv file)
const express = require("express")
const dotenv = require("dotenv").config()
// bring port number in through .env file, tells the server if it cannot process the env file, port = 6060
const port = process.env.PORT || 6060

// create app
const app = express()

// API CALLS

app.get('api/goals',(req,res) => {
    res.send('Get Your Goals')
})








// adds the ability for the app to run on a port
app.listen(port, () => console.log(`Server running on Port ${port}`));


