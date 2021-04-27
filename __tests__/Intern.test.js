const Intern = require('../lib/Intern.js');


describe ('intern tests', () => {
    const intern = new Intern ('Intern', '5050', 'intern@mail','UofW');

    test('tests the school property of intern', () => {
        expect(intern.school).toBe('UofW');
        expect(typeof intern.school).toBe('string');
    })
    test('tests get role method of intern', () => {
        expect(intern.getRole()).toBe('Intern');
    })
})