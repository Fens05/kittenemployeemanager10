const Engineer = require('../lib/Engineer.js');

test('creates github object', () => {
    const engineer = new Engineer('Izzy Windsor', '1337', 'IWind@gml.com', '', 'itgal');

    expect(engineer.github).toBeDefined();
});

test('gets engineer github', () => {
    const engineer = new Engineer('Izzy Windsor', '1337', 'IWind@gml.com', '', 'itgal');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('set role to "Engineer"', () => {
    const engineer = new Engineer('Izzy Windsor', '1337', 'IWind@gml.com', '', 'itgal');

    expect(engineer.role).toEqual('Engineer');
});