const loginHandler = async (e) => {
	e.preventDefault();
	console.log('Login submitted');

	const email = document.querySelector('#emailInput').value.trim();
	const password = document.querySelector('#passwordInput').value.trim();

	if (email && password) {
		const response = await fetch('/api/users/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/');
		} else {
			alert('Unable to log in. Please try again.');
		}
	}
};

document.querySelector('.login').addEventListener('submit', loginHandler);
