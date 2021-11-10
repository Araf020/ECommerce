const app = require('./app');

//config
const dotenv = require('dotenv');
const { path } = require('./app');
dotenv.config({path: "backend/config/conf.env"});

//connect database
const connectDatabase = require("./config/db");
connectDatabase();


//start server
app.listen(process.env.PORT, ()=> {
    console.log('server is running on http://localhost:' + process.env.PORT);

})