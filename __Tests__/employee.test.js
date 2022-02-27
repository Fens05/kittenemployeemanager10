
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Hamish Meyer','n38376', 'hamishm@gml.com');

});

test('gets employee name', () => {
    const employee = new Employee('Hamish Meyer','n38376', 'hamishm@gml.com');

    expect(employee.getName()).toEqual(expect.stringContaining());
});

test('gets employee id', () => {
    const employee = new Employee('Hamish Meyer','n38376', 'hamishm@gml.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Hamish Meyer','n38376', 'hamishm@gml.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets the employee role', () => {
    const employee = new Employee('Hamish Meyer','n38376', 'Employee','hamishm@gml.com');

    expect(employee.role).toEqual('Employee');
});