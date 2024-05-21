document.addEventListener('DOMContentLoaded', () => {
    const ginLamp = document.getElementById('ginLamp');
    const supportButton = document.getElementById('supportButton');
    const adSection = document.getElementById('adSection');

    supportButton.addEventListener('click', () => {
        adSection.classList.toggle('hidden');
        alert('Thank you for your support! Enjoy the ad.');
    });

    ginLamp.addEventListener('click', () => {
        adSection.classList.toggle('hidden');
        alert('Thank you for your support! Enjoy the ad.');
    });
});
