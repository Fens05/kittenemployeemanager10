

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber = async () => {
        // return this.name;
      inquirer
            .prompt([
                {
                    // inquirer - ask for employee's office number
                    type: 'input',
                    name: 'officeNumber',
                    message: `Enter the Employee's office number:`
                }
            ])
            this.officeNumber = response.officeNumber;

            return this.officeNumber;
    };

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;