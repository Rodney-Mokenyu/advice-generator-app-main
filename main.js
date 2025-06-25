

document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    console.log('DOM fully loaded and parsed');

    // get DOM elements
    const adviceID = document.getElementById('advice-id');
    const adviceText = document.getElementById('advice-text');
    const diceButton = document.getElementById('dice-button');

    // Function to fetch advice
    async function fetchAdvice() {
        try {
            const response = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            adviceID.textContent = `${data.slip.id}`;
            adviceText.textContent = `"${data.slip.advice}"`;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    // Initial fetch
    fetchAdvice();

    // Event listener for dice button click
    diceButton.addEventListener('click', fetchAdvice);
});