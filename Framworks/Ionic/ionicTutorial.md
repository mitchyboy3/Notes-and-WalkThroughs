#Day 1 - Ionic Basics

###Ionic is...
- UI for mobile Angular, like Bootstrap or Material UI
http://ionicframework.com/docs/components/
http://ionicframework.com/html5-input-types/#overview 
http://ionicframework.com/docs/ - All docs
- app build tools for hybrid apps (part webview, part native)
- server (--lab for android & ios style)
- easy access to native device features
- iOS app, Android app, Windows app, mobile web with one code base
- AngularJS is included in the ionic.bundle.js file
- includes icons at http://ionicons.com/
- sample apps at http://showcase.ionicframework.com/
- more (viewer, creator, community)
###When to Use Ionic
- Mobile only project
- Low-medium complexity
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
Exercise
Migrate Angular ToDo app to a tab in the ionic tab starter.
Prep for Tomorrow!
1. Install xcode for tomorrow (and command line build tools)
	xcode-select --install
	choose "xcode" for xcode and command line build tools, choose install for just the tools
2. Install Ionic Viewer app on smartphone




#Day 2 - Ionic Emulate, Run, View

##Review
###Ionic Basics

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

Share with a friend/investor:
10. ionic share friend@gmail.com
Exercise
Update the Chats tab to "People" and list the people from www.swapi.co. Make sure you also update the chat-detail to "person-detail" to show the detail for any person clicked in the people list. Build it and run it in the emulator, viewer, or on a device.


Day 3 - Ionic Plugins

#Review
###Ionic Emulate, Run, View

###Ionic Creator
https://creator.ionic.io - drag and drop app designer on the web (Ionic 1.x)
Geolocation & Mapping Tutorial
http://www.gajotres.net/using-cordova-geoloacation-api-with-google-maps-in-ionic-framework/
Simplified steps:
ionic start geo blank
cd geo
ionic add ngCordova

Add to your index.html, right before the cordova.js:
<script src="lib/ngCordova/dist/ng-cordova.min.js"></script>

ionic plugin add cordova-plugin-geolocation
ionic plugin add cordova-plugin-whitelist

In the index.html, add a this controller and div to the ion-content tag:
<ion-content ng-controller="MapController">
	<div id="map" data-tap-disabled="true"></div>
</ion-content>

In the index.html, add this right before the closing body tag:

```javascript
	<script src="https://maps-api-ssl.google.com/maps/api/js?libraries=places"></script>
```
In the app.js file, add this controller after the run function:

```javascript

.controller('MapController', MapController);

MapController.$inject = ['$cordovaGeolocation', '$ionicLoading', '$ionicPlatform'];
    	function MapController($cordovaGeolocation, $ionicLoading, $ionicPlatform) {
          var mc = this;

            $ionicPlatform.ready(function() {

                $ionicLoading.show({
                    template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location...'
                });

                var posOptions = {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 0
                };

                $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                    var lat  = position.coords.latitude;
                    var long = position.coords.longitude;
                    var myLatlng = new google.maps.LatLng(lat, long);

                    var mapOptions = {
                        center: myLatlng,
                        zoom: 16,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                    mc.map = map;
                    $ionicLoading.hide();

                }, function(err) {
                    $ionicLoading.hide();
                    console.log(err);
                });
            });
        };
```

```css
In the style.css file, add these:
	#map { height: 100%; width: 100%; }
.scroll { height: 100%; }
```



