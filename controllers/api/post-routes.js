const router = require('express').Router();
const { Post, User } = require('../../models');
const { post } = require('../blog-routes');

router.post('/new-post', async (req, res) => {
	try {
		const postData = await Post.create({
			title: req.body.title,
			content: req.body.content,
			user_id: req.session.user_id,
		});

		console.log(postData);
		res.json({ post: postData, message: 'Posted successfully!' });
	} catch (err) {
		res.status(400).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const postData = await Post.findOne({
			include: User,
			where: {
				id: req.params.id,
			},
		});

		const post = postData.get({ plain: true });

		console.log(postData);

		res.render('post', {
			post,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
