const Intern = require('../lib/Intern');
const intern = new Intern('angela', '071697', 'angelajaume.m@gmail.com', 'New York');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('angela');
    expect(intern.id).toBe('071697');
    expect(intern.email).toBe('angelajaume.m@gmail.com');
    expect(intern.school).toBe('New York');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('angela');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('071697');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('angelajaume.m@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('New York');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});