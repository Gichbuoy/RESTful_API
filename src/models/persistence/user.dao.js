import users from '../data/users.data.js';

const get = (userId) => users.find((user) => user.id === userId);
        

const getAll = () => users; // explicit return

const update = (userId, newDetails) => {
    let currentUser = null;
    let userIndex;

    users.map((user, index) => {
        if (user.id === userId) {
            currentUser = user;
            userIndex = index;
        }
    });

    // guard clause - leave function immediately with a return statement
    if (!currentUser) {
        return false;
    }

    const updatedUser = {
        ...currentUser,
        ...newDetails,
    };

    users.splice(userIndex, 1, updatedUser);

    return updatedUser;

};

const insert = (details) => {
    const newUser = { id: users.length + 1, ...details};
    users.push(newUser);

    return newUser;
}

const remove = (userId) => {
    const deleteUser = (user, index) => {
        // (?.) -> optional chaining
        if (user?.id === userId) {
            // removes the array element of found user
            users.splice(index, 1);
        }
    };

    return users.find(deleteUser);
}


export default {
    get,
    getAll,
    update,
    insert,
    remove
}