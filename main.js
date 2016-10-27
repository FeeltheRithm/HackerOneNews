$(function(){

$.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(function(data){
	console.log(data[0]);
});



//("https://hacker-news.firebaseio.com/v0/item/" + topStory1 + "json?print=pretty");

});