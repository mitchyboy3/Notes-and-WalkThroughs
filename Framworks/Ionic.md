#GETTING STARTED IN IONIC v1 

###npm install depencencies globally. 
  - ionic depencencies
  - ng-cordova depencencies

###Ionic lab
  - This allows you to see both the android and ios versions of your app in real time. NOTE that ionic serve is replacing ionic lab as of 2017. 

###download ionic view on phone 
  - http://view.ionic.io/
  - found in the app store 
  - This allows you to pull up the app on your phone durring development. 

###make account on ionic io 
  - https://apps.ionic.io/apps 
  - This account is the glue between what is on your phone (ionic view) and what is on the computer (ionic lab)  

##A few resources 
  - https://www.youtube.com/watch?v=mjjLq43miYY "Build an Ionic App in 45 minutes (or less)" 
  - https://www.youtube.com/watch?v=XFPZ8Tj48SU "The Complete Guide To Images With Ionic"
  - https://cordova.apache.org/docs/en/latest/guide/overview/index.html - this is the cordova library (cordova is a library that gives you access to a phones native functionality)
  - http://gonehybrid.com/how-to-debug-the-white-screen-of-death-in-your-ionic-app/ - Ionic debugging on the phone. 
  - https://ionicframework.com/docs/v1/ - These are the ionic docs 

# Tips 
1. When you start creating the app, ionic will create the app.js file will all of the controllers and service built in. We reccoment breaking it apart into seperate files. Just like an angular app. The way DevMnt teaches. 
2. Hosting is the only way to really test your app. You will need to host your database first, then host your server. Note that your server will not be serving your app in a public folder like a website. You will have your app in a seperate file from your server. Your app will communicate with your server like an api. 
3. if its working git commit it. Ionic often breaks your code in ways you wont expect and you might need to revert to old commits. 
4. Learn the ionic terminal commands. (ionic serve, ionic upload, etc...) it will speed up the testing process. 
5. When testing, never assume that what you see in ionic serve is what you will see on your phone. 
6. Wire frame your app first before coding. By wireframe we mean down to each button and what functionality every aspect of your app will have. For example if you want pop-ups, you will need to plan aheaad to get this functionality. 
7. Download libraries when possible rather than linking to the them. 
8. You have the option of starting with template apps. You can play with it, but build your app on a blank starter. 
9. Keep in mind that Angular libraries often do not apply, you might have to use their 'ionic' versions. such as ui-router. 
10. If youre on a mac you can build in both IOS and Android. This is not the case for Windows as far as we know. Good Luck. 

#DEBUGGING

##android sdk 
  - https://developer.android.com/studio/index.html
##java JDK 
  - http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html



