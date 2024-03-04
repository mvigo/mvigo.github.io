document.getElementById('continueButton').addEventListener('click', function() {
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
});

// Existing life clock script goes here


document.getElementById('lifeClockForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    const dob = document.getElementById('dob').value;
    const resultElement = document.getElementById('result');
    const lifeExpectancy = 70; // Average life expectancy, adjust as needed

    if (dob) {
        const currentTime = new Date();
        const dobTime = new Date(dob);
        const age = (currentTime - dobTime) / (1000 * 60 * 60 * 24 * 365.25); // Convert age from milliseconds to years
        const lifePercentage = (age / lifeExpectancy) * 100;
        const hoursInLifeDay = lifePercentage * 24 / 100;
        const hours = Math.floor(hoursInLifeDay);
        const minutes = Math.floor((hoursInLifeDay - hours) * 60);

        resultElement.textContent = `It's currently ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} in your life.`;
    } else {
        resultElement.textContent = 'Please enter a valid date of birth.';
    }
});
