const Engineer = require('../lib/Engineer');
const engineer = new Engineer('angela', '071697', 'angelajaume.m@gmail.com', 'angelajm6');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('angela');
    expect(engineer.id).toBe('071697');
    expect(engineer.email).toBe('angelajaume.m@gmail.com');
    expect(engineer.githubUsername).toBe('Angelajm6');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('angela');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('071697');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('angelajaume.m@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('Angelajm6');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});