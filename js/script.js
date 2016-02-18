$(document).ready(function(){

$('.btn-quiz-start').click(function() {
  $('.start-quiz, .quiz, .quiz-control').toggle();
  selectAnswer();
});

var questions = [{
    question: "For the best chance of survival, who do you rely on most to dig you out of the snow?",
    answers: ["Trained avalanche dogs", "Organized search and rescue", "Yourself", "Your partners"],
    num: 0,
    correct: "four",
    fact: "An avalanche victim only has 15 minutes for a good chance to be recovered alive. The best chance for survival is to rely on nearby partners."
  },
  {
    question: "Almost all dangerous slab avalanches occur on slopes that have what steepness?",
    answers: ["Less than 30 degrees", "35 to 45 degrees", "45 to 55 degrees", "More than 55 degrees"],
    num: 1,
    correct: "two",
    fact: "When you’re judging the risk of avalanche terrain, the most important factor is slope steepness. Using an slope meter allows you to measure slope angle and aspect."
  },
  {
    question: "When a victim is buried, CO2 can build up around their mouth. Once buried, approximately how many minutes does the victim have to survive?",
    answers: ["10 minutes", "5 minutes", "30 minutes", "15 minutes"],
    num: 2,
    correct: "four",
    fact: "One proven technique to avoid this problem is a device called the Avalung. By using this device, a victim can greatly increase their chances of survival."
  },
  {
    question: "What type of avalanche accounts for nearly all avalanche deaths in North America?",
    answers: ["Wet avalanches", "Slab avalanches", "Loose snow avalanches", "Ice and cornice fall avalanches"],
    num: 3,
    correct: "two",
    fact: "A typical slab is about half the size of a football field, about one to two feet (30-60 cm) deep, and usually reaches speeds of 20 mph (32 km/h) within the first three seconds, quickly accelerating to around 80 mph (128 km/h)."
  },
  {
    question: "What are the three basic pieces of avalanche safety equipment you need before going into the backcountry?",
    answers: ["Avalanche cord, snorkel, and phone", "Avalanche goggles, slope meter, and snow study kit", "Avalanche beacon, shovel, and probe", "Search and rescue dog, probe, and avalanche baloon"],
    num: 4,
    correct: "three",
    fact: "The chance of survival in an avalanche significantly improves if you and your friends carry transceivers and gear and know how to use this equipment properly."
  }];
  
// Global variables
  var numCorrect = 0;
  var numQuestion = 0;
  var validated = false;
  var chosenAnswer = null;
  var correctAnswer = null;
  
  
// Selected answer function
function selectAnswer() {
  $('.quiz').on('click','#one, #two, #three, #four', function() {
    chosenAnswer = $(this).attr('id');
    correctAnswer = questions[numQuestion].correct;
    // Change color of divs according to answer
    if (chosenAnswer != null) {
      answered();
    }
  })
};

// User click next question
  $('.btn-next-question').click(function() {
      validate();
// Alert message if answer has not been chosen when button clicked
      if (validated == true){
        console.log('validated');
        numQuestion += 1;
        nextQuestion();
      } else  {
        console.log("false");
        alert("Please choose an answer");
      }
      $('#' + chosenAnswer).css('background-color', 'rgba(64,179,223,0.75)');
      $('#' + correctAnswer).css('background-color', 'rgba(64,179,223,0.75)');
// Reset validation variables
      chosenAnswer = null;
      newId = "";
      validated = false;
  });

// Determine if answer has been selected
  function validate() {
    if (chosenAnswer != null) {
      validated = true;
    }
  return;
  };

function answered() {
  if (chosenAnswer == correctAnswer) {
      $('#' + correctAnswer).css('background-color', 'rgba(116,171,0,0.75)');
      numCorrect += 1;
    } else {
      $('#' + chosenAnswer).css('background-color', 'rgba(205,18,49,0.75)');
      $('#' + correctAnswer).css('background-color', 'rgba(116,171,0,0.75)');
    }
    
    // Update score and fade-in fact
    $('.score').text(numCorrect);
    $('.facts').fadeIn();
};

// Reset quiz and display new question and answers
  function nextQuestion() {
    if (numQuestion < 5) {
      var currentQuestionNum = numQuestion + 1;
      $('.current-question').text(currentQuestionNum);
      $('.question').text("");
      $('#answer-1, #answer-2, #answer-3, #answer-4').text("")
      $('.facts').toggle();
      var newQuestion = questions[numQuestion].question;
      $('.question').text(newQuestion);
      var answerOne = questions[numQuestion].answers[0];
      var answerTwo = questions[numQuestion].answers[1];
      var answerThree = questions[numQuestion].answers[2];
      var answerFour = questions[numQuestion].answers[3];
      $('#answer-1').text(answerOne);
      $('#answer-2').text(answerTwo);
      $('#answer-3').text(answerThree);
      $('#answer-4').text(answerFour);
      var newFact = questions[numQuestion].fact;
      $('.facts-container').text(newFact);
    } else {
      $('.button-flat-primary').css('background','#74AB00');
      $('.btn-next-question').text("Quiz Complete!");
      $('.btn-next-question').on('click', function() {
      $(this).prop('disabled', true);
      });
    }
  }



}());