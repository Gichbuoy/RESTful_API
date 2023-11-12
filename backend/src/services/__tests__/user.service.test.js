import test from 'ava';

import userService from '../user.service.js';

let sampleUser;

test.beforeEach(() => {
    sampleUser = {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        city: 'Nairobi',
        country: 'Kenya',
    };
});

test.afterEach(() => {
    if (userService.getUser(2)) {
        console.warn('Cleanup: user 2 is being removed.');
        userService.removeUser(2);
    }
});

test('must add a user', (t) => {
    const expectedId = 1;

    const user = userService.addUser(sampleUser);
    
    t.is(user.id, expectedId);
    t.deepEqual(user, {id: expectedId, ...sampleUser});
});


test('must retrieve a user', (t) => {
    const expectedId = 1;

    const user = userService.getUser(1);
    
    t.is(user.id, expectedId);
    t.deepEqual(user, {id: expectedId, ...sampleUser});
});


test('must get All users', (t) => {
    // create a second User
    userService.addUser(sampleUser);

    const users = userService.getAllUsers();
    
    t.deepEqual(users, [{id: 1, ...sampleUser}, {id: 2, ...sampleUser}]);
});


test('must update a user', (t) => {
    const userId = 1;

    const updatedDetails = {
        name: 'Alexx Gich',
        email: 'alexx@gmail.com',
        city: 'Mombasa',
        country: 'Kenya',
    };

    const user = userService.updateUser(userId, updatedDetails);
    
    t.is(user.id, userId);
    t.deepEqual(user, {id: userId, ...updatedDetails});
});

test('must delete a user', (t) => {
    const userId = 1;

    const expected = userService.removeUser(userId);
    
    t.is(expected, undefined);

    // Trying to retrive a removed user should return undefined
    const user = userService.getUser(userId);
    t.is(user, undefined);
});