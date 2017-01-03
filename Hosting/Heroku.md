
#Host your Database
Before you can host your server you need a hosted database that is set up and functional. 
You can do a free 'tiny turtle' plan from elephantSQL https://www.elephantsql.com/
 - create an account
 - elephantsql will give you a new connectionString `URL` We will need this later. 
 - set up your DB and create your tables ext...
  - you can do this by either
    1. clicking the browser tab and recreating your DB
    2. or export your old DB as CSV file and upload it to your new DB
    3. or if you have a default schema SQL file, you can simply run that to recreate all your tables after you connect your new connection string.
 
###App configuration
If you are using MassiveDB, Your life will be simplified if you put your db folder at the root level of your app. 

#Create Heroku Account
- Create a heroku account   https://www.heroku.com/
- Create a new app, remember what you name it. 
- After your free app is set up, open your app in the heroku dashboard and navigate to the settings tab. In the settings tab, open your 'config vars'
  - in your 'config vars', you'll see that you can enter in key-value pairs. This is where you will put all sensitive keys and strings that you dont want being updloaded to github 
  - Enter into the 'config vars' `connectionString` as the key and ` The connectionString that elephantsql gave you ` as the value. 
  - we will be integrating this connectionString into your node server via enviornmental variables.

#Download Heroku CLI and set Heroku git remote
- Download Heroku CLI from heroku's website
- For the next part we will be working through the Mac Terminal. 
  - login to your heroku account from the from your Mac terminal by navigating to your project folder and typing `heroku login`
      Enter your Heroku credentials.
      Email: adam@example.com
      Password (typing will be hidden):
      You should see `Authentication successful`.

- Once you are logged in set a new heroku remote (we are assuming you already have git setup in your project)
  in your mac terminal type `git remote -v` to see your current remotes
  then type `heroku git:remote -a yourAppName` to set a new remote to heroku
- This will allow you to use git commands to push your code to your Heroku server. 


#Configure your app

In your app you will want to make the fallowing changes. 

  1. if there are any refferences to localhost, these will need to be changed to your new heroku url. Your heroku url can be found in the settings tab on your heroku dashboard.
  2. all DB strings, api keys, client secrets etc... should be put in your 'config vars' on your Heroku Dashboard. 
  3. to references any of your 'config vars' inside of your app, simply use `process.env.YourKeyName`. Here's an exanple. 

```javascript

var db = massive.connect({
    connectionString: process.env.connectionString
  })

 app.listen(process.env.PORT || 3000, function() {
    console.log('listening on port', this.address().port );
  });

```

Notice the use of the "or" || 
Using it allows you to specify both enviornmental variables as well as local variables. In this example the port will be specified by heroku when hosted, but default to 3000 when you're running locally. 


##To make your ENV vaiables work on local development
You can also set up your development envoirnment to provide your enviormental variables locally.

`apiKey=j83kgl9s8b node index.js`


#set up your package.json 
- set your `start script` to  `node index.js`. If your server file is in a subdirectory of the root of your app, reference the path to your server file like so `node server/index.js` 
- Check that all your depenencies are listed. Heroku will not install anything that is not listed in your dependancies. 

#setup your Procfile 
- Add a file on your app's root directory called `Procfile` 
Inside of your procfile, the fallowing code, replacing index.js with the name of your server file. 
`web: node index.js`  If your server file is in a subdirectory of the root, place the Procfile at the root and reference the path to your server file like so `web: node server/index.js` 

#Oauth
- Set your Oauth console to correct redirect uri. 
- Add your Heoku url to your whitelist 
