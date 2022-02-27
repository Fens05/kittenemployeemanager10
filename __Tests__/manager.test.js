
const Manager = require('../lib/Manager.js');

test('creates office number object', () => {
    const manager = new Manager('Molly Fenton', 'm567', 'm.f@gml.com', '', '1234');

    expect(manager.office).toBeDefined();
});

test('set role to "Manager"', () => {
    const manager = new Manager('Molly Fenton', 'm567', 'm.f@gml.com', 'Manager', '1234');

    expect(manager.role).toEqual('Manager');
});