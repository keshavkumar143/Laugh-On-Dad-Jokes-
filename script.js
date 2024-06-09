var a = document.getElementsByClassName('MainText')[0];
var b = document.getElementsByClassName('nextJoke')[0];

b.addEventListener('click', async function () {
    const jokeResponse = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeData = await jokeResponse.json();
    a.textContent = jokeData.joke;
});
