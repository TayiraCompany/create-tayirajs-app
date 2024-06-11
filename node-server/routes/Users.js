
const express = require('express');
const router = express.Router();

const users = {
    Mohammed: {
        "Age": "13",
        "Email": "Mohammed@gmail.com",
        "Name": "Mohammed",
        "Password": "HelloWorld!@#",
        "Phone": "123456789",
        "Role": "Owner",
    },
    Remas: {
        "Age": "12",
        "Email": "Remas@gmail.com",
        "Name": "Remas",
        "Password": "#@!dlroWolleH",
        "Phone": "9876543210",
        "Role": "CoOwner",
    }
};

router.get('/getUsers', (req, res) => {
    res.status(200).send(users);
});

module.exports = router;
