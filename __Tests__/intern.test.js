const Intern = require('../lib/Intern.js');

test('creates school object', () => {
    const intern = new Intern('Idger Butters', 'i4r3', 'Ibuttersd@gml.com', '', 'Oxford');

    expect(intern.school).toBeDefined();
});

test('gets intern school', () => {
    const intern = new Intern('Idger Butters', 'i4r3', 'Ibuttersd@gml.com', '', 'Oxford');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('set role to "Intern"', () => {
    const intern = new Intern('Idger Butters', 'i4r3', 'Ibuttersd@gml.com', 'Intern', 'Oxford');
console.log(intern);
    expect(intern.role).toEqual('Intern');
});