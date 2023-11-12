import test from 'ava';

import userService from '../user.service';

let sampleUser;

test.beforeEach(() => {
    sampleUser = {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        city: 'Nairobi',
        country: 'Kenya',
    };
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
    const expectedId = 1;

    const user = userService.getAllUsers();
    
    t.deepEqual(user[0], {id: expectedId, ...sampleUser});
});


test('must update a user', (t) => {
    const expectedId = 1;

    const updatedDetails = {
        name: 'Alexx Gich',
        email: 'alexx@gmail.com',
        city: 'Mombasa',
        country: 'Kenya',
    };

    const user = userService.updateUser(1, updatedDetails);
    
    t.is(user.id, expectedId);
    t.deepEqual(user, {id: expectedId, ...updatedDetails});
});

test('must delete a user', (t) => {
    const userId = 1;
    
    const expected = userService.removeUser(userId);
    
    t.is(expected, undefined);

    // Trying to retrive a removed user should return undefined
    const user = userService.getUser(1);
    t.is(user, undefined);
});