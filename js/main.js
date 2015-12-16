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
			question: 'Exposure to sunlight helps a person improve his/her health because...',
			choices: ['the ultraviolet rays convert skin oil into Vitamin D',
				'resistance power increases', 'the infrared light kills bacteria in the body',
				'improving their mood'],
			picture: "http://i1308.photobucket.com/albums/s611/neelambika11/pic2_zpsld5xbzkq.png",
			correctAnswer: 0,
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
			question: 'Which country gave America the Statue of Liberty?',
			choices: ['Germany', 'England', 'Canada', 'France'],
			picture: "http://i1308.photobucket.com/albums/s611/neelambika11/pic4_zpsiijgvpm1.png",
			correctAnswer: 3,
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
			'<br><button id="Submit1" type="button" >next</button>';
			$("#answer").html(newAnswer);

        var newNumber = '<h1>You are on '+newCurrentQuestion+
        ' question out of '+quizQuestions.length +' questions<br>'+
        'Correctly:'+ correctAnswers +'| Incorrectly:' +incorrectAnswers+'</h1>';
             $('.number').html(newNumber);

         

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




 







