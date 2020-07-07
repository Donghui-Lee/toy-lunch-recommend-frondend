const path = require("path");
const mode = process.env.NODE_ENV || "development";

// 빌드용 html 파일을 자동 생성
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode,
  entry: {
    main: path.resolve(__dirname, "src", "index.tsx")
  },
  // 빌드 결과물 dist/main.js 에 위치
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  resolve: {
    // 파일 확장자 처리
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // .ts, .tsx 확장자 ts-loader 가 트랜스파일링
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    port: 3001,
    contentBase: __dirname + "/dist/",
    host: "localhost"
  }
};
