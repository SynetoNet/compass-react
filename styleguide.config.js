// const path = require("path");
const pkg = require("./package.json");

module.exports = {
  // this should be false, so we know what components don't have examples
  skipComponentsWithoutExample: false,
  // change build folder so we can deploy to Github Pages
  styleguideDir: "docs",
  // show only one section per page
  pagePerSection: true,
  version: pkg.version,
  require: [
    // include base styles
    "./src/base/styles.scss"
  ],
  ribbon: {
    url: "https://github.com/SynetoNet/compass-react",
    text: "Fork me on GitHub"
  },
  sections: [
    {
      name: "Setup",
      content: "docs/Setup.md"
    },
    {
      name: "Base",
      content: "docs/Base.md"
    },
    {
      name: "UI Components",
      components: "src/components*/**/*.jsx",
      // exampleMode: "expand",
      usageMode: "expand",
      sectionDepth: 1,
      pagePerSection: true
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader"
            }
          ]
        }
      ]
    }
  }
};
