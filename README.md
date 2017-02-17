#Informant

Company ratings based on views/opinions of social media.


##A tl;dr React Setup
	
`npm init`

**Fill out information about our webapp in the package.json.**

**Install React.**
```
npm install --save react@0.14.7
npm install --save react-dom@0.14.7
```

**Install Webpack and Webpack server.**
```
npm install --save-dev webpack@1.12.12
npm install webpack-dev-server@1.12.1 -g
```

**Install Babel and JSX.**
```
npm install --save-dev babel-loader@6.2.1
npm install --save-dev babel-core@6.4.5
npm install --save-dev babel-preset-es2015@6.3.13
npm install --save-dev babel-preset-react@6.3.13
```

**Write a hello.jsx.**

```
import React from 'react';
import ReactDOM from 'react-dom';
 
class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}
 
ReactDOM.render(<Hello/>, document.getElementById('hello'));
```

**Write a world.jsx.**

```
import React from 'react';
import ReactDOM from 'react-dom';
 
class World extends React.Component {
  render() {
    return <h1>World</h1>
  }
}
 
ReactDOM.render(<World/>, document.getElementById('world'));
```

**Write an index.html.**

```
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello React</title>
  </head>
  <body>
    <div id="hello"></div>
    <div id="world"></div>
  </body>
</html>
```

**Create an index.js (This is where the app starts, it's our "entry point")**
```
import Hello from './hello.jsx';
import World from './world.jsx';
```

**Create a webpack.config.js (a fancy configuration file that tells webpack what to compile)**
```
var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
```

**Rewrite index.html.**
```
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello React</title>
  </head>
  <body>
    <div id="hello"></div>
    <div id="world"></div>
    <!-- Just add this! bundle.js is our compiled build -->
    <script src="bundle.js"></script>
  </body>
</html>
```

**Run our app!**
```
webpack-dev-server --progress --colors
```

https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html


**Learn ES5 React, Part I & II: https://www.codecademy.com/learn/react-101**

**Google other tutorials if you're hungry.**

**Learn from a Youtube Pro (a bit advanced): https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b**

**React Docs: https://facebook.github.io/react/**
