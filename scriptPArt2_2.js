let selectedCard = null; // Variable to keep track of the selected card

// Function to load course content
function loadCourse(course) {
  console.log("Selected course:", course); // Debugging line

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
  let content = ''; // Initialize content variable

  // Determine content based on selected course
  switch (course) {
      case '1':
          content = `
              <h1><strong>Watch Video:</strong></h1>
              <video width="560" height="315" controls>
                  <source src="./VD1.mp4" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
          `;
          break;
      case '2':
          content = `
              <h1><strong>Watch Video:</strong></h1>
              <video width="560" height="315" controls>
                  <source src="./VD2.mp4" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
              <h2>Quiz</h2>
              <div class="box quiz">
                <div class="header quiz">
                    <span>Score: <span id="score">0</span></span>
                    <span id="countdown">0</span>
                </div>
                <div class="footer_quiz">
                <a class="btn1" id="startQuiz">Start</a>
                </div>
            </div>
          `;
          break;
      case '3':
          content = `
              <h1><strong>Watch Video:</strong></h1>
              <video width="560" height="315" controls>
                  <source src="./VD3.mp4" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
          `;
          break;
      default:
          content = '<h2>Select a course to see the content</h2>';
  }

  // Update the course content section
  document.getElementById('courseContent').innerHTML = content;

  // Add event listener for the Start button if course 1 is selected
if (course === '2') {
  document.getElementById('startQuiz').addEventListener('click', showQuiz);
}
}

// Function to show the quiz
function showQuiz() {
const quizContent = `
  <h2>Quiz</h2>
  <div class="box quiz">
      <div class="header quiz">
          <span>Score: <span id="score">0</span></span>
          <span id="countdown">0</span>
      </div>
      <div class="body quiz">
          <div class="quiz_set active">
              <h4>To create a form, we use the tag <code>&lt;form&gt;</code>.</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a1" valid="valid">
                  <span>True</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a1">
                  <span>False</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>The <code>&lt;form&gt;</code> tag is the only necessary tag to get the user's inputs.</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a2">
                  <span>True</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a2" valid="valid">
                  <span>False</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>Form is a way to display data for users.</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a3">
                  <span>True</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a3" valid="valid">
                  <span>False</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>Ordered list type values include: circle, disc, and square.</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a4">
                  <span>True</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a4" valid="valid">
                  <span>False</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>Each element of the list is represented with</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a5">
                  <span>il</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a5" valid="valid">
                  <span>li</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a5">
                  <span>ul</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>Ordered lists are represented by:</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a6">
                  <span>on</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a6">
                  <span>oi</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a6" valid="valid">
                  <span>ol</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a6">
                  <span>oli</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>Unordered lists are represented by:</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a7">
                  <span>ol</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a7">
                  <span>un</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a7" valid="valid">
                  <span>ul</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a7">
                  <span>ui</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>The src attribute in the video tag replaces the <code>&lt;source&gt;</code> tag.</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a8" valid="valid">
                  <span>True</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a8">
                  <span>False</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>The controls attribute:</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a9">
                  <span>allows you to specify alternative audio files which the browser can choose from.</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a9" valid="valid">
                  <span>adds audio controls, like play, pause, and volume control.</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>Why do we use local links?</h4>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a10" valid="valid">
                  <span>To allow users to navigate in the same web page</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a10">
                  <span>To navigate between different web pages</span>
              </div>
              <div class="quiz_ans_rows">
                  <input type="radio" name="a10" valid="valid">
                  <span>To navigate without using the internet</span>
              </div>
          </div>
          <div class="quiz_set">
              <h4>Your total score <span id="totalScore">0</span> out of 100</h4>
          </div>
      </div>
      <div class="footer_quiz">
          <span class="btn1" id="skip">Skip</span>
      </div>
  </div>
`;

// Update the course content section with the quiz
document.getElementById('courseContent').innerHTML = quizContent;

var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 10;
var quiz_set = document.querySelectorAll('.quiz_set');
var quiz_ans_rows = document.querySelectorAll('.quiz_set .quiz_ans_rows input');

  // Function to handle the skip button click
  skip.addEventListener('click', function() {
    step();
    resetCountdown();
});

quiz_ans_rows.forEach(function(quiz_ans_rowsSingle) {
    quiz_ans_rowsSingle.addEventListener('click', function() {
        setTimeout(function() {
            step();
            resetCountdown();
        }, 500);

        let valid = this.getAttribute("valid");
        if (valid === "valid") {
            scoreCount += 10;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }
    });
});

function step() {
    if (count < quiz_set.length - 1) {
        count += 1;
        for (let i = 0; i < quiz_set.length; i++) {
            quiz_set[i].className = 'quiz_set'; 
        }
        quiz_set[count].className = 'quiz_set active'; 
        resetCountdown();
    } else {
      skip.style.display = 'none';
      clearInterval(durationTime);
      countdown.innerHTML = 0; 
  }
}

function resetCountdown() {
    duration = 10; 
    countdown.innerHTML = duration; 
}

let durationTime = setInterval(function() {
    if (duration > 0) {
        duration -= 1;
        countdown.innerHTML = duration;
    } else {
        step();
    }
}, 1000);
}