const { Post } = require('../models');

const postData = [
	{
		title: 'My first post!',
		content: 'This is my first blog post, I hope you like it!',
		user_id: '1',
	},
	{
		title: 'Another post',
		content: 'This is my second blog post, I hope you like it!',
		user_id: '1',
	},
	{
		title: 'Seeding databases is tedious',
		content: 'This is my first blog post, I hope you like it!',
		user_id: '1',
	},
	{
		title: 'My first post!',
		content: 'This is my first blog post, I hope you like it!',
		user_id: '1',
	},
	{
		title: 'My first post!',
		content: 'This is my first blog post, I hope you like it!',
		user_id: '1',
	},
	{
		title: 'My first post!',
		content: 'This is my first blog post, I hope you like it!',
		user_id: '1',
	},
	{
		title: 'My first post!',
		content: 'This is my first blog post, I hope you like it!',
		user_id: '1',
	},
	{
		title: 'My first post!',
		content: 'This is my first blog post, I hope you like it!',
		user_id: '1',
	},
	{
		title: 'My first post!',
		content: 'This is my first blog post, I hope you like it!',
		user_id: '1',
	},
	{
		title: 'My first post!',
		content: 'This is my first blog post, I hope you like it!',
		user_id: '1',
	},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
