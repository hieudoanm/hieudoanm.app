import path from 'node:path';
import nodeExternals from 'webpack-node-externals';

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const DIR_NAME = path.dirname('');

export default {
  mode,
  target: 'node',
  entry: path.resolve(DIR_NAME, 'src/server.ts'),
  externals: [nodeExternals()],
  output: {
    path: path.resolve(DIR_NAME, 'dist'),
    filename: 'server.js'
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      }
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
};
