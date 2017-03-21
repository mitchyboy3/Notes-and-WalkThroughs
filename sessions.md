express session middleware does a lot of the work for you. and it doesnt need to be confusing. 
cors will mess everything up and you need to use a proxy. 

what is salting a password? the best thing you can do is a random salt for each user. Even dropbox uses a pepper. to that you add a salt, then add a hash, then add encryption afterwards.


consider user experience. 
if you want them to have persisting data accross all browsers and devices you need to use your database. you can use jsonB to get a mongo user experience out of SQL

sessions are simple but do not persist accross all devices 

tokens are good but are stored locally and encrypted. You have to think. is it worth it? 