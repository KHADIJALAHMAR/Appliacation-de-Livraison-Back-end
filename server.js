const express =require('express');
const app = express();
const database = require('./config/database');
const { Commande ,User ,category ,Product} =require('./models/index');

// import userRoute
const AuthRoute = require('./router/authentificationRoute');
// middleware 


// database connection

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/auth', AuthRoute);

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =4000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`))
