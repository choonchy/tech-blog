const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
	try {
		const userData = await User.findOne({ where: { email: req.body.email } });

		console.log(userData);

		if (!userData) {
			res.status(400).json({ message: 'Incorrect email or password.' });
			return;
		}

		const validPassword = await userData.checkPassword(req.body.password);

		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect email or password.' });
			return;
		}

		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.json({ user: userData, message: 'Logged in successfully!' });
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

router.post('/logout', (req, res) => {
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

router.post('/signup', async (req, res) => {
	try {
		const userData = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});

		console.log(userData);

		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.json({ user: userData, message: 'Logged in successfully!' });
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
