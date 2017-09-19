# Intro

* Who knows what a bundler is?
    * It's a way of combining many resources into one file.
* Also can often compile files

# Steps

* Install Node.js if not already installed
* Install webpack `npm install -g webpack`
    * May require `sudo npm install -g webpack`
* Create a folder and open your text editor in it.
* Add a `webpack.config.js` file


        module.exports = { //completely normal js file, we can even make calculations
            entry: "./src/app.js", // the first file we should use from which we'll import everything else
            output: {
                path: __dirname, // the path our bundle will be put in
                filename: "bundle.js" // our file
            }
        };

* add a `app.js` in the src folder
* Now can compile with `webpack`
