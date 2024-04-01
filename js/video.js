
const video = document.querySelector('.video');
let volumeSlider = document.getElementById('slider')
let volume = document.getElementById('volume')

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// elements- page load, initialize the video element and turn off autoplay and turn off looping
document.addEventListener('DOMContentLoaded', function() {
    // Turn off autoplay
    video.autoplay = false;
    // Turn off looping
    video.loop = false;
});

// elements- play button, play the video and update the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
    // play video
    video.play();
    // set volume information to the value of the volume slider
    volume.innerHTML = volumeSlider.value + '%';
});

// elements- pause button, pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    // pause the video
    video.pause();
});

// elements- slow down, slow down the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
	// slow down video speed by 10%
    video.playbackRate -= 0.1;
    console.log("New speed:", video.playbackRate);
});

// elements- speed up, increase the current video speed each time the button is clicked and log the new speed to the console
document.querySelector("#faster").addEventListener("click", function() {
	// speed up video speed by 10%
    video.playbackRate += 0.1;
    console.log("New speed:", video.playbackRate);
});

// elements- skip ahead, advance the current video by 10 seconds, if the video length has been exceeded go back to the start of the video
document.querySelector("#skip").addEventListener("click", function() {
	const videoDuration = video.duration
    // advance video time by 10 seconds
    video.currentTime += 10;
    // set video time to 0 if the current time is equal to the duration of the video
    if (video.currentTime == videoDuration) {
        video.currentTime = 0;
    }
    console.log("Current location:", video.currentTime);
});

// elements- mute, mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
    muteButton = document.getElementById('mute')
	if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
    }
});

// elements- volume slider, change the volume based on the slider and update the volume information
document.querySelector("#slider").addEventListener("input", function() {
    video.volume = volumeSlider.value / 100;
    volume.innerHTML = volumeSlider.value + '%';
});

// elements- styled, utilize the existing oldschool class on the video
document.querySelector("#vintage").addEventListener("click", function() {
    video.className += ' oldSchool'
});

// elements- original, remove the oldschool class from the video
document.querySelector("#orig").addEventListener("click", function() {
    video.className = 'video'
});