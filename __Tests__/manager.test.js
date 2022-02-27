const manager = require('../lib/manager.js');

// jest.mock('../lib/manager.js')
test('manager list', () => {
    expect(manager.name);
    expect(manager.officenumber);
    expect(manager.department);
}
);