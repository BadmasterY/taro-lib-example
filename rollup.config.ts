import NodePath from "path";
import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupTypescript from "rollup-plugin-typescript2";
import RollupImage from "rollup-plugin-img";
import RollupScss from "rollup-plugin-scss";
import RollupCopy from "rollup-plugin-copy";
import RollupStrip from "@rollup/plugin-strip";
import RollupDelete from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";

import Package from "./package.json";

const resolveFile = path => NodePath.resolve(__dirname, path);

const externalPackages = [
  "react",
  "react-dom",
  "redux",
  "react-redux",
  "@tarojs/components",
  "@tarojs/runtime",
  "@tarojs/taro",
  "@tarojs/react"
];

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: "umd",
      name: "TaroLibExample",
      sourcemap: true,
      exports: "named",
      globals: {
        react: "React",
        "@tarojs/components": "components",
        "@tarojs/taro": "Taro"
      }
    }
  ],
  external: externalPackages,
  plugins: [
    RollupDelete({
      targets: ["dist/*"]
    }),
    RollupScss(),
    RollupImage({
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      limit: 30 * 1024
    }),
    RollupNodeResolve({
      moduleDirectories: ["node_modules"]
    }),
    RollupJson(),
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupTypescript({
      tsconfig: resolveFile("tsconfig.rollup.json"),
      //   extensions: [".js", ".ts", ".tsx"],
      clean: true
    }),
    RollupStrip({
      labels: ["unittest"],
      functions: ["console.log"],
      include: "**/*.js",
      exclude: /\/node_modules\//
    }),
    RollupCopy({
      targets: [{ src: "src/components/*/imgs/*", dest: "dist/imgs" }]
    }),
    terser()
  ]
};
