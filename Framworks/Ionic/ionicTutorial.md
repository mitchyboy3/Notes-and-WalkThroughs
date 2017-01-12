#Ionic Basics

http://ionicframework.com/docs/components/
http://ionicframework.com/html5-input-types/#overview 
http://ionicframework.com/docs/ 

###When to Use Ionic
- Mobile only project
- CRUD apps
- Need to run on multiple platforms (iOS, Android, Web)
- If it can run well in a mobile web browser, it can be an Ionic app
###Ionic Setup
http://ionicframework.com/getting-started/
1. Install node.js (from www.nodejs.org) 
2. sudo npm install -g cordova ionic
3. ionic start myApp tabs (in your projects folder)
4. cd myApp
5. ionic serve --lab

Edit and save a page. Notice the live reload.

Note: All js, css, etc must be local to build into an app (no CDNs). Use "bower install ng-storage" in your project directory to get that package added to your www/lib directory.

###More Learning
http://appcamp.io/ - AWESOME! Interactive, like codeschool.com. (Ionic 1.x)
Building Mobile Apps with Ionic on Pluralsight
app to a tab in the ionic tab starter.


#Ionic Emulate, Run, View

1. Install xcode for tomorrow (and command line build tools)
	xcode-select --install
	choose "xcode" for xcode and command line build tools, choose install for just the tools
2. Install Ionic Viewer app on smartphone

###Emulate & Run
Create new tabs starter app, view in browser, then build into an IOS app.
1. ionic start myApp tabs
2. cd myApp
3. ionic serve (just to make sure it runs without errors in Chrome)
4. sudo npm install -g ios-sim
5. ionic build ios
6. ionic emulate ios

If you have an iPhone or iPod Touch, you can run it on your device.
7. [connect device to mac]
8. run xcode
9. open plaforms/ios/cordova project file
10. [change settings, coming soon]
11. run project
12. select option to fix issues
Ionic Upload, View, Share
Create an ionic account:
1. Go to https://ionic.io 
2. Click Sign Up

Upload app:
3. cd myApp
4. ionic upload

View app on device:
5. Run Ionic View app on mobile device
6. Login
7. Click on your app in app list
8. If on Android, click Download Files
9. Click View App

Share 
10. ionic share friend@gmail.com


#Ionic Plugins

###Ionic Creator
https://creator.ionic.io - drag and drop app designer on the web (Ionic 1.x)

