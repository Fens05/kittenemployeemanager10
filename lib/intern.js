

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool = async () => {
        inquirer
            .prompt([
                {
                    // inquirer - ask for employee's school
                    type: 'input',
                    name: 'school',
                    message: `Enter the Employee's school:`
                }
            ])
            this.school = response.school;

            return this.school;
    };
}

module.exports = Intern;