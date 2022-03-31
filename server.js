const express =require('express');
const app = express();
const database = require('./config/database');
const { Commande ,User ,category ,Product} =require('./models/index');



// import userRoute
const authentificationRoute = require('./router/authentificationRoute');
const AdminRoute =require('./router/Admin');



// database connection

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// middleware 
app.use('/auth', authentificationRoute);
app.use('/Admin', AdminRoute)

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =4000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`))
