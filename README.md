####  Documentation  
<!-- Project Description -->

* create a google dev API and obtain a google client secret key and a google client ID: console.developers.google.com

# slugchat configuration
* configure a .env module to include the following

``` bash
PORT=3000
NODE_ENV='dev'
SECRET='shark in the dark'
API_URL='http://localhost:3000'
CLIENT_URL='http://localhost:8080'
CORS_ORIGINS='http://localhost:8080'
MONGODB_URI='mongodb://localhost/slugchat-dev'
GOOGLE_CLIENT_SECRET='<put google client secret key here>'
GOOGLE_CLIENT_ID='<put your google client ID here>'
```
# Open three terminals:
* Server (for tests): npm mongo-on
* Server (backend, localhost 3000): npm start
* Client (frontend, localhost 8080): npm watch

#### Feature Tasks  
* token reducer for managing token
* auth actions module for making signup and login requests, storing, and clearing the token in the app state.
  * `/landing` - display a login with google anchor
  * `/chat` - display a p tag that says chat
