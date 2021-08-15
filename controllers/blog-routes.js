const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
	try {
		const dbPostData = await Post.findAll({
			include: User,
		});

		const posts = dbPostData.map((post) => post.get({ plain: true }));

		console.log(posts);
		res.render('blog', {
			posts,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/dashboard', withAuth, async (req, res) => {
	console.log(req.session);
	try {
		const dbPostData = await Post.findAll({
			include: User,
			where: {
				user_id: req.session.user_id,
			},
		});

		const posts = dbPostData.map((post) => post.get({ plain: true }));

		console.log(posts);
		res.render('dashboard', {
			posts,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/');
		return;
	}
	res.render('login');
});

router.get('/signup', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/');
		return;
	}
	res.render('signup');
});

module.exports = router;
