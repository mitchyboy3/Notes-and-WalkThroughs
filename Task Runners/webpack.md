WebPack 
Include the fallowing files… 

```javascript 
	node_modules
		i —save-dev 
			"babel-core"
    			"babel-loader”
   			 "babel-preset-es2015"
   			 "babel-preset-react"
    			 "concurrently"
  			 "webpack"
		i—save
			 "react"
   			 "react-dom"

### webpack.config.js ### 
		module.exports = {
 		   entry: [
       		 './index.js'
    		]
   		 , module: {
   		     loaders: [
           		 {
             		   test: /\.js/
              		  , exclude: /node_modules/
             		   , loader: 'babel'
      		      }
         	   , {
                test: /\.css/
                , exclude: /node_modules/
                , loader: 'style-loader!css-loader'
    	        }
	        ]
		    }
	    , resolve: {
	        extensions: ['', '.js', '.jsx']
	    }
	    , output: {
	        path: __dirname + '/dist'
	        , publicPath: '/'
	        , filename: 'bundle.js'
	    }

	};

	.babelrc 
		{
		   "presets":[
		    "babel-preset-es2015",
		    "babel-preset-react"
		  ]
		}

```