import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

let users = [];
// all routes here are starting with /users
router.get('/',(req,res) => {
    console.log(users);
    res.send(users);
});

router.post('/',(req,res) =>{
    const user = req.body;

    users.push({ ...user, id : uuidv4()});

    res.send(`${user.firstName} added to database\n Age : ${user.age}`);
});

router.get('/:id',(req,res) => { 
    const {id} = req.params;
    const foundUser = users.find((user) => user.id ==id);
    res.send(foundUser);
})

router.delete('/:id',(req,res) => {
    const {id} = req.params;

    users = users.filter((user) => user != id); //keep all users except who's id = specified
    res.send(`User with ID ${id} Deleted`);
});

router.patch('/:id',(req,res) =>{
    const {id} = req.params;
    const userToBeUpdated = users.find((user)=> user.id = id);
    const {firstName, lastName, age} = req.body;
    if(firstName)   userToBeUpdated.firstName = firstName;
    if(lastName)    userToBeUpdated.lastName = lastName;
    if(age)        userToBeUpdated.age = age; 
    
    res.send(`User with id ${id} has been updated`);
})

export default router; 