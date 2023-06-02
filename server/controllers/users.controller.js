let usersModel = require('../models/users.model');
// 

function getAllUsers(req, res) {
    res.status(200).json(usersModel);
    
}

function changePassword(req, res) {
    /* 
        This destructured variable declartion is equivalent to this:

        const username = req.body.username
        const password = req.body.password 
    */
    const { email, password } = req.body; // Input from postman

    // constant variables to hold messages
    const USER_NOT_FOUND = 'User does not exist';
    const PASSWORD_IS_EMPTY = 'Password cannot be empty';
    const PASSWORD_UPDATED_MSG = username => `User ${username}'s password has been updated`;
    
    // finds the username that matches the username supplied from POSTMAN input.
    const user = usersModel.find(user => user.username === username);
    
    if (user && password) {
        user.password = password;
        return res.send(PASSWORD_UPDATED_MSG(username));
    } else {
        return !password ? res.send(PASSWORD_IS_EMPTY) : res.send(USER_NOT_FOUND);
    }
}

function addUser(req, res) {
    // destructured the body from the request

    const { businessName, firstName, lastName, userName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(200).json({ status: false, errorName: 'confirmPassword', message: 'Password does not match' });
    }

    if (!email) {
        return res.status(200).json({ status: false, errorName: 'email', message: 'Email cannot be empty' }); 
    } else if (!password) {
        return res.status(200).json({ status: false, errorName: 'password', message: 'Password cannot be empty' });
    } else if (!firstName) {
        return res.status(200).json({ status: false, errorName: 'firstName', message: 'First name cannot be empty' });
    } else if (!lastName) {
        return res.status(200).json({ status: false, errorName: 'lastName', message: 'Last name cannot be empty' });
    }
    
      
    const duplicateEmailAndUsername = usersModel.find(user => user.email === email || user.userName === userName);
    
    if (!duplicateEmailAndUsername ) {
        console.log(usersModel);


        usersModel.push({ businessName, firstName, lastName, userName, email, password, confirmPassword });
        res.status(200).json({ status: true, message: 'User successfully registered' });
        
    } else {
        return res.status(200).json({ message: 'Username or Email already exists' });
    }
}

console.log(usersModel);
function login(req, res) {
    /* 
        This variable is equivalent to:
        req.body.email and req.body.password

        const email = req.body.email;
        const password = req.body.password;
    */
    const { userName, password } = req.body;

    const user = usersModel.find((user) => user.userName === userName && user.password === password);

    if (user) {
        res.status(200).json({
            status: true,
            message: 'Login Successfull'
        });
    } else {
        res.status(200).json({
            status: false,
            message: 'Login failed, wrong credentials'
        })
    }
}


module.exports = {
    getAllUsers,
    changePassword,
    addUser,
    login
};