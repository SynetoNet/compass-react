// const path = require("path");
const pkg = require("./package.json");

module.exports = {
  skipComponentsWithoutExample: false,
  styleguideDir: "docs",
  pagePerSection: true,
  version: pkg.version,
  require: [
    // include base styles
    "./src/foundation/styles.scss",
    // include styleguide layout styles
    "./docs/styles.css"
  ],
  sections: [
    {
      name: "Setup",
      content: "docs/Setup.md"
    },
    {
      name: "Base",
      sectionDepth: 1,
      pagePerSection: true,
      sections: [
        {
          name: "Colors",
          content: "docs/Colors.md"
        },
        {
          name: "Spacing",
          content: "docs/Spacing.md"
        }
      ]
    },
    {
      name: "UI Components",
      components: "src/**/components*/**/*.jsx",
      exampleMode: "expand",
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
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
  }
};
