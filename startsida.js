document.addEventListener('DOMContentLoaded', function () {
    var videos = [
        "images/videos/videos-startsida/gruntmatbord1.mp4",
        "images/videos/videos-startsida/musslorkokar.mp4",
        "images/videos/videos-startsida/pastapincett.mp4",
        "images/videos/videos-startsida/pizza1.mp4",
        "images/videos/videos-startsida/pizzamozzarella.mp4"
    ];

    var videoElement = document.getElementById('randomVideo');
    videoElement.innerHTML = ''; // Tömmer tidigare satta sources

    var randomIndex = Math.floor(Math.random() * videos.length);
    console.log("Random index: " + randomIndex); // Loggar det slumpmässiga indexet

    var sourceElement = document.createElement('source');
    sourceElement.src = videos[randomIndex] + '?_=' + new Date().getTime(); // Lägg till en unik tidstämpel för varje request
    sourceElement.type = 'video/mp4';

    videoElement.appendChild(sourceElement);
    videoElement.load(); // Ladda om videospelaren med den nya källan
});
