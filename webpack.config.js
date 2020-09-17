/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const PRODUCTION = 'production';
const DEVLEOPMENT = 'development';

// 빌드용 html 파일을 자동 생성
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode,
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  // 빌드 결과물 dist/main.js 에 위치
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  resolve: {
    // 파일 확장자 처리
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          mode === 'production'
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : 'style-loader', // 개발 환경
          'css-loader',
          'sass-loader',
        ],
      },
      // .ts, .tsx 확장자 ts-loader 가 트랜스파일링
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          publicPath: mode === PRODUCTION ? '/dist/' : '/', // 파일 로더가 처리하는 파일을 모듈로 사용했을 때 경로 앞에 추가하는 경로
          name: 'images/[name].[ext]?[hash]', // 파일 로더가 아웃풋에 파일을 복사할 때 사용하는 파일이름, [원본파일].[확장자명][해쉬값]
          limit: 20000, // 20KB, 파일을 처리할 때의 크기 제한, 7KB 미만일 경우 url-loader 가처리, 이상일 경우 file-loader 가 처리
        },
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'url-loader',
            options: {
              publicPath: mode === PRODUCTION ? '/dist/' : '/', // 파일 로더가 처리하는 파일을 모듈로 사용했을 때 경로 앞에 추가하는 경로
              name: 'images/[name].[ext]?[hash]', // 파일 로더가 아웃풋에 파일을 복사할 때 사용하는 파일이름, [원본파일].[확장자명][해쉬값]
              limit: 20000, // 20KB, 파일을 처리할 때의 크기 제한, 7KB 미만일 경우 url-loader 가처리, 이상일 경우 file-loader 가 처리
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    // port: 3001,
    contentBase: path.join(__dirname + '/dist/'),
    // host: 'localhost',
    historyApiFallback: true,
    // host: '0.0.0.0',
  },
};
