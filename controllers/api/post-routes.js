const router = require('express').Router();
const { Post } = require('../../models');

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

module.exports = router;
