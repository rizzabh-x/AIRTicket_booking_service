const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {PORT} = require('./config/serverConfiig');
const apiRoutes = require('./routes/index');
const db = require('./models/index')

const startAndSetupServer = () => {

    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: true}))

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`server started on PORT:  ${PORT}`);

        if(!process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
        }
    })
}

startAndSetupServer();