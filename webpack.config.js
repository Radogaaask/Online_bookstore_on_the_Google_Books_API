const path = require('path');  //библиотека для пути JS
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // для плагина CSS, стили прописываются в отдельном файле
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // минимизатор для scc

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),    //исходный файл
    output: {
        path: path.resolve(__dirname, 'bundle'), //output; папка, в которой собирается bundle
        filename: 'main.js',                      // main.js называем файл в котором собираем
    },
    mode: 'production',   // переключение между Dev и Prod
    plugins: [new MiniCssExtractPlugin()], //, new ESLintPlugin({fix: true}) // вместо (options) прописываем ({fix: true}) 
    module: {
        rules: [            // правила для сборщика CSS
          { test: /\.scss$/i,       // regExp для пропуска определённых файлов
           use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ]
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'bundle'), //webserver 
        },
      },
  
      optimization: {
        minimizer: [
          '...',
          new CssMinimizerPlugin(),
        ],
      },

    
};
