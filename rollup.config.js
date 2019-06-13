import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-copy";
import visualizer from "rollup-plugin-visualizer";
// import pkg from "./package.json";

export default [
  {
    input: [
      "src/index.js",
      // "src/layout/Container.jsx",
      // "src/layout/Col.jsx",
      // "src/layout/Row.jsx",
      // "src/components/Badge/Badge.jsx",
      // "src/components/Button/Button.jsx",
      // "src/components/Dropdown/Dropdown.jsx",
      "src/components/DatePicker/DatePicker.jsx",
      "src/components/Form/Form.jsx",
      "src/components/Modal/Modal.jsx",
      "src/components/Tabs/Tabs.jsx"
    ],
    output: [
      {
        dir: "lib",
        format: "esm",
        sourcemap: true
      }
    ],
    external: ["react", "react-dom", "prop-types"],
    plugins: [
      postcss({
        plugins: [autoprefixer]
      }),
      resolve({
        extensions: [".mjs", ".js", ".jsx"]
      }),
      babel({
        exclude: "node_modules/**",
        externalHelpers: true
      }),
      commonjs({
        include: /node_modules/
      }),
      copy({
        targets: ["src/base/assets"],
        outputFolder: "lib"
      }),
      visualizer({
        filename: "./docs/statistics.html",
        title: "Compass React Bundle",
        sourcemap: true
      })
    ]
  },
  // build base css separately
  {
    input: "src/base/styles.scss",
    output: {
      file: "lib/styles.css",
      format: "esm"
    },
    plugins: [
      postcss({
        extract: true,
        plugins: [autoprefixer]
      })
    ]
  }
];
