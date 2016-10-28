$(function(){
	var favoritesArray = [];
	$favoritesList = $("#favoritesList");
	$.getJSON("https://hn-favorites.herokuapp.com/stories.json").then(function(response){
		parseData(response);
	}).catch(function(error){
		console.log("error while trying to fetch data");
	});

	function parseData(responseData){
		favoritesArray = responseData;
		console.log(favoritesArray);

		favoritesArray.forEach(function(arrayItem,idx){
			console.log(arrayItem);
			var $divRow = $("<div>", {
				class: "row border"
			});
			var $firstColBox = $("<div>", {
				class: "col-xs-10 border"
			});
			var $storyBox = $("<div>", {
				class: "storyBox",
				text: arrayItem.title
			});
			var $authorBox = $("<div>", {
				class: "authorText",
				text: arrayItem.by
			});
			var $deleteBox = $("<div>", {
				class: "col-xs-2",
				text: ""
			});
			var $deleteBtn = $("<button>", {
				class: "btn btn-default clickable",
				type: "button",
				text: "Delete"
			});

			$favoritesList.append($($divRow)
					      .append($($firstColBox)
					      .append($storyBox)
					      .append($authorBox))
					      .append($deleteBox)
					      .append($deleteBtn));

			$favoritesList.on("click", "button", function(e){
				
			});
							 
		});

	}

	function removeFavoriteFromDisplay(){

	}

	function deleteFavoriteServerCall(idNumber){
		$.ajax({
		    method: "DELETE",
		    header: "Content-Type: application/json",
		    url: "https://hn-favorites.herokuapp.com/stories/"+idNumber+".json"
		}).then(function(response){
		    console.log(response);
		}).catch(function(error){
		    console.log(error);
		});
	}
	



});








