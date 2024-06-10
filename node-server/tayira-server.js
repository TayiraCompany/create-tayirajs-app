
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

const users = {
    "user1": {
        "id": 1,
        "name": "user1"
    },
    "user2": {
        "id": 2,
        "name": "user2"
    },
    "user3": {
        "id": 3,
        "name": "user3"
    },
    "user4": {
        "id": 4,
        "name": "user4"
    },
    "user5": {
        "id": 5,
        "name": "user5"
    },
    "user6": {
        "id": 6,
        "name": "user6"
    },
    "user7": {
        "id": 7,
        "name": "user7"
    },
    "user8": {
        "id": 8,
        "name": "user8"
    },
}

app.get('/getUsers', (req, res) => {
  res.status(200).send(users);
});

const HOST = "localhost";
const PORT =  5050;

app.listen(PORT,HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});