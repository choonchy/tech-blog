const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
	try {
		const dbPostData = await Post.findAll({
			include: User,
			order: [['createdAt', 'DESC']],
		});

		const posts = dbPostData.map((post) => post.get({ plain: true }));

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
	try {
		const dbPostData = await Post.findAll({
			include: User,
			order: [['createdAt', 'DESC']],
			where: {
				user_id: req.session.user_id,
			},
		});

		const dbUserData = await User.findOne({
			where: {
				id: req.session.user_id,
			},
		});

		const posts = dbPostData.map((post) => post.get({ plain: true }));

		const user = dbUserData.get({ plain: true });

		console.log(posts);
		res.render('dashboard', {
			posts,
			user,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/new-post', withAuth, async (req, res) => {
	res.render('newpost', {
		logged_in: req.session.logged_in,
	});
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
