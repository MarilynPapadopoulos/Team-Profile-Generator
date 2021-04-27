const Employee = require('..lib/Employee.js');
const { TestScheduler } = require('@jest/core');


describe('employee tests', ()=> {
    const employee = new Employee ('Marilyn', '5030', 'marilyn@mail.com');
    test('tests the name propery of employee', () => {
        expect(employee.name).toBe('Marilyn');
        expect(typeof employee.name).toBe('string');
        expect(employee.getName()).toBe('Marilyn');
    })
    test('tests the name propery of employee', () => {
        expect(employee.id).toBe('5030');
        expect(typeof employee.id).toBe('string');
        expect(employee.getId()).toBe('5030')
    })
    test('tests the name propery of employee', () => {
        expect(employee.email).toBe('marilyn@mail.com');
        expect(typeof employee.email).toBe('string');
        expect(employee.getMail()).toBe('marilyn@mail.com')
    })
    test('test if get role is returns employee', () => {
        expect(employee.getRole().toBe('Employee'));
    })
});
