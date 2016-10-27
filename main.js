
//Get hacker news API to display top ten stories. 
$(function(){
	$.get("https://hacker-news.firebaseio.com/v0/topstories.json").then(function(data){
		console.log(data);
		var topTen = data.slice(0,10);
		topTen.forEach(function(el) {
			$.get("https://hacker-news.firebaseio.com/v0/item/" + el + ".json").then(function(data){
				console.log(data);
				//downloads top ten stories 
			});
		});

	});
});