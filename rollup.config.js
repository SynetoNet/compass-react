import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import scssVariable from 'rollup-plugin-sass-variables';
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import visualizer from "rollup-plugin-visualizer";
import image from '@rollup/plugin-image';

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
        format: "umd",
        name: "compass-react",
        sourcemap: true
      }
    ],
    external: ["react", "react-dom", "prop-types", "react-select"],
    plugins: [
      image(),
      postcss({
        plugins: [autoprefixer]
      }),
      commonjs({
        include: /node_modules/,
        // namedExports: {
        //   '@trendmicro/react-sidenav': ['Nav', 'NavItem', 'NavIcon', 'NavText']
        // }
      }),
      resolve({
        extensions: [".js", ".jsx"],
        mainFields: ["main"],
        preferBuiltins: false
      }),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'inline'
      }),
      copy({
        targets: [{ src: "src/base/assets", dest: "lib"} ]
      }),
      visualizer({
        filename: "./docs/statistics.html",
        title: "Compass React Bundle",
        sourcemap: true
      }),
      scssVariable()
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
