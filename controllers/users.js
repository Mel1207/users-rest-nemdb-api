import { v4 as uuidv4 } from "uuid";

let users = []

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()})

    res.send(`user with the username ${user.firstName} added to the database`)
}

export const getSingleUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id)

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter(user => user.id !== id)

    res.send(`user with an id of ${id} is deleted from the database`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const userUpdate = users.find(user => user.id === id)


    if(firstName) userUpdate.firstName = firstName

    if(lastName) userUpdate.lastName = lastName

    if(age) userUpdate.age = age

    res.send(`user with id: ${id} has been updated`)

}