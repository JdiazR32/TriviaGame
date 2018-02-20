var timer = 5;
var questions = [{
	question: "Furthest Planet from the Sun?",
	choices: ["Earth", "Mars", "Venus", "Pluto", "Neptune"],
	answer: "Neptune"
}, {
	question: "Largest Planet in our solar system",
	choices: ["Jupiter", "Uranus", "Pluto", "Planet X"],
	answer: "Jupiter"
}]
var game = {
	correct: 0,
	incorrect:0,
}
var intervalId;
$(document).ready(function () {
	$("#start").on("click", function () {
		$("#start").hide();
		$("#timer").html("<h2>" + timer);
		beginQuestion();
		run();
	})
	function run() {
		clearInterval(intervalId);
		intervalId = setInterval(decrement, 1000);
	}
	function decrement() {
		timer--;
		$("#timer").html("<h2>" + timer);
		if (timer === 0) {
			done();
			stop();
// alert("Time Up!");
		}
	}

	function stop() {
		clearInterval(intervalId);
	}
	function beginQuestion(){
		$.each(questions, function (i) {
		$("#question").append("<h2>"+questions[i].question);
			for( var j = 0; j < questions[i].choices.length; j++){
				$("#question").append('<input type="radio" name="choice' + i + '"  value="' + questions[i].choices[j] +'" >' + questions[i].choices[j])
				console.log(questions[i].choices[j])
		}
	})
	$("#question").append("<br>"+'<button id="done">done</button>')
}
	function done(){
		$.each($("input[name='question-0']:checked"), function(){
			if ($(this).val() == questions[0].answer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
			console.log(this);
		})
	}


})