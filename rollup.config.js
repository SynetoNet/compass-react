import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import visualizer from "rollup-plugin-visualizer";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true
      }
    ],
    external: ["react", "react-dom", "prop-types"],
    plugins: [
      postcss({
        plugins: [autoprefixer]
      }),
      babel({
        exclude: "node_modules/**",
        externalHelpers: true
      }),
      resolve(),
      commonjs({
        include: /node_modules/
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
