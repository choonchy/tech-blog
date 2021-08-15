const postHandler = async (e) => {
	e.preventDefault();

	const title = document.querySelector('#post-title').value.trim();
	const content = document.querySelector('#post-content').value.trim();

	if (title && content) {
		const response = await fetch('/api/posts/new-post', {
			method: 'POST',
			body: JSON.stringify({ title, content }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to post');
		}
	}
};

document.querySelector('.post-form').addEventListener('submit', postHandler);
