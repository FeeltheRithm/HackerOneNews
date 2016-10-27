$(function(){


$.get("https://hacker-news.firebaseio.com/v0/topstories").then(function(data){
	console.log(data);
});



// $.get("https://hacker-news.firebaseio.com/v0/item/" + topStory1 + "json?print=pretty").then(function(data){
// 	var topStory1 = (data[0]);
// });


});