const inquirer = require('inquirer');
const Manager = require('./lib/Manger.js');
const Engineer = require('./lib/Enginer.js');
const intern = require('./lib/Intern.js');
const fs = require( 'fs' );



const nextTeamEmpolyee = [ {
    type:' list',
    message: 'Would you like to add another team employee?',
    name: 'teamEmployee',
    choices:['Engineer', 'Intern', 'Done']

}
];

const manangerList = [ {
    type: 'input',
    message: 'What is the Mangers name?',
    name: 'name',
    vailidate: (input) => {
        if(input !== '' && !(/\d/.test(input))){
            return true;

        }
        return 'Enter name';
    },
    
        type: 'input',
		message: 'What is the mangers ID?',
		name: 'id',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Please enter an ID.';
        }
    },
    {
		type: 'input',
		message: 'What is the team manager\'s Email?',
		name: 'email',
		validate: ( input ) => {
			if( input !== '' && /@/.test( input ) ) {
				return true;
			}
			return 'Please enter a full valid Email.';
		}
	},
	{
		type: 'input',
		message: 'What is the mangers office number?',
		name: 'officeNumber',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Please enter an Office Number.';
		}
	}

];
const engineerList = [
    {
		type: 'input',
		message: 'What is this engineer\'s Name?',
		name: 'name',
		validate: ( input ) => {
			if( input !== '' && !( /\d/.test( input ) ) ) {
				return true;
			}
			return 'Please enter a name without numeric characters.';
		}
	},
	{
		type: 'input',
		message: 'What is this engineer\'s ID?',
		name: 'id',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Please enter an ID.';
		}
	},
	{
		type: 'input',
		message: 'What is this engineer\'s Email?',
		name: 'email',
		validate: ( input ) => {
			if( input !== '' && /@/.test( input ) ) {
				return true;
			}
			return 'Please enter a full valid Email.';
		}
	},
	{
		type: 'input',
		message: 'What is this engineer\'s GitHub Username?',
		name: 'github',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Please enter a GitHub Username.';
		}
	}
];

let teamEmpployees = [];


const askEngineerInfo = () => {
    return inquirer.prompt(engineerList)
    .then(( engineerAnswers)=> {
        teamEmpployees.push(new Engineer(engieneerAnseres));
        return askforNextTeamEmpolyee();
    });
};


