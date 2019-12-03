# rollup.js + Bublé + SASS + PostCSS + Nunjucks starter

This repo serves as simple static website starter.

# Stack

* [Nunjucks](https://mozilla.github.io/nunjucks/) for templates
* [SASS](http://sass-lang.com/) + [PostCSS](http://postcss.org/) (autoprefixer) for stylesheets with source maps
* [rollup.js](http://rollupjs.org/) + [Bublé](https://gitlab.com/Rich-Harris/buble) + [eslint](https://eslint.org/) for ES6 javascript with source maps

# Getting started

## Installing

* ```fork``` this repo
* ```clone``` your fork
* ```npm install``` to install all dependencies
* ```npm start``` to start a dev server

## Running the dev server

After you have installed all dependencies run ```npm start``` (aliases ```npm run development``` and ```npm run watch```) to start local server which will watch for files changes and then rebuild and reload.

## Build

Build files using ```npm run production```

## Output folder

Files are compiled into ```public/``` folder.

Output folder can be changed in ```package.json``` by changing "output" property

    "config": {
        "output": "public",
        "port": "8080"
    }

# License
[MIT](/LICENSE)
