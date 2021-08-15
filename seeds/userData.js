const { User } = require('../models');

const userData = [
	{
		username: 'choonchy',
		email: 'thomas.chappell@outlook.com',
		password: 'password123',
	},
	{
		username: 'melons',
		email: 'melons@email.com',
		password: 'password123',
	},
	{
		username: 'guitardude',
		email: 'guitar@email.com',
		password: 'password123',
	},
	{
		username: 'iLoveJSON',
		email: 'jsonluvr@hotmail.com',
		password: 'password123',
	},
];

const seedUsers = () =>
	User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});

module.exports = seedUsers;
