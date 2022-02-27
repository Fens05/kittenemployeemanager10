// const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

test('engineer list', () => {
    expect(Engineer.name);
    expect(Engineer.id);
    expect(Engineer.email);
    expect(Engineer.gighub);
}
);

