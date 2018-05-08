var webpack  = require('webpack');
var path = require('path');


//自动配置入口对象

//配置对象
var config = {
   entry : {
         loading : './loading.js'
   },
   output : {
       path :  path.resolve(__dirname,'dist'),
       filename : '[name].js',
   }, 
   module :{
       rules : [
           {
               test : /\.css$/,
               loaders: [
                "style-loader",
                "css-loader",
                "sass-loader"
               ]
           },
           {
            test : /\.scss$/,
            loaders: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
           },
           {
              test: /\.(png|jpg|jpeg|gif)$/,
              loaders : [
                'url-loader?limit=10240&name=img/[hash:8].[ext]',
                'img-loader?minimize&optimizationLevel=5&progressive=true'
                ]
           },
           {
               test : /\.js$/,
               loader : 'babel-loader',
               exclude: /node_modules/,
               query: {
                 presets: ['es2015']
               }
           },
           {
               test : /\.vue$/,
               loaders : [
                   'vue-loader'
              ],
               exclude: /node_modules/,
           }
       ] 
   },
   devtool: 'inline-source-map',
   devServer: {
         contentBase:'../',
         publicPath: "../dist/",
         inline:true,
     },
   plugins : [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env': 
          {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
          }
     }),
     new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
   ],
   resolve : {
       //定制引用文件路径
       extensions: ['.js', '.vue', '.json','.css'],
       alias : {
       }
   },
   externals: {

  }
}


module.exports = config;

