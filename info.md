

# TODO


# SOME IMPORTANT NOTES

- *github token* :  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


- The correct way to add auth token for github in javascript:
Add it in the header because github no longer accept data in url variables.
```javascript 

  fetch(
    URL,
    method: "GET",
    headers: {'Authorization': 'token <TOKEN>'} 
    )

```
here the URL is supposed to be a github API or raw.githubusercontent link.

**IMPORTANT** -> how to use async and await with fetch:

```javascript 
  // used with anonymous function
  (async () => {
    let data = await fetch(URL)
    let processed_data = await data.json() // or data.text()
  })()
```
after this the processed_data can be used as normal javascript data type.


- List all the contents of a github respotory using api call :
	`https://api.github.com/repos/{username}/{repository}/git/trees/master?recursive=1`
This returns the list of contents along with other information about files as a JSON return.


- List the respositories of a github user: 
  `https://api.github.com/search/repositories?q=user:{USERNAME}`
This will return all the public repositories by default.
If a *github token* is provided then it will return all repositories (including private repos)


- Getting the contents of a github file:
  `https://raw.githubusercontent.com/{user}/{repository}/{branch}/{filename}`
This is the URL format for getting the contents of a file from github.


- JSDelivr (cdn hosting helper)
use the `https://cdn.jsdelivr.net/gh/{user}/{repo}/{file}` for getting the file contents for usage.
Add the ".min" in the file name for automatic minification 
eg: `https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js`


- Marked (markdown parser for HTML) [github](https://github.com/markedjs/marked)

use example: 

```html
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>
    document.getElementById('content').innerHTML =
      marked.parse('# Marked in the browser\n\nRendered by **marked**.');
  </script>
```
online hosted parser link to use in HTML : "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
use ` marked.parse({markdown code}) ` and this will return the contents as HTML DOM elements.
