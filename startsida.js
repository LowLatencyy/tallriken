document.addEventListener('DOMContentLoaded', function () {
    var videos = [
        "images/videos/videos-startsida/dagsfornymat.mp4",
        "images/videos/videos-startsida/musslorkokar.mp4",
        "images/videos/videos-startsida/pastapincett.mp4",
        "images/videos/videos-startsida/pizza1.mp4",
        "images/videos/videos-startsida/runtmatbord1.mp4",
        "images/videos/videos-startsida/pizzamozzarella.mp4"
        // Lägg till alla videor upp till 25

    ];

    var videoElement = document.getElementById('randomVideo');
    var randomIndex = Math.floor(Math.random() * videos.length); // Slumpar ett index
    var sourceElement = document.createElement('source');

    sourceElement.setAttribute('src', videos[randomIndex]);
    sourceElement.setAttribute('type', 'video/mp4');
    videoElement.appendChild(sourceElement);

    videoElement.load(); // Ladda om videospelaren med den nya källan
});
