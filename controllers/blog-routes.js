const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
	try {
		const dbPostData = await Post.findAll();

		const posts = dbPostData.map((post) => post.get({ plain: true }));

		res.render('blog', {
			posts,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
