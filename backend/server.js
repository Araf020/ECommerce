const app = require('./app');

//config
const dotenv = require('dotenv');
const { path } = require('./app');

//handle uncaught error...

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});



dotenv.config({path: "backend/config/conf.env"});

//connect database
const connectDatabase = require("./config/db");
connectDatabase();


//start server
const serverSide = app.listen(process.env.PORT, ()=> {
    console.log('server is running on http://localhost:' + process.env.PORT);

})



//unhandled promise rejection ===> error connecting db

process.on("unhandledRejection", err => {
    console.log("Error: "+ err.message);
    console.log("Shutting down the server due to unexpected ocurrence!");

    serverSide.close( () => {
        process.exit(1);
    });
});


