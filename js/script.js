document.addEventListener('DOMContentLoaded', function() {
    var introContainer = document.getElementById('introContainer');
    var introVideo = document.getElementById('introVideo');
    var mainContent = document.getElementById('mainContent');

    introVideo.addEventListener('ended', function() {
        introContainer.style.transform = 'translateY(-200%)';
        mainContent.style.display = 'block';
    });

    introVideo.addEventListener('timeupdate', function() {
        var stopTime = 4.3;
        if (introVideo.currentTime >= stopTime) {
            introVideo.pause();
            introVideo.currentTime = 0;
            introContainer.style.transform = 'translateY(-200%)';
            mainContent.style.display = 'block';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carousel');
    var profiles = carousel.getElementsByClassName('artist-profile');
    var currentIndex = 0;

    function showNextProfile() {
        profiles[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % profiles.length;
        profiles[currentIndex].classList.add('active');
    }

    // Set an interval to show the next profile every 3 seconds (3000 milliseconds)
    setInterval(showNextProfile, 5000);
});

// document.querySelector('.podcast').addEventListener('click', function() {
//     window.location.href = 'https://link-to-your-podcast.com';
// });
  
  document.querySelector('.survey').addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/forms/d/1zWukmoFKhErFdMv_W-xx1xvZdT5b4jdH1G7Aq0NSlb4/edit';
});

// Adding Modal JS here
// Get the modal
var modal = document.getElementById('podcastModal');

// Get the button that opens the modal
var btn = document.querySelector('.podcast');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Form submission
document.getElementById('podcastForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle form submission logic here
  // For example, you can send the form data to the server using AJAX.
});





