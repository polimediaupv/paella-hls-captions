const path = require('path');
const config = require('./webpack.common');

config.entry = './src/index.js',
config.output = {
	path: path.join(__dirname, "dist"),
	filename: 'paella-hls-captions.js',
	library: 'paella-hls-captions',
	libraryTarget: 'umd'
};

module.exports = config;