# HackerOneNews

Now that we have done something with a HTTP GET, let's work on modifying data on the server. The next application will be a hacker news story site. Use the hacker news api to get the first 10 top stories and dispaly them on the screen. Next, use the stories api here to save your favorite story. You will have to make a POST request to post a new favorite to the api.

Requirements

Step One: Get the hacker news api to display top 10 stories

Step two: The top 10 stories page should have a button to favorite each story.

Step three: On a separate page, use the stories api to display a list of favorites.

Step four: Allow the user to delete a favorite from the list of favorites

Step five: Have navigation between the favorites page and the top 10 page.

Step six: A favorite should save the story id, story title, who the story is by, and the url of the story

Step seven: The list of stories on the favorite page or on the top 10 page, should link to the actual story.
Stories API

The stories api allows creating, editing, updating, and deleting of a favorite story. To see all of the stories that have been favorited, make a GET request to:

https://hn-favorites.herokuapp.com/stories.json
Expected results:

[
 {
  "id":1,
  "by":"DiabloD3",
  "story_id":12804483,
  "title":"Samsung Sets Its Reputation on Fire with Bogus DMCA Takedown Notices",
  "url":"https://hn-favorites.herokuapp.com/stories/1.json",
  "created_at":"2016-10-27T14:42:10.834Z",
  "updated_at":"2016-10-27T14:42:10.834Z"
  }
]
To create a favorite story, make a POST request to:

https://hn-favorites.herokuapp.com/stories.json