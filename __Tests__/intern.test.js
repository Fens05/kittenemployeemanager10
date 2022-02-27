const intern = require('../lib/intern.js');

test ('intern list', () => {
    expect(intern.name);
    expect(intern.school);
    expect(intern.email);
}
);