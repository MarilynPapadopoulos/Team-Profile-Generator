const Engineer = require('../lib/Engineer.js');

describe ('engineer tests', () => {
    const engineer = new Engineer('Engineer', '5000','engineer@mail.com', 'MarilynPapadopoulos');

    test('tests the GitHub of engineer', () => {
        expect(engineer.github).toBe('MarilynPapadopoulos');
        expect(typeof engineer.github).toBe('string');
        expect(engineer.getGithub()).toBe('MarilynPapadopoulos');
    })
    test('test get role method of engineer', () => {
        expect(engineer.getRole()).toBe('Engineer');
    })
})