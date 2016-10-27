
//Get hacker news API to display top ten stories. 
$(function(){
	$.get("https://hacker-news.firebaseio.com/v0/topstories.json").then(function(data){
		console.log(data);
		var topTen = data.slice(0,10);
		topTen.forEach(function(el) {
			$.get("https://hacker-news.firebaseio.com/v0/item/" + el + ".json").then(function(data){
				$("ol").append(
					$('<li>')).append(
						$('<a>').attr('href', (data.url)).append(
							(data.title) + (" | by: " + (data.by))));
				// console.log(data.by);
				


				//downloads top ten stories 
			});
		});

	});
});

//title(links to url), author, 