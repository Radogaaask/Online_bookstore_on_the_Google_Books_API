let path = require('path');  //библиотека для пути
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // для плагина css, стили прописываются в отдельном файле, а не в тэге

module.exports = {
    entry: path.resolve(__dirname, "index.js"),    //исходный файл
    output: {
        path: path.resolve(__dirname, 'bundle'), //output называем папку в которую собираем
        filename: "bundle.js",                      // all.js называем файл в котором собираем
    },
    mode: "development",    // переключение между Dev и Prod и будет ли собранный файл минифицирован (dev=norm, prod=minific...)
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [            // правила для сборщикак css
          { test: /\.scss$/i,       // regExp для пропуска определённых файлов
           use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }  // с начало преобразовывает css-loader, потом style-loader
        ]
      }
};