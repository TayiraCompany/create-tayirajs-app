
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        exposedHeaders: ['Content-Type', 'Authorization'],
        optionsSuccessStatus: 200,
    }
));

const usersRouter = require('./routes/Users');

app.use('/', usersRouter);

const HOST = "localhost";
const PORT =  5050;

app.listen(PORT,HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});