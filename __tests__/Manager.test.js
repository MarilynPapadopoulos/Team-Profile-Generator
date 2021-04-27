const Manager = require('../lib/Manager.js');


describe ('manager tests', () => {
    const manager = new Manager('Manager','5090','manager@mail.com','555-555-5555');

    test('tests the office number property of manager', () => {
        expect(manager.number).toBe('555-555-5555');
        expect(manager.number).toHaveLength(12);
    })
    test('tests the get role method of manager', () => {
        expect(manager.getRole()).toBe('Manager');
    })


})