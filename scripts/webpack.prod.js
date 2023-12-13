const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const getBaseConfig = require("./webpack.base");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const { resolveApp } = require("./utils");

const prodConfig = {
  output: {
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolveApp("public"),
          to: resolveApp("docs/public"),
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/*.html"],
          },
        },
        resolveApp("CNAME"),
        resolveApp("service-worker.js"),
      ],
    }),
  ],
  optimization: {
    // 压缩文件
    minimizer: [
      new TerserPlugin({
        exclude: /\.min\.js$/, // 排除已被压缩的js文件
        parallel: true, // 启用多线程并行运行，提高编译速度
        extractComments: false, // 是否将注释提取到单独的文件中
      }),
      new OptimizeCssPlugin(), // 压缩css
    ],
    // 代码分割
    splitChunks: {
      chunks: "all", // 三选一： "async"|"initial"|"all"
      minSize: 1200, // 代码大于多少kb才会生成一个新包
      cacheGroups: {
        antd: {
          test: /[\\/]node_modules[\\/]?antd[\\/]/, // 将antd的使用代码抽离成单独的文件
          name: "antd", // 抽离出来的chunk的名称
          minChunks: 1, // 被多少个chunk引用之后就提取出来
          priority: 10, // 缓存组的优先级
        },
      },
    },
  },
};

module.exports = merge(getBaseConfig(), prodConfig);
