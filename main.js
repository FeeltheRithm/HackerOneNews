
$(function(){
	$.get("https://hacker-news.firebaseio.com/v0/topstories.json").then(function(data){
		console.log(data);
		var topTen = data.slice(0,10);
		topTen.forEach(function(el) {
			$.get("https://hacker-news.firebaseio.com/v0/item/" + el + ".json").then(function(data){
				var appDiv = '<div data-url="' + data.url + '" class="topTen">' + '<button type="button">&#9734</button>' + '<a href="' + data.url + '">' + data.title  + " | by: " + data.by;
				$("#mainDiv").append(appDiv);
			});
		});

	});



	$("#mainDiv").on('click', function(event){
		if($(event.target).is(":button")){
			event.preventDefault();
			$(".favoriteList").append(this);
		}
	});
});




// $(function(){
// 	$.get("https://hacker-news.firebaseio.com/v0/topstories.json").then(function(data){
// 		console.log(data);
// 		var topTen = data.slice(0,10);
// 		topTen.forEach(function(el) {
// 			$.get("https://hacker-news.firebaseio.com/v0/item/" + el + ".json").then(function(data){
// 				($("#mainDiv").append($('<div data-url="' + data.url + '" class="topTen"></div)')).append(
// 					$('<button type="button">&#9734</button>')).append($('<a>').attr('href', (data.url)).append((data.title) + " | by: " + data.by)));
// 			});
// 		});

// 	});