const express =require('express');
const app = express();

// import userRoute
const userRoute = require('./routes/user');
// midlware 
app.use('/', userRoute);

// database connection
const database = require('./config/database');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =4000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`))
