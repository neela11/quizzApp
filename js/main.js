$(document).ready(function () {
	$(".start").click(function () {
		$(".container").hide();
		$(".question1").fadeIn(1000);
		display();	
        //currentQuestion++;
		

	});
	var currentQuestion = 0;
	var newCurrentQuestion=currentQuestion+1;
    var correctAnswers=0;
    var incorrectAnswers=0;
	var quizQuestions = [
		{
			question: "Entomology is the science that studies...",
			choices: ['behavior of human beings',
				'insects', 'learning styles', 'the formation of rocks'],
			picture: "http://i1308.photobucket.com/albums/s611/neelambika11/pic1_zpspfe9s8wh.png",
			correctAnswer: 1,
			questionNum: 1
		},
		{
			question: 'How many keys are on a standard piano?',
			choices: ['44',	'122', '66','88'],
			picture: "http://i1308.photobucket.com/albums/s611/neelambika11/Screenshot_3_zpsnyjxe3ec.png",
			correctAnswer: 3,
			questionNum: 2
		},
		{
			question: 'Which is the smallest ocean in the world?',
			choices: ['Arctic Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean'],
			picture: "http://i1308.photobucket.com/albums/s611/neelambika11/pic3_zps33k29dio.png",
			correctAnswer: 0,
			questionNum: 3
		},
		{
			question: "What is the rhino's horn made of ? ",
			choices: ['Hair', 'Skin', 'Bone', 'Something else'],
			picture: "http://i1308.photobucket.com/albums/s611/neelambika11/Screenshot_2_zpsdthlqcfd.png",
			correctAnswer: 0,
			questionNum: 4
		},
		{
			question: 'How many rings are on the Olympic flag?',
			choices: ['3', '4', '5', '6'],
			picture: "http://i1308.photobucket.com/albums/s611/neelambika11/pic5_zpsebqemd4r.png",
			correctAnswer: 2,
			questionNum: 5
		}
	]
	function display() {

		var newQuestion = '<h1>' +
			quizQuestions[currentQuestion].question + '</h1>';
		$("#question").html(newQuestion);
		var newImage = '<img src=' + quizQuestions[currentQuestion].picture + '>';
		$('#pic1').html(newImage);


		var newAnswer = '<input type="radio" class="input" id="first" name="option" value="one">' +
			quizQuestions[currentQuestion].choices[0] +
			'<br><input type="radio" id="second" class="input" name="option"  value="two">' +
			quizQuestions[currentQuestion].choices[1] +
			'<br><input type="radio" id="third" class="input" name="option"  value="three">' +
			quizQuestions[currentQuestion].choices[2] +
			'<br><input type="radio" id="fourth" class="input" name="option"  value="four">' +
			quizQuestions[currentQuestion].choices[3] +
			'<br><button id="Submit1" type="button" >Submit</button>';
			$("#answer").html(newAnswer);

        var newNumber = 'Questions '+newCurrentQuestion+
        '  of '+quizQuestions.length ;
        
             $('.number').html(newNumber);

         var newNumber1 ='Correct:'+ correctAnswers +' , Incorrect:' +incorrectAnswers;
             $('.number1').html(newNumber1);

	}
	/*Check for the answer equals to currectAnswer 
	and display correct message 
	else display wrong message and continue for next question*/




	$("#answer").on("click", "#Submit1", function () {
		var parrent = $("#answer");
		var answers = parrent.children(".input");

		//Let's go through any selected element
		for (var i = 0; i < answers.length; i++) {
			//Let's inspect if element is checked
			if (answers[i].checked) {
				//If yes inspect is checked element order number (i) equals to Correct answer
				if (i === quizQuestions[currentQuestion].correctAnswer) {
					//If yes, let's show correct message
					
					$("#correct").fadeIn(1000);
					correctAnswers++;
				}
				else {
					//If not - let's show wrong message
					 
					$(".wrong").fadeIn(1000);
					incorrectAnswers++;
				}
			}
		}
	});
	
	$("#continueCorrect").click(function(){
		nextQuestion();	

	});
	$("#continueWrong").click(function(){
		nextQuestion();	
	});

	function nextQuestion() {
		$("#correct").fadeOut(1000);
		$(".wrong").fadeOut(1000);
		
		//However, user must go on last question if there are existing some of them
		if (currentQuestion < quizQuestions.length-1) {
			currentQuestion++;
			newCurrentQuestion++;
			display();
		} else{
			//alert("I am done with all he question");
			 var finishMessage='Congratulations! You Completed your Quiz.<br>Correct Answers: '+
             correctAnswers +'<br> Wrong Answers:'+ incorrectAnswers;   
             $(".finish").html(finishMessage);
			 $(".finish").fadeIn(1000);
		}
		
	}


});




 







