$(document).ready(function(){
$(".start").click(function(){
		$(".container").hide();
		$(".question1").fadeIn(1000);
		display();	
        //currentQuestion++;
		

});		
var currentQuestion =0;

var quizQuestions = [
{
			question: "Entomology is the science that studies...",
			choices: ['behavior of human beings', 
			'insects', 'learning styles', 'the formation of rocks'],
			picture:"http://i1308.photobucket.com/albums/s611/neelambika11/pic1_zpspfe9s8wh.png",
			correctAnswer: 1,
			questionNum:0
},
{
			question: 'Exposure to sunlight helps a person improve his/her health because...',
			choices: ['the ultraviolet rays convert skin oil into Vitamin D',
			 'resistance power increases', 'the infrared light kills bacteria in the body',
			  'improving their mood'],
			  picture:"http://i1308.photobucket.com/albums/s611/neelambika11/pic2_zpsld5xbzkq.png",
			correctAnswer: 0,
			questionNum:1
},
{
			question: 'Which is the smallest ocean in the world?',
			choices: ['Arctic Ocean','Atlantic Ocean', 'Pacific Ocean','Indian Ocean'],
			picture:"http://i1308.photobucket.com/albums/s611/neelambika11/pic3_zps33k29dio.png",
			correctAnswer: 0,
			questionNum:2
},
{
			question: 'Which country gave America the Statue of Liberty?',
			choices: ['Germany','England', 'Canada','France'],
			picture:"http://i1308.photobucket.com/albums/s611/neelambika11/pic4_zpsiijgvpm1.png",
			correctAnswer: 3,
			questionNum:3
},
{
			question: 'How many rings are on the Olympic flag?',
			choices: ['3','4', '5','6'],
			picture:"http://i1308.photobucket.com/albums/s611/neelambika11/pic5_zpsebqemd4r.png",
			correctAnswer: 2,
			questionNum:4
}
]
 function display(){
 
var newQuestion = '<h1>'+
quizQuestions[currentQuestion].question+'</h1>';
   $("#question").html(newQuestion); 
var newImage = '<img src='+quizQuestions[currentQuestion].picture+'>';
$('#pic1').html(newImage);


var newAnswer = '<input type="radio" class="input" id="first" name="option" value="one">'+
quizQuestions[currentQuestion].choices[0]+
'<br><input type="radio" id="second" class="input" name="option"  value="two">'+
 quizQuestions[currentQuestion].choices[1]+
 '<br><input type="radio" id="third" class="input" name="option"  value="three">'+
 quizQuestions[currentQuestion].choices[2]+
 '<br><input type="radio" id="fourth" class="input" name="option"  value="four">'+
 quizQuestions[currentQuestion].choices[3]+
 '<br><button id="Submit1" type="button" >next</button>';

 $("#answer").html(newAnswer); 


  
 }
  /*Check for the answer equals to currectAnswer and display correct message else display wrong message and continue for next question*/
 

  
  	
  	$("#Submit1").on("click", function(){
  		var parrent=$("#answer");
  		var answers=parrent.children(".input");

  		alert("hi");
  		$(".question1").hide();
  		$("#correct").show();
    //alert("The paragraph was clicked.");
});
  
  
});




 







