const signupHandler = async (e) => {
	e.preventDefault();

	const email = document.querySelector('#emailInput').value.trim();
	const username = document.querySelector('#usernameInput').value.trim();
	const password = document.querySelector('#passwordInput').value.trim();

	if (email && username && password) {
		const response = await fetch('/api/users/signup', {
			method: 'POST',
			body: JSON.stringify({ email, username, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/login');
		} else {
			alert('Failed to sign up');
		}
	}
};

document.querySelector('.signup').addEventListener('submit', signupHandler);
