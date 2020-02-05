const path = require("path");
const pkg = require("./package.json");

module.exports = {
  skipComponentsWithoutExample: true,
  styleguideDir: "docs", // change build folder so we can deploy to Github Pages
  pagePerSection: true, // show only one section per page
  version: pkg.version,
  require: [
    "./src/base/styles.scss" // include base styles
  ],
  ribbon: {
    url: "https://github.com/SynetoNet/compass-react",
    text: "Fork me on GitHub"
  },
  theme: {
    color: {
      sidebarBackground: "#F4E8Fa"
    },
    sidebarWidth: 260
  },
  sections: [
    {
      name: "Setup",
      content: "src/Setup.md"
    },
    {
      name: "Base",
      content: "src/base/Base.md",
      sectionDepth: 1,
      sections: [
        {
          name: "Typography",
          content: "src/base/Typography.md"
        },
        {
          name: "Colors",
          content: "src/base/Colors.md"
        },
        {
          name: "Utilities",
          content: "src/base/Utilities.md"
        }
      ]
    },
    {
      name: "Layout",
      sections: [
        {
          name: "Layout",
          content: "src/layout/Layout/Layout.md"
        },
        {
          name: "Grid",
          content: "src/layout/Grid/Grid.md",
          components: "src/layout/Grid/**/*.jsx",
          usageMode: "collapse"
        }
      ]
    },
    {
      name: "UI Components",
      components: "src/components*/**/*.jsx",
      usageMode: "expand",
      ignore: "src/components*/Form/**/*.jsx",
      sectionDepth: 1
    },
    {
      name: "Form Components",
      content: "src/components/Form/Form.md",
      components: "src/components*/Form/**/*.jsx",
      ignore: "src/components*/Form/Form.jsx",
      usageMode: "expand",
      sectionDepth: 1
    }
  ],
  // Override Styleguidist components
  styleguideComponents: {
    // LinkRenderer: path.join(__dirname, "src/Styleguide/LinkRendererWrapper")
  },
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
