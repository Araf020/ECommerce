const app = require('./app');

//config
const dotenv = require('dotenv');
const { path } = require('./app');

dotenv.config({path: "backend/config/conf.env"});

const connectDatabase = require("./config/db");

//connect database
connectDatabase();

app.listen(process.env.PORT, ()=> {
    console.log('server is working on ' + process.env.PORT);

})