function showLetter() {
    const letter = document.getElementById('letter');
    letter.style.display = 'block';
    letter.style.backgroundColor = 'sagegreen'; // Added line to change background color
    document.querySelector('.heart').style.display = 'none';
    document.querySelector('.message').style.display = 'none';
}
