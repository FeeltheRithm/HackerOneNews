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
					      .append($($deleteBox)
					      .append($deleteBtn)));		 
		});

		$favoritesList.on("click", "button", function(e){
			var $listRows = $("#favoritesList").children();
			var $clickedOn = $(e.target).parent().parent();
			var rowNumber = $listRows.index($clickedOn);
			deleteFavoriteServerCall(favoritesArray[rowNumber].id, rowNumber);

			
		});

	}

	function removeFavoriteFromDisplay(rowNumber){
		console.log("SUCCESS! " + rowNumber);
		var $listRows = $("#favoritesList").children();
		$listRows.eq(rowNumber).remove();
	}

	function deleteFavoriteServerCall(idNumber, rowNumber){
		$.ajax({
		    method: "DELETE",
		    header: "Content-Type: application/json",
		    url: "https://hn-favorites.herokuapp.com/stories/"+idNumber+".json"
		}).then(function(response){
		    removeFavoriteFromDisplay(rowNumber);
		}).catch(function(error){
		    console.log(error);
		});
	}
	



});








