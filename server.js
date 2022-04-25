const express =require('express');
const app = express();
const cors =require('cors');
const database = require('./src/config/database');
const { CommandeProduct ,User ,Category ,Product} =require('./src/models/index');
const nodemailer = require('nodemailer');



// import userRoute
const authentificationRoute = require('./src/router/authentificationRoute');
const AdminRoute =require('./src/router/Admin');
const Command_Route =require('./src/router/CommandRoute')



// database connection

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

// middleware 
app.use('/auth', authentificationRoute);
app.use('/Admin', AdminRoute)
app.use('/Client',Command_Route)
app.use('/Livreur',Command_Route)

// console
function ConsolLog(rep, res, next) {
    console.log(' [' + rep['method'] + '] http://localhost:' + "4000/" + rep['url'])
    next()
}

app.use(ConsolLog);
// console end

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =4000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`));
