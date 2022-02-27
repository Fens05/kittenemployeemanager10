const inquirer = require('inquirer');

    class Employee {
        constructor(name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email;
        };
   
        getName =  () =>{
            inquirer
                .prompt([
                    {
                        // inquirer - ask for employee's name
                        type: 'input',
                        name: 'name',
                        message: `Enter the Employee's name:`
                    }
                ])
                this.name = response.name;
    
                return this.name;
        };
    
        getId = () => {
         inquirer
                .prompt([
                    {
                        // inquirer - ask for employee's id
                        type: 'input',
                        name: 'id',
                        message: `Enter the Employee's id:`
                    }
                ])
                this.id = response.id;
    
                return this.id;
        };
    
        getEmail =  () => {
             inquirer
                .prompt([
                    {
                        // inquirer - ask for employee's email
                        type: 'input',
                        name: 'email',
                        message: `Enter the Employee's email:`
                    }
                ])
                this.email = response.email;
    
                return this.email;
        };
    
        getRole() {
            return 'Employee';
        };
        
    }
    
    module.exports = Employee;