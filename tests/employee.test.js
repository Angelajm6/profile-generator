const Employee = require('../lib/Employee');
const employee = new Employee('angela', '071696', 'angelajaume.m@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('angela');
    expect(employee.id).toBe('071697');
    expect(employee.email).toBe('angelajaume.m@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('angela');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('071697');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('angelajaume.m@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});