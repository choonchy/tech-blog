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
		content:
			'This is my third blog post, I hope you like it because seeding databases sure can be lame sometimes',
		user_id: '1',
	},
	{
		title: 'JSON is so good',
		content:
			"Why oh why do I love it so much? It's just so beautiful. I love you JSON!!!",
		user_id: '4',
	},
	{
		title: 'My name is melons',
		content: 'hi my name is melons i hope you like my posts xd',
		user_id: '2',
	},
	{
		title: 'I still love JSON :D',
		content:
			'In case you thought I didnt like JSON anymore, im just here to tell you I do hehe',
		user_id: '4',
	},
	{
		title: 'im giving up',
		content:
			'i ran out of original ideas so here some lorem ipsum for the rest',
		user_id: '1',
	},
	{
		title: 'Lorem Ipsum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u',
		user_id: '3',
	},
	{
		title: 'Lorem Ipsum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
		user_id: '3',
	},
	{
		title: 'Lorem Ipsum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
		user_id: '4',
	},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
