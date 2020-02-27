import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import visualizer from "rollup-plugin-visualizer";

export default [
  {
    input: [
      "src/index.js"
      // "src/components/DatePicker/DatePicker.jsx",
      // "src/components/Form/Form.jsx",
      // "src/components/Modal/Modal.jsx",
      // "src/components/Tabs/Tabs.jsx",
      // "src/components/Table/Table.jsx",
      // "src/components/ComboBox/ComboBox.jsx"
    ],
    output: [
      {
        dir: "lib",
        format: "cjs",
        sourcemap: true
      }
    ],
    external: ["react", "react-dom", "prop-types", "react-select"],
    plugins: [
      postcss({
        plugins: [autoprefixer]
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          '@trendmicro/react-sidenav': ['Nav', 'NavItem', 'NavIcon', 'NavText']
        }
      }),
      resolve({
        extensions: [".js", ".jsx"],
        mainFields: ["main"],
        preferBuiltins: false
      }),
      babel({
        exclude: "node_modules/**",
        externalHelpers: true
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
