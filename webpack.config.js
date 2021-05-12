const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebExtWebpackPlugin = require('web-ext-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const Handlebars = require('handlebars')
/*const MiniCssExtractPlugin = require('mini-css-extract-plugin');*/


// Look for a --firefox <path> argument
const firefoxIndex = process.argv.indexOf('--firefox');
const firefox =
    firefoxIndex !== -1 && firefoxIndex < process.argv.length - 1
        ? process.argv[firefoxIndex + 1]
        : undefined;

// Likewise for firefoxProfile
const firefoxProfileIndex = process.argv.indexOf('--firefoxProfile');
const firefoxProfile =
    firefoxProfileIndex !== -1 && firefoxProfileIndex < process.argv.length - 1
        ? process.argv[firefoxProfileIndex + 1]
        : undefined;


const commonConfig = {
    mode: 'production',
    context: path.resolve(__dirname, './src'),
    module: {
        rules: [
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        esModule:true,
                        preprocessor: (content, loaderContext) => {
                            let result;

                            try {
                                result = Handlebars.compile(content)({
                                    app_title: 'IP INFO PLUS',
                                    app_sub_title: 'IP INFORMATION:',
                                });
                            } catch (error) {
                                loaderContext.emitError(error);

                                return content;
                            }

                            return result;
                        },
                    }
                }]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader : "file-loader",
                    options : {
                        name: "[name].[contentHash].[ext]",
                        outputPath:"assets/images/"
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['ip-info-plus'],
            minify:true,
            scriptLoading :'blocking',
            filename: 'ip-info-plus.html',
            template: 'assets/html/template.html',
        }),
        new HtmlWebpackTagsPlugin({
            tags: ['assets/css/app.css'],
            append: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: './_locales/', to: './_locales/'},
                {from: './assets/images/', to: './assets/images/[name].[ext]'},
            ]
        }),
    ],
}

const commonExtConfig = {
    ...commonConfig,
    entry: {
        'content': ['./assets/ts/app.ts','./manifest.json.src'],
        'background': './assets/ts/background.ts',
        'ip-info-plus': './assets/ts/ipinfo.ts',
    }
};

const firefoxConfig = {
    ...commonExtConfig,
    module: {
        rules: [
            ...commonExtConfig.module.rules,
            {
                type: 'javascript/auto',
                test: /\.src$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name]"
                        }
                    }, {
                        loader: 'webpack-preprocessor-loader',
                        options: {
                            params: {
                                browser_specific_settings: true,
                                supports_svg_icons: true,
                                supports_browser_style: true,
                            },
                            verbose: false,
                        },
                    },
                ]
            },
            {
                test: /\.ts$/,
                use: ['ts-loader', {
                    loader: 'webpack-preprocessor-loader',
                    options: {
                        params: {
                            ENV: 'production',
                            debug: false,
                        },
                        verbose: false,
                    },
                },],
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist-firefox'),
        filename: 'assets/js/[name].js',
    },
    plugins: [
        ...commonExtConfig.plugins,
        new WebExtWebpackPlugin({
            sourceDir: path.resolve(__dirname, 'dist-firefox'),
            firefox,
            firefoxProfile,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: './assets/sass/app.css*', to: './assets/css/[name].[ext]'}
            ]
        }),
        new JavaScriptObfuscator({
            rotateStringArray: true
        })
    ],
};

const chromeConfig = {
    ...commonExtConfig,
    module: {
        rules: [
            ...commonExtConfig.module.rules,
            {
                type: 'javascript/auto',
                test: /\.src$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name]"
                        }
                    }, {
                        loader: 'webpack-preprocessor-loader',
                        options: {
                            params: {
                                browser_specific_settings: false,
                                supports_svg_icons: false,
                                supports_browser_style: true,
                            },
                            verbose: false,
                        },
                    },
                ]
            },
            {
                test: /\.ts$/,
                use: ['ts-loader', {
                    loader: 'webpack-preprocessor-loader',
                    options: {
                        params: {
                            ENV: 'production',
                            debug: false,
                        },
                        verbose: false,
                    },
                },],
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist-chrome'),
        filename: 'assets/js/[name].js',
    },
    plugins: [
        ...commonExtConfig.plugins,
        new CopyWebpackPlugin({
            patterns: [
                {from: './assets/sass/app.css*', to: './assets/css/[name].[ext]'}
            ]
        }),
        new JavaScriptObfuscator({
            rotateStringArray: true
        })
    ],
};

const testConfig = {
    ...commonExtConfig,
    name: 'tests',
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            ...commonExtConfig.module.rules,
            {
                type: 'javascript/auto',
                test: /\.src$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name]"
                        }
                    }, {
                        loader: 'webpack-preprocessor-loader',
                        options: {
                            params: {
                                browser_specific_settings: false,
                                supports_svg_icons: false,
                                supports_browser_style: true,
                            },
                            verbose: false,
                        },
                    },
                ]
            },
            {
                test: /\.ts$/,
                use: ['ts-loader', {
                    loader: 'webpack-preprocessor-loader',
                    options: {
                        params: {
                            ENV: 'development',
                            debug: true,
                        },
                        verbose: false,
                    },
                },],
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, './tests'),
        filename: 'assets/js/[name].js'
    },
    plugins: [
        ...commonExtConfig.plugins,
        new CopyWebpackPlugin({
            patterns: [
                {from: './assets/sass/app.css*', to: './assets/css/[name].[ext]'}
            ]
        }),
    ],
}

module.exports = (env, argv) => {
    let configs = [testConfig]
    if (env && env.target === 'chrome') {
        configs.push({...chromeConfig, name: 'extension'})
    } else {
        configs.push({...firefoxConfig, name: 'extension'})
    }

    return configs;
};