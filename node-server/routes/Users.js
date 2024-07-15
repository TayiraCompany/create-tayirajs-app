
const express = require('express');
const router = express.Router();

const users = {
    Hello: {
        "Age": "3133",
        "Email": "me_Hello@gmail.com",
        "Name": "Hello",
        "Password": "HelloWorld!@#",
        "Phone": "123456789",
        "Role": "Programmer",
    },
};

router.get('/getUsers', (req, res) => {
    res.status(200).send(users);
});

module.exports = router;
