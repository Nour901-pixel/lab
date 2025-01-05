function toggleSubtopics(subject) {
  const subtopics = document.getElementById(`${subject}-subtopics`);
  if (subtopics.style.display === "none" || subtopics.style.display === "") {
      subtopics.style.display = "block";
  } else {
      subtopics.style.display = "none";
  }
}

let selectedCard = null; // Variable to keep track of the selected card

// Function to load course content
function loadCourse(course) {
    // Get all course cards
    const courseCards = document.querySelectorAll('.course-card');

    // Remove the selected class from all cards
    courseCards.forEach(card => {
    card.classList.remove('selected-course-card');
});

// Add the selected class to the clicked card
const clickedCard = event.currentTarget; // Get the clicked card
clickedCard.classList.add('selected-course-card');

// Load course content
let content = '';

// content for the "Travel" course (unit2)
if (course === 'travel') {
    content = `
        <h1><strong>Introduction:</strong></h1>
        <p>Whether it's a short trip, a long-haul flight, or an exciting excursion, traveling offers many benefits beyond mere entertainment.</p>
        <h2>Benefits of Traveling</h2>
        <div id="slideContainer">
            <button id='prev' class="sliderBtn">&lt;</button>
            <button id="next" class="sliderBtn">&gt;</button>
            <div class="slide show"><img src="./img/benefits1.jpg" alt="slide1" /></div>
            <div class="slide"><img src="./img/benefits2.jpg" alt="slide2" /></div>
            <div class="slide"><img src="./img/benefits3.jpg" alt="slide3" /></div>
            <div class="slide"><img src="./img/benefits4.jpg" alt="slide4" /></div>
            <div class="slide"><img src="./img/benefits5.jpg" alt="slide5" /></div>
            <div class="slide"><img src="./img/benefits6.jpg" alt="slide6" /></div>
            <div class="slide"><img src="./img/benefits7.jpg" alt="slide7" /></div>
            <div class="slide"><img src="./img/benefits8.jpg" alt="slide8" /></div>
            <div class="slide"><img src="./img/benefits9.jpg" alt="slide9" /></div>
            <div class="slide"><img src="./img/benefits10.jpg" alt="slide10" /></div>
            <div class="slide"><img src="./img/benefits11.jpg" alt="slide11" /></div>
            <div class="slide"><img src="./img/benefits12.jpg" alt="slide12" /></div>
            <div class="slide"><img src="./img/benefits13.jpg" alt="slide13" /></div>
            <div class="slide"><img src="./img/benefits14.jpg" alt="slide14" /></div>
        </div>
        <h2>Conclusion</h2>
        <p>Some people think that traveling is a waste of time and money; however, the rewards gained from travel far outweigh these perceived costs.</p>
        <h2>Exercise</h2>
        <p><strong>Write a short description for a leaflet about the following museum </strong></p>
        <ul style="list-style-type: disc;">
            <li>The American National Museum of Natural History</li>
            <li>One of the most captivating and enlightening museums in the world.</li>
        </ul> 
        <ul style="list-style-type: circle;">
            <li>Experience the beauty of invisible worlds.</li>
            <li>Discover breathtaking beauty.</li>
            <li>Mingle with more than 1,000 butterflies.</li>
            <li>Explore the world of insects.</li>
            <li>Ignite your curiosity through interactive exhibits.</li>
            <li>Immerse yourself in the wonders of our planet.</li>
        </ul>
        <p><strong>Watch Video</strong></p>
        <video width="560" height="315" controls>
            <source src="./VD.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
} else {
    content = '<h2>Select a course to see the content</h2>';
}

document.getElementById('courseContent').innerHTML = content;
    // Initialize the slideshow after loading content
    initializeSlideshow();
}

function initializeSlideshow() {
    let nextBtn = document.querySelector("#next");
    let prevBtn = document.querySelector("#prev");
    let slides = document.querySelectorAll(".slide");
    let changeSlide = 0;

    // Function to show the next slide
    nextBtn.addEventListener("click", function() {
        slides.forEach(function(slide, index) {
            if (slide.classList.contains("show")) {
                slide.classList.remove("show");
                changeSlide = index + 1; // Move to the next slide
            }
        });

        // Loop back to the first slide if at the end
        if (changeSlide < slides.length) {
            slides[changeSlide].classList.add("show");
        } else {
            changeSlide = 0;
            slides[changeSlide].classList.add("show");
        }
    });

    // Function to show the previous slide
    prevBtn.addEventListener('click', function() {
        slides.forEach(function(slide, index) {
            if (slide.classList.contains("show")) {
                slide.classList.remove("show");
                changeSlide = index - 1; // Move to the previous slide
            }
        });

        // Loop back to the last slide if at the beginning
        if (changeSlide >= 0) {
            slides[changeSlide].classList.add("show");
        } else {
            changeSlide = slides.length - 1;
            slides[changeSlide].classList.add("show");
        }
    });
}

document.getElementById('playButton').addEventListener('click', function() {
    const audio = document.getElementById('backgroundAudio');
    audio.play(); // Play the audio
    this.style.display = 'none'; // Hide the button after playing
});


// content for the "1" course (partie2 computer science)