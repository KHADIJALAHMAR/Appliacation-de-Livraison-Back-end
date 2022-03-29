const express =require('express');
const app = express();
const bodyParser =require('body-parser');
const database = require('./config/database');
const { Commande ,User ,category ,Product} =require('./models/index');

// import userRoute
// const userRoute = require('./routes/user');
// midlware 
// app.use('/', userRoute);

// database connection

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =4000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`))
