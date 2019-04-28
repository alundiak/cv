import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
// import PrettierPlugin from 'prettier-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';

export default env => {
    const { ifDev, ifProd } = getIfUtils(env);
    return {
        // target: 'web' // web by default behavior, but if need to use SSR, then need to switch to 'node'
        // target: 'node'
        entry: './src/index.jsx',
        output: {
            path: resolve(__dirname, 'dist'),
            publicPath: ifDev('/', './'),
            filename: 'cv.js'
        },

        resolve: {
            modules: ['node_modules', 'src'],
            // mainFields: ['module'/* , 'esm', 'jsnext:main', 'main', 'browser' */], // standard sequence is browser, main, module
            extensions: ['.js', '.jsx', '.json']
        },

        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: removeEmpty([
                        ifDev('css-hot-loader'),
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ])
                },
                {
                    test: /\.less$/,
                    use: removeEmpty([
                        ifDev('css-hot-loader'),
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                relativeUrls: false
                            }
                        }
                    ])
                },
                {
                    test: /\.(png|svg|jpg|gif|pdf|woff(2)?|ttf|eot|svg)$/,

                    // Simple usage
                    use: [
                        'file-loader',
                    ]

                    // A bit advanced usage
                    // use: [
                    //     {
                    //         loader: "file-loader",
                    //         options: {
                    //             name: ifDev('[name].[ext]', '[hash].[ext]'),
                    //             // name: '[hash].[ext]', // Default value by loader. Good for Production, but not for open source.
                    //             // name: '[name]_[md5:hash].[ext]',
                    //             // name: '[path][name].[ext]',
                    //             outputPath: 'images', // if omitted, then it goes in root output directory.
                    //             publicPath: ifDev('/images', './images'), // default "__webpack_public_path__"
                    //         }
                    //     }
                    // ]

                    // More advanced usage (to fix CSS url() issue)
                    // use: {
                    //     loader: 'url-loader', // converts any image into base64 and inject into JSX/HTML.
                    //     options:{
                    //         fallback: 'file-loader',
                    //         name: ifDev('[name].[ext]', '[hash].[ext]'),
                    //         outputPath: 'images',
                    //         publicPath: ifDev('/images', './images'),
                    //     }
                    // }
                }
            ]
        },

        plugins: removeEmpty([
            ifDev(new webpack.HotModuleReplacementPlugin()),
            new HtmlWebpackPlugin({
                title: 'CV',
                prod: ifProd(true, false),
                filename: 'index.html',
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: "cv.css"
            }),

            // Related to using 'react-pdf' package.
            // https://github.com/wojtekmaj/react-pdf
            new CopyWebpackPlugin([
                {
                    from: 'node_modules/pdfjs-dist/build/pdf.worker.js',
                    to: './'
                },
            ]),

            // new PrettierPlugin({
            //     printWidth: 100,              // Specify the length of line that the printer will wrap on. Default is 80. - eslint maxlen ?
            //     tabWidth: 4,                  // Specify the number of spaces per indentation-level.
            //     useTabs: false,               // Indent lines with tabs instead of spaces.
            //     semi: true,                   // Print semicolons at the ends of statements.
            //     singleQuote: true,
            //     encoding: 'utf-8',
            //     extensions: ['.jsx']
            // })
            // Prettier does have issue with func-name eslint rule (anonymous func change with no spaces.)
        ]),

        devServer: {
            host: 'localhost',
            port: 5000,
            hot: ifDev(true, false)
        },

        devtool: 'source-map'
    }
};
