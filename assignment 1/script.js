document.getElementById('generate-btn').addEventListener('click', () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const randomQuote = `${data.content} - ${data.author}`;
            document.getElementById('quote-text').textContent = randomQuote;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            document.getElementById('quote-text').textContent = 'Error fetching quote. Please try again.';
        });
});
